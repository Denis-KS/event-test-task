import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import App from '../App';
import 'jest-styled-components';
import fetchMock from 'fetch-mock';

const veryLongText = 
`
    testtesttesttesttesttesttesttesttesttesttesttest
    testtesttesttesttesttesttesttesttesttesttesttest
    testtesttesttesttesttesttesttesttesttesttesttest
`;

beforeEach(() => {
    render(<App />);
    fetchMock.mock('http://www.mocky.io/v2/5bcdd3942f00002c00c855ba', { status: 200, body: [
        { "id": 0, "name": "Cycling" },
        { "id": 1, "name": "Hiking" }
    ] });
    fetchMock.mock('http://www.mocky.io/v2/5bcdd7992f00006300c855d5', { status: 200, body: [ 
      { "id": 2, "name": "Philip", "lastname": "Hughes", "email": "philip.hughes@hussa.rs" }, 
      { "id": 3, "name": "Walter", "lastname": "Nelson", "email": "walter.nelson@hussa.rs" }
    ] });
});

afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
})

test('should load form sections and submit button', async () => {
  expect(await screen.findByText('About')).toBeInTheDocument();
  expect(screen.getByText('Coordinator')).toBeInTheDocument();
  expect(screen.getByText('When')).toBeInTheDocument();
  expect(screen.getByText('Publish Event')).toBeInTheDocument();
});

test('should fail on empty submit', async () => {
    fireEvent.click(screen.getByText('Publish Event'));

    expect(await screen.findByTestId('form-field-error-ipad-Title')).toHaveTextContent('Title cannot be empty');
    expect(await screen.findByTestId('form-field-error-ipad-Description')).toHaveTextContent('Description cannot be empty');
    expect(await screen.findByTestId('form-field-error-ipad-Starts on')).toHaveTextContent('Date cannot be empty');
});

test('should show description error on breaking char limit', async () => {
    fireEvent.change(screen.getByPlaceholderText('Write about your event, be creative'), { target: { value: veryLongText, name: 'description' } });
    expect(await screen.findByTestId('form-field-error-ipad-Description')).toHaveTextContent('Description cannot be greater than 140 characters');
});

test('should show count of description char count', async () => {
    fireEvent.change(screen.getByPlaceholderText('Write about your event, be creative'), { target: { value: 'test', name: 'description' } });
    expect(await screen.findByTestId('text-area-char-count')).toHaveTextContent('4/140');
});

test('should show and hide Fee input', async () => {
    fireEvent.click(screen.getByText('Paid Event'));
    expect(await screen.findByPlaceholderText('Fee')).toBeVisible();
    fireEvent.click(screen.getByText('Free Event'));
    expect(screen.queryByPlaceholderText('Fee')).toBeNull();
});

test('should show payment error on empty Fee', async () => {
    fireEvent.click(screen.getByText('Paid Event'));
    expect(await screen.findByPlaceholderText('Fee')).toBeVisible();
    
    fireEvent.click(screen.getByText('Publish Event'));
    const error = await screen.findByTestId('form-field-error-ipad-Payment');

    expect(error).toBeVisible();
    expect(error).toHaveTextContent('Fee cannot be empty');
});

test('should show error on invalid email', async () => {
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'test', name: 'email' } });
    expect(await screen.findByTestId('form-field-error-ipad-Email')).toHaveTextContent('Email address is invalid');
});

test('should not show error on valid email', async () => {
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'test@test.com', name: 'email' } });
    expect(screen.queryByTestId('form-field-error-ipad-Email')).toBeNull();
});

test('should render different errors on date and time empty', async () => {
    fireEvent.click(screen.getByText('Publish Event'));
    expect(await screen.findByTestId('form-field-error-ipad-Starts on')).toHaveTextContent('Date cannot be empty');

    fireEvent.change(screen.getByRole('date'), { target: { value: '1111-11-11', name: 'date' } });
    expect(await screen.findByTestId('form-field-error-ipad-Starts on')).toHaveTextContent('Time cannot be empty');

    fireEvent.change(screen.getByRole('time'), { target: { value: '00:00', name: 'time' } });
    expect(screen.queryByTestId('form-field-error-ipad-Starts on')).toBeNull();
});

test('should fill and submit the form', async () => {
    fireEvent.change(screen.getByPlaceholderText('Make it short and clear'), { target: { value: 'test', name: 'title' } });
    fireEvent.change(screen.getByPlaceholderText('Write about your event, be creative'), { target: { value: 'test', name: 'description' } });
    fireEvent.change(screen.getByDisplayValue('Select Category'), { target: { value: '1', name: 'category_id' } });
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'test@test.com', name: 'email' } });
    fireEvent.change(screen.getByRole('date'), { target: { value: '1111-11-11', name: 'date' } });
    fireEvent.change(screen.getByRole('time'), { target: { value: '00:00', name: 'time' } });
    
    fireEvent.click(screen.getByText('Publish Event'));

    expect(await screen.findByText('Success')).toBeInTheDocument();
    
});
 
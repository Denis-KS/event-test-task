import { Primitive } from "../../../models/common-types";
import { IEventForm } from "../../../models/event.model";

export interface IFormValidator {
    isValid: (value: any, ...args: any[]) => boolean;
    errorText: string;
}

export const isFilled = (value: Primitive, ...args: any[]): boolean => !!value && String(value).length > 0;

export const isFittingCharLimit = (limit: number, ...args: any[]) => {
    return (value: string): boolean => !!value && value.length <= limit;
};

export const isValidPattern = (pattern: RegExp, ...args: any[]) => {
    return (value: string): boolean => value.length === 0 || pattern.test(value);
}

export const isFeeValid = (value: Primitive, { paid_event: { value: isPaidEvent } }: IEventForm): boolean => {
    return isPaidEvent ? isFilled(value) : true;
};

export const titleValidators: IFormValidator[] = [
    {
        isValid: isFilled,
        errorText: 'Title cannot be empty',
    }
];

export const descriptionValidators: IFormValidator[] = [
    {
        isValid: isFilled,
        errorText: 'Description cannot be empty'
    },
    {
        isValid: isFittingCharLimit(140),
        errorText: 'Description cannot be greater than 140 characters'
    }
];

export const dateValidators: IFormValidator[] = [
    {
        isValid: isFilled,
        errorText: 'Date cannot be empty',
    }
];

export const timeValidators: IFormValidator[] = [
    {
        isValid: isFilled,
        errorText: 'Time cannot be empty',
    }
];

export const feeValidators: IFormValidator[] = [
    {
        isValid: isFeeValid,
        errorText: 'Fee cannot be empty',
    }
];

export const emailValidators: IFormValidator[] = [
    {
        isValid: isValidPattern(/\S+@\S+\.\S+/),
        errorText: 'Email address is invalid',
    }
];






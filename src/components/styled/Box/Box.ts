import styled from "styled-components";
export interface IBoxProps {
    padding?: string;
    margin?: string;
    backgroundColor?: string;
    width?: string;
    maxWidth?: string;
}

export const Box = styled.div<IBoxProps>`
    padding: ${props => props.padding || 'initial'};
    margin: ${props => props.margin || 'initial'};
    background-color: ${props => props.backgroundColor || 'initial'};
    width: ${({ width } ) => width || 'initial'};
    max-width: ${({ maxWidth } ) => maxWidth || 'initial'}
`;
import styled from "styled-components";

interface ISpanProps {
    color?: string;
    fontSize?: string;
    padding?: string;
};

export const Span = styled.span<ISpanProps>`
    color: ${props => props.color || 'initial'};
    font-size: ${props => props.fontSize || 'initial'};
    padding: ${props => props.padding || 'initial'};
`;

export const PostfixPrefix = styled(Span)`
    font-size: 14px;
    padding: 0 5px 2px 5px;
`;
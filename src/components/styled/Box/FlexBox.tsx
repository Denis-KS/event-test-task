import styled from "styled-components";
import { Box } from "./Box";

interface IFlexBoxProps {
    justifyContent?: string;
    alignItems?: string;
    flexDirection?: string;
}

export const FlexBox = styled(Box)<IFlexBoxProps>`
    display: flex;
    flex-direction: ${props => props.flexDirection || 'initial'};
    justify-content: ${props => props.justifyContent || 'initial'};
    align-items: ${props => props.alignItems || 'initial'};
`;
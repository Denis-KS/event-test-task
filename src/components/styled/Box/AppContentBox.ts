import styled from "styled-components";
import { Box } from "./Box";

export const AppContentBox = styled(Box)`
    max-width: ${({ theme }) => theme.breakpoints.ipad};
    margin: auto;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.ipad}) {
        padding: 0 5px;
    }
`;
import styled from "styled-components";
import { StyledInputProps } from "../../features/utils/GlogalInterfaces";
import { determinStyledInputBorder } from "../../features/utils/DeterminStyleUtils";

export const StyledInputBox = styled.div<StyledInputProps>`

position : relative;
border-radius: 5px;
width : 100%
height :56px;
border : ${(props) => determinStyledInputBorder(props)};
`;
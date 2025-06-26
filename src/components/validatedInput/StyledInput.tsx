import styled from "styled-components";
import { StyledInputProps } from "../../features/utils/GlogalInterfaces";
import { determineLabelColor, determinStyledInputBorder } from "../../features/utils/DeterminStyleUtils";

export const StyledInputBox = styled.div<StyledInputProps>`

position : relative;
border-radius: 5px;
width : 100%;
height : 56px;
border : ${(props) => determinStyledInputBorder(props)};
`;

export const StyledInputLabel = styled.span<StyledInputProps>`
position :absolute;
left:10px;
font-weight : 400;
width: 100%;
margin:0;
padding: 0;
font-size : ${(props) => props.active ? '12px' : '20px'};
top : ${(props) => props.active ? '5px' : '17px'};
color: ${(props) => determineLabelColor(props)}
`;
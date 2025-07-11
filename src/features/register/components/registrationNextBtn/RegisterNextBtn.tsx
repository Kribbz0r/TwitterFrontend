import styled from "styled-components";
import { StyledNextBtnProps } from "../../../utils/GlogalInterfaces";

export const StyledNextBtn = styled.button<StyledNextBtnProps>`
width: 75%;
height: 52px;
color: white;
font-size: 18px;
background-color: ${(props => props.color === 'blue' ? props.theme.colors.blue : props.theme.colors.black)};
opacity: ${(props => props.active ? 1.0 : 0.5)} ;
border-radius: 50px;
cursor:${(props) => props.active ? "pointer" : "auto"};
`
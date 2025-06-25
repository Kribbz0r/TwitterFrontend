import { act } from "react";
import { StyledInputBox } from "../../components/validInput/ValidInput";
import { StyledInputProps } from "./GlogalInterfaces";

export const determinStyledInputBorder = (props: StyledInputProps): string => {

    let { active, valid, theme } = props;

    if (!active && valid) {
        return `1px solid ${theme.colors.lightGray}`;
    }

    if (!active && !valid) {
        return `1px solid ${theme.colors.error} `;
    }

    if (active && valid) {
        `2px solid ${theme.colors.blue}`
    }

    if (active && !valid) {
        return `2px solid ${theme.colors.error} `;
    }
    return "";
}

export const determineLabelColor = (props: StyledInputProps): string => {

    let { active, valid, theme, color } = props;
    if (color && color === 'error') {
        return theme.colors.error;

    }

    if (color && color === 'blue') {
        return theme.colors.blue;

    }


    return theme.colors.lightGray;
}
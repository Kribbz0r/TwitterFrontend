import { StyledInputProps, ValidatedInputState } from "./GlogalInterfaces";

export const determinStyledInputBorder = (props: StyledInputProps): string => {

    let { active, valid, theme } = props;

    if (!active && valid) {
        return `1px solid ${theme.colors.lightGray}`;
    }

    if (!active && !valid) {
        return `1px solid ${theme.colors.error} `;
    }

    if (active && valid) {
        return `2px solid ${theme.colors.blue}`;
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
    return theme.colors.gray;
}

export const determineValidatedStyles = (state: ValidatedInputState, validator: (value: string) => boolean): ValidatedInputState => {
    let { valid, active, typedIn, value, labelColor, labelActive } = state;

    if (typedIn) {
        valid = validator(value);

        if (active && valid) {
            labelActive = true;
            labelColor = "blue";
        }

        if (active && !valid) {
            labelActive = true;
            labelColor = "error";
        }

        if (!active && valid) {
            labelActive = true;
            labelColor = "gray";
        }

        if (!active && !valid) {
            labelActive = false;
            labelColor = "gray";
        }

    } else {
        if (active) {
            labelColor = "blue";
            labelActive = false;
        } else {
            labelActive = false;
            labelColor = "gray";
        }

    }

    state = { ...state, valid, labelActive, labelColor };

    return state;
}


export const determinValididSelectStyle = (active: boolean, valid: boolean): string => {
    if (!valid) {
        return "error";
    }

    if (active) {
        return "blue";
    }

    return "gray"
}
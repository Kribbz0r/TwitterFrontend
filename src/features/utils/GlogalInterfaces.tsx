interface ThemeColors {
    blue: string;
    black: string;
    darkGray: string;
    gray: string;
    lightGray: string;
    white: string;
    error: string;


}
export interface Theme {
    colors: ThemeColors
}

export interface StyledInputProps {
    active: boolean;
    valid: boolean;
    theme: Theme;
    color?: string;
}

export interface DateOfBirth {
    day: number;
    month: number;
    year: number;
}

export interface ValidatedInputState {
    active: boolean;
    valid: boolean;
    typedIn: boolean;
    labelActive: boolean;
    labelColor: string;
    value: string;
}

export interface StyledNextBtnProps {
    active: boolean;
    theme: Theme;
    color: string;
}

export interface StyledCheckboxProps {
    active: boolean;
    theme: Theme;
}
import React, { useEffect, useState } from "react";
import { StyledInputBox, StyledInputLabel } from "./StyledInput";

export const ValidatedTextInput: React.FC = () => {

    const [value, setValue] = useState<string>("");
    const [borderActive, setBorderActive] = useState<boolean>(false);
    const [labelActive, setLabelActive] = useState<boolean>(false);
    const [color, setColor] = useState<string>("gray");

    const focus = (): void => {
        setBorderActive(!borderActive)
        if (!value) {
            setLabelActive(!labelActive)
        }
    }

    const update = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value);
        console.log("Send info back to dispatcher");
    }

    useEffect(() => {
        if (value && !labelActive) {
            setLabelActive(true);
        }



    }, [value, borderActive, labelActive, color])

    return (
        <div className="validatedTextInput">
            <StyledInputBox active={borderActive} valid={true}>
                <StyledInputLabel color={color} active={labelActive} valid={true}>
                    {'label here'}
                </StyledInputLabel>
                <input className="validatedInputValue"
                    name={'name'}
                    onFocus={focus}
                    onBlur={focus}
                    onChange={update}
                />
            </StyledInputBox>

        </div>
    )
}
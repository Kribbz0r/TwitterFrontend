import React, { useEffect, useState } from "react";
import { StyledInputBox, StyledInputLabel } from "./StyledInput";
import { determineValidatedTextLabel } from "../../features/utils/DeterminStyleUtils";

import "./validatedInput.css"

interface ValidatedTextInputProps {
    valid: boolean;
    name: string;
    label: string;
    changeValue(e: React.ChangeEvent<HTMLInputElement>): void;
    attributes?: Record<string, string | number | boolean>
    data?: string;
}

export const ValidatedTextInput: React.FC<ValidatedTextInputProps> = ({ valid, name, label, changeValue, attributes, data }) => {

    const [value, setValue] = useState<string>(data ? data : "");
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
        changeValue(e)
    }

    useEffect(() => {
        if (value && !labelActive) {
            setLabelActive(true);
        }

        setColor(determineValidatedTextLabel(borderActive, valid))

    }, [valid, value, borderActive, labelActive, color])

    return (
        <div className="validatedTextInput">
            <StyledInputBox active={borderActive} valid={valid}>
                <StyledInputLabel color={color} active={labelActive} valid={valid}>
                    {label}
                </StyledInputLabel>
                <input className="validatedInputValue"
                    name={name}
                    onFocus={focus}
                    onBlur={focus}
                    onChange={update}
                    {...attributes}
                    value={data}
                />
                {attributes && attributes.maxLength && (borderActive || !valid) ?
                    <span className="validatedInputRemainingLenght">{value.length}/{attributes.maxLength}</span>
                    : <></>
                }
            </StyledInputBox>

        </div>
    )
}
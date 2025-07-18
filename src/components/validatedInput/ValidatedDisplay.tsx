import React, { useState } from "react";
import { useDispatch, UseDispatch } from "react-redux";
import { AppDispatch } from "../../redux/Store";
import { updateRegister } from "../../redux/slices/RegisterSlice";
import { StyledInputBox, StyledInputLabel } from "./StyledInput";

import "./validatedInput.css"

interface ValidatedDisplayProps {
    label: string;
    value: string;
    valid?: boolean;
}


export const ValidatedDisplay: React.FC<ValidatedDisplayProps> = ({ label, value, valid }) => {

    const [isFocused, setIsFocused] = useState<boolean>(false);
    const dispatch: AppDispatch = useDispatch();

    const focus = () => {
        setIsFocused(!isFocused);
        dispatch(updateRegister({
            name: "step",
            value: 1
        }));
    }


    return (
        <div className="validatedInput">
            <StyledInputBox active={false} valid={valid ? (!valid ? true : false) : true}>
                <StyledInputLabel color={isFocused ? 'blue' : 'gray'} active={!isFocused} valid={true}>
                    {label}
                </StyledInputLabel>
                <input className="validatedInputValue" onFocus={focus} value={value} />
            </StyledInputBox>

        </div>
    )
}
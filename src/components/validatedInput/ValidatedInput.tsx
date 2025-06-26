import React, { useState, useEffect } from 'react'
import { ValidatedImputState } from '../../features/utils/GlogalInterfaces';
import { StyledInputBox, StyledInputLabel } from './StyledInput'
import './validatedInput.css'


interface ValidatedUserInputProps {
    name: string;
    label: string;
    errorMessage: string;
    validator(value: string): boolean;
    changeValue(e: React.ChangeEvent<HTMLInputElement>): void;
    attributes?: Record<string, string | number | boolean>;
}

export const ValidatedInput: React.FC<ValidatedUserInputProps> = ({ changeValue, errorMessage, label, name, validator, attributes }) => {

    const [validatedState, setValidatedState] = useState<ValidatedImputState>({
        active: false,
        valid: true,
        typedIn: false,
        labelActive: false,
        labelColor: "gray",
        value: ""
    });

    const focus = (errorMessage: React.FocusEvent<HTMLInputElement>): void => {

        setValidatedState({
            ...validatedState,
            active: !validatedState?.active
        })
    }

    const updateValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValidatedState({
            ...validatedState,
            typedIn: true,
            value: e.target.value
        });
        changeValue(e)
    }


    return (
        <div>
            <div className='validatedInput'>
                <StyledInputBox active={validatedState.active} valid={validatedState.valid}>
                    <StyledInputLabel color={validatedState.labelColor} active={validatedState.labelActive} valid={validatedState.valid}>
                        {label}
                    </StyledInputLabel>
                    <input className='validatedInputValue'
                        onFocus={focus}
                        onBlur={focus}
                        onChange={updateValue}
                        {...attributes} />

                </StyledInputBox>
                <span>{errorMessage}</span>
            </div>

        </div>
    )
}

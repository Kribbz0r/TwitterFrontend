import React, { useState, useEffect } from 'react'

interface TextInputProps {
    name: string
    label: string
    errorMessage: string
    onChange(e: React.ChangeEvent<HTMLInputElement>): void
    maxLength?: number
    validator?(value: string): boolean


}

export const TextInput: React.FC<TextInputProps> = ({ name, label, errorMessage, onChange, maxLength, validator }) => {

    const [inputValue, setInputValue] = useState<string>("");
    const updateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e);
        setInputValue(e.target.value)
    }


    return (
        <div className='textInput'>
            <div>
                <span>
                    {label}
                    <input name={name} onChange={updateInput} />
                </span>
            </div>

        </div>
    )
}

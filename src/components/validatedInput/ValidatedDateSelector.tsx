import React, { useState, useEffect } from "react";
import { StyledInputBox, StyledInputLabel } from "./StyledInput";
import { determinValididSelectStyle } from "../../features/utils/DeterminStyleUtils";

interface ValidatedDateSelectorProps {
    style: string;
    valid: boolean;
    name: string;
    dropDown(): React.ReactElement[]
}


export const ValidatedDateSelector: React.FC<ValidatedDateSelectorProps> = ({ style, valid, name, dropDown }) => {

    const [active, setActive] = useState<boolean>(false);
    const [value, setValue] = useState<number>(0);
    const [color, setColor] = useState<string>("gray");

    const changeValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log("Dispatch change");
        console.log("value: ", e.target.value);
        setValue(+e.target.value)
    }

    const toggleAvtive = (e: React.FocusEvent<HTMLSelectElement>) => {
        setActive(!active);
    }

    useEffect(() => {
        setColor(determinValididSelectStyle(active, valid));
    }, [active, valid, value])

    return (
        <div className={style}>
            <StyledInputBox active={active} valid={valid}>
                <StyledInputLabel color={color} active={true} valid={valid}>
                    {name}
                </StyledInputLabel>
                <select onChange={() => { }} onFocus={toggleAvtive} onBlur={toggleAvtive}>
                    {dropDown()}
                </select>
            </StyledInputBox>

        </div>
    )
}
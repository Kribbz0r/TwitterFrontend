import React, { useState } from "react";
import { StyledInputBox, StyledInputLabel } from "./StyledInput";

interface ValidatedDateSelectorProps {
    style: string;
    valid: boolean;
    name: string;
    dropDown(): React.ReactElement[]
}


export const ValidatedDateSelector: React.FC<ValidatedDateSelectorProps> = ({ style, valid, name, dropDown }) => {

    const [active, setActive] = useState<boolean>(false);
    const [value, setValue] = useState<number>(0);

    const changeValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log("Dispatch change");
        console.log("value: ", e.target.value);
        setValue(+e.target.value)
    }

    const toggleAvtive = (e: React.FocusEvent<HTMLSelectElement>) => {
        setActive(!active);
    }

    return (
        <div className={style}>
            <StyledInputBox active={active} valid={valid}>
                <StyledInputLabel color="gray" active={true} valid={valid}>
                    {name}
                </StyledInputLabel>
                <select onChange={() => { }} onFocus={toggleAvtive} onBlur={toggleAvtive}>
                    {dropDown()}
                </select>
            </StyledInputBox>

        </div>
    )
}
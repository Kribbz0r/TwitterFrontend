import React, { useState } from "react";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { StyledInputBox, StyledInputLabel } from "../validatedInput/StyledInput";

interface DropDownProps {

    content(): React.ReactElement[];
    change(e: React.ChangeEvent<HTMLSelectElement>): void;
    label: string;
    defaultValue: string | number;
}

export const DropDown: React.FC<DropDownProps> = ({ content, change, label, defaultValue }) => {

    const [active, setActive] = useState<boolean>(false);
    const [data, setData] = useState<string>("");

    const toggleActive = () => {
        setActive(!active);
    }

    const changeValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setData(e.target.value)
        change(e);
    }

    return (
        <div className="dropDownContainer">
            <StyledInputBox active={active} valid={true}>

                <StyledInputLabel color={active ? 'blue' : 'gray'} active={true} valid={true}>
                    {label}
                    <ExpandMoreRoundedIcon sx={{
                        fontSize: 34,
                        color: active ? '#1DA1F2' : '#657786',
                        position: 'absolute',
                        right: '15px',
                        top: '35%'
                    }} />
                </StyledInputLabel>
                <select onChange={changeValue} onFocus={toggleActive} onBlur={toggleActive} value={data ? data : defaultValue} >
                    {content()}
                </select>
            </StyledInputBox>

        </div>
    )
}
import React, { useState } from "react";
import { Checkbox } from "@mui/material";



export const CheckBox: React.FC = () => {
    const [clicked, setClicked] = useState<boolean>(false);


    const toggleCheckbox = () => {
        setClicked(!clicked);
    }

    return (
        <Checkbox onChange={toggleCheckbox}></Checkbox>
    )

}
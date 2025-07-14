import React, { useState } from "react";
import { StyledChecboxBackground, StyledCheckbox } from "./StyledCheckbox";
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'; //wrong import?


export const Checkbox: React.FC = () => {
    const [clicked, setClicked] = useState<boolean>(false);

    const toggleCheckbox = () => {
        setClicked(!clicked);
    }

    // Doesnt return the wanted shaded circle around checkbox while hovering over it. mui CheckRoundedIcon might not exist
    return (
        <StyledChecboxBackground active={clicked} onClick={toggleCheckbox}>
            <StyledCheckbox active={clicked}>
                {clicked ?
                    <CheckRoundedIcon sx={{
                        fontSize: 18,
                        color: "white"
                    }} />
                    : <></>
                }
            </StyledCheckbox>
        </StyledChecboxBackground>
    )

}
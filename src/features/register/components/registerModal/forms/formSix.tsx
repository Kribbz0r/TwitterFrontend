import React, { useState } from "react";
import { ValidatedTextInput } from "../../../../../components/validatedInput/ValidatedTextInput";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { StyledNextBtn } from "../../registrationNextBtn/RegisterNextBtn";
import "./formSix.css";

export const FormSix: React.FC = () => {


    const [active, setActive] = useState<boolean>(false);
    const [password, setPassword] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const toggleActive = () => {
        setActive(!active);
    }

    return (
        <div className="registerStepSixContainer">
            <div className="registerStepSixContent">
                <h1>You will need a password</h1>
                <p>Make it 8 characters or more.</p>
                <div className="registerStepSixPassword">
                    <ValidatedTextInput valid={true}
                        label={"Password"}
                        name={"password"}
                        changeValue={handleChange}
                        attributes={{
                            minLength: 8,
                            type: active ? "text" : "password"
                        }} />

                    <div onClick={toggleActive} className="registerStepSixIcon">
                        {active ? <VisibilityOffOutlinedIcon sx={{
                            fontSize: "24px"
                        }} /> :
                            <VisibilityOutlinedIcon sx={{
                                fontSize: "24px"
                            }} />
                        }
                    </div>
                </div>
            </div>
            <StyledNextBtn active={password.length >= 8} disabled={!(password.length >= 8)} onClick={() => { }} color={"black"}>
                next
            </StyledNextBtn>
        </div>
    )


}
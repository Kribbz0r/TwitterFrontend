import React, { useState } from "react";
import { ValidatedTextInput } from "../../../../../components/validatedInput/ValidatedTextInput";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { StyledNextBtn } from "../../registrationNextBtn/RegisterNextBtn";
import "./formSix.css";

export const FormSix: React.FC = () => {


    const [active, setActive] = useState<boolean>(false);
    const [password, setPassword] = useState<string>("");

    return (

        <div className="registerStepSixContainer">
            <div className="registerStepSixContent">
                <h1>You will need a password</h1>
                <p>Make it 8 characters or more.</p>
                <ValidatedTextInput valid={true}
                    label={"password"}
                    name={"password"}
                    changeValue={() => { }}
                    attributes={{
                        minLength=8,
                        type: active ? "text" : "password"
                    }} />

            </div>

        </div>
    )


}
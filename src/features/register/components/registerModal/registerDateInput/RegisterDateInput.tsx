import React from "react";
import { ValidatedDateSelector } from "../../../../../components/validatedInput/ValidatedDateSelector";



export const RegisterDateInput: React.FC = () => {
    return (
        <div className="registerDate">
            <ValidatedDateSelector
                style={"validatedDay"}
                valid={true}
                name={"Day"}
                dropDown={
                    () => { return [] }
                } />
            <ValidatedDateSelector
                style={"validatedMonth"}
                valid={true}
                name={"Month"}
                dropDown={
                    () => { return [] }
                } />
            <ValidatedDateSelector
                style={"validatedYear"}
                valid={true}
                name={"Year"}
                dropDown={
                    () => { return [] }
                } />
        </div>
    );
}
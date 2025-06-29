import React from "react";
import { ValidatedDateSelector } from "../../../../../components/validatedInput/ValidatedDateSelector";
import { getDays, getMonths, getYears } from "../../../../utils/DateUtils";



export const RegisterDateInput: React.FC = () => {
    return (
        <div className="registerDate">
            <ValidatedDateSelector
                style={"validatedDay"}
                valid={true}
                name={"Day"}
                dropDown={getDays} />
            <ValidatedDateSelector
                style={"validatedMonth"}
                valid={true}
                name={"Month"}
                dropDown={getMonths} />
            <ValidatedDateSelector
                style={"validatedYear"}
                valid={true}
                name={"Year"}
                dropDown={getYears} />
        </div>
    );
}
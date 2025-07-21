import React from "react";
import countryCodes from '../../data/countryCodes.json'

export const countryCodeDropDown = (): React.ReactElement[] => {
    let options = countryCodes.filter((country) => {
        if (country.code !== "SE") {
            return country;
        }
    }).map((country) => {
        return <option key={country.code} value={`${country.dial_code} ${country.name}`}>
            {`${country.dial_code} ${country.name}`}
        </option>
    });
    options.unshift(
        <option value={"+46 Sweden"} key={"SE"}>{"+46 Sweden"}</option>
    );
    return options;

}
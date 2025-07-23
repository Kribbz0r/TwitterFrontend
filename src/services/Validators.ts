import { DateOfBirth } from "../features/utils/GlogalInterfaces";

export const ValidateName = (value: string): boolean => {
    return value !== "";
}

export const validateDateOfBirth = (dateOfBirth: DateOfBirth) => {
    let { day, month, year } = dateOfBirth;

    let leapYears: number[] = [];

    for (let i = 2040; i > 1900; i -= 4) {
        leapYears.push(i)
    }

    if (!day || !month || !year) {
        return false;
    } else if (month === 2 && day > 29) {
        return false;
    } else if (month === 2 && day === 29 && !leapYears.includes(year)) {
        return false;
    }
    else if ((month === 4 || month === 6 || month === 9 || month === 11) && day > 30) {
        return false;
    }

    return checkAge(dateOfBirth);
}

const checkAge = (dateOfBirth: DateOfBirth): boolean => {

    let { day, month, year } = dateOfBirth;
    let today = new Date()
    let todaysYear = today.getFullYear();
    let todaysMonth = today.getMonth();
    let todaysDay = today.getDate();

    if (todaysYear - year > 13) {
        return true;

    } else if (todaysYear - year === 13) {

        if (todaysMonth > month) {
            return true;
        }

        else if (todaysMonth === month) {
            if (todaysDay >= day) {
                return true;
            } else {
                return false
            }
        }
    }
    return false
}


export const validateEmail = (value: string): boolean => {
    if (!value.toLocaleLowerCase().match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )) {
        return false;
    } else return true;
}


// This should be a much bigger method that includes every country specific number length
export const validateSwedishTelephoneNumber = (telephoneNumber: string): boolean => {
    if (telephoneNumber.match(/^\+46[0-9]+$/)) {
        return telephoneNumber.length === 12
    } else if (telephoneNumber.match(/^0[0-9]+$/)) {
        return telephoneNumber.length === 10;
    }
    return false;
}
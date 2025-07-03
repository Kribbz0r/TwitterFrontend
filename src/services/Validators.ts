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
const MONTHS: string[] = [
    '',
    'January',
    'Febuary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

export const getMonths = (): React.ReactElement[] => {
    return MONTHS.map((month, index) => {
        if (index === 0) {
            return <option value={index} key={month}></option>
        } else {
            return <option value={index} key={month}>{month}</option>
        }
    })
}

export const getDays = (): React.ReactElement[] => {
    let options: React.ReactElement[] = [];

    for (let i = 0; i < 32; i++) {
        if (i === 0) {
            options.push(<option value={0} key={i}></option>)
        } else {
            options.push(<option value={i} key={i}>{i}</option>)
        }
    }
    return options;
}

export const getYears = (): React.ReactElement[] => {
    let options: React.ReactElement[] = [];

    let year = new Date().getFullYear() + 1;

    for (let i = year; i > 1900; i--) {
        if (i === year) {
            options.push(<option value={0} key={i}></option>)
        } else {
            options.push(<option value={i} key={i}>{i}</option>)
        }
    }
    return options;
}

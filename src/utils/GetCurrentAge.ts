const GetCurrentAge = (year: number, month: number, day: number) => {
    const dateNow = new Date();
    const dateBorn = new Date(year, month, day);

    let age = dateNow.getFullYear() - dateBorn.getFullYear();
    if (dateNow.getMonth() < dateBorn.getMonth() && dateNow.getDay() < dateBorn.getDay()) age--;

    return age;
}

export default GetCurrentAge;
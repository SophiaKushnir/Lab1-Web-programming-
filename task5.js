exports.calendar = (month, year) =>{
    let days = new Date(year, month, 0).getDate();
    console.log(`The ${month} month in ${year} has ${days} days.`);
};


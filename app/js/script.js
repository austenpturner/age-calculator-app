const dayLabel = document.querySelector('.input__label--day');
const dayInput = document.querySelector('.input__input--day');
const dayControlMsg = document.querySelector('.input__control--day');
const dayOutputEl = document.querySelector('.output__number--days');

const monthLabel = document.querySelector('.input__label--month');
const monthInput = document.querySelector('.input__input--month');
const monthControlMsg = document.querySelector('.input__control--month');
const monthOutputEl = document.querySelector('.output__number--months');

const yearLabel = document.querySelector('.input__label--year');
const yearInput = document.querySelector('.input__input--year');
const yearControlMsg = document.querySelector('.input__control--year');
const yearOutputEl = document.querySelector('.output__number--years');

const submitBtn = document.querySelector('#submit');

const red = 'hsl(0, 100%, 67%)';
const smokeyGrey = 'hsl(0, 1%, 44%)';
const lightGrey = 'hsl(0, 0%, 86%)';

const currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentDay = currentDate.getDate();
let currentMonth = currentDate.getMonth();

function calculateAge(day, month, year) {
    month = parseInt(month) - 1;
    const dateInput = new Date(year, month, day);
    const currentTimeStamp = currentDate.getTime();
    const inputTimeStamp = dateInput.getTime();
    const dateDiff = new Date(currentTimeStamp - inputTimeStamp);
    const monthDiff = dateDiff.getMonth() + 1;
    const dayDiff = dateDiff.getDate();
    const yearDiff = dateDiff.getFullYear();
    console.log(`${dayDiff} days, ${monthDiff} months, ${yearDiff} years`);
    const daysOutput = Number(Math.abs(dayDiff) - 1);
    const monthsOutput = Number(Math.abs(monthDiff) - 1);
    const yearsOutput = Number(Math.abs(yearDiff) - 1970);
    console.log(`${daysOutput} days, ${monthsOutput} months, ${yearsOutput} years`);
}


submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const day = dayInput.value;
    const month = monthInput.value;
    const year = yearInput.value;
    validDay(day);
    validMonth(month);
    validYear(year);
    if (validDay(day) && validMonth(month) && validYear(year)) {
        validDate(day, month, year);
    }
});

function validDate(day, month, year) {
    const dateValue = `${year}/${month}/${day}`;
    let dateObj = new Date(dateValue);
    if (dateObj.getFullYear() == year 
        && (parseInt(dateObj.getMonth())+1) == month 
        && dateObj.getDate() == day) {
        dayLabel.style.color = smokeyGrey;
        dayInput.style.borderColor = lightGrey;
        monthLabel.style.color = smokeyGrey;
        monthInput.style.borderColor = lightGrey;
        yearLabel.style.color = smokeyGrey;
        yearInput.style.borderColor = lightGrey;
        dayControlMsg.style.display = 'none';
        dayControlMsg.textContent = '';
        return calculateAge(day, month, year);
    } else {
        dayLabel.style.color = red;
        dayInput.style.borderColor = red;
        monthLabel.style.color = red;
        monthInput.style.borderColor = red;
        yearLabel.style.color = red;
        yearInput.style.borderColor = red;
        dayControlMsg.style.display = 'block';
        dayControlMsg.textContent = 'Must be a valid date';
        return false;
    }
    
}

function validDay(day) {
    if (day === '') {
        dayLabel.style.color = red;
        dayInput.style.borderColor = red;
        dayControlMsg.style.display = 'block';
        dayControlMsg.textContent = 'This field is required';
        return false;
    } else if (day < 1 || day > 31 || day.length !== 2) {
        dayLabel.style.color = red;
        dayInput.style.borderColor = red;
        dayControlMsg.style.display = 'block';
        dayControlMsg.textContent = 'Must be a valid day';
        return false;
    } else {
        dayLabel.style.color = smokeyGrey;
        dayInput.style.borderColor = lightGrey;
        dayControlMsg.style.display = 'none';
        dayControlMsg.textContent = '';
        return true;
    }
}

function validMonth(month) {
    if (month === '') {
        monthLabel.style.color = red;
        monthInput.style.borderColor = red;
        monthControlMsg.style.display = 'block';
        monthControlMsg.textContent = 'This field is required';
        return false;
    } else if (month < 1 || month > 12 || month.length !== 2) {
        monthLabel.style.color = red;
        monthInput.style.borderColor = red;
        monthControlMsg.style.display = 'block';
        monthControlMsg.textContent = 'Must be a valid month';
        return false;
    } else {
        monthLabel.style.color = smokeyGrey;
        monthInput.style.borderColor = lightGrey;
        monthControlMsg.style.display = 'none';
        monthControlMsg.textContent = '';
        return true;
    }
}

function validYear(year) {
    if (year === '') {
        yearLabel.style.color = red;
        yearInput.style.borderColor = red;
        yearControlMsg.style.display = 'block';
        yearControlMsg.textContent = 'This field is required';
        return false;
    } else if (year < 1 || year.length !== 4) {
        yearLabel.style.color = red;
        yearInput.style.borderColor = red;
        yearControlMsg.style.display = 'block';
        yearControlMsg.textContent = 'Must be a valid year';
        return false;
    } else if (year > currentYear) {
        yearLabel.style.color = red;
        yearInput.style.borderColor = red;
        yearControlMsg.style.display = 'block';
        yearControlMsg.textContent = 'Must be in the past';
        return false;
    } else {
        yearLabel.style.color = smokeyGrey;
        yearInput.style.borderColor = lightGrey;
        yearControlMsg.style.display = 'none';
        yearControlMsg.textContent = '';
        return true;
    }
}
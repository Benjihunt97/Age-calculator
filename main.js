const year = document.getElementById('year');
const month = document.getElementById('month');
const day = document.getElementById('day');

const displayYear = document.getElementById('display-years');
const displayMonth = document.getElementById('display-months');
const displayDay = document.getElementById('display-days');

const checkBtn = document.getElementById('check-btn');

const difference = () => {
    // Check if any of the inputs are empty
    if (year.value === '' || month.value === '' || day.value === '') {
        alert('Please enter a valid birth date.');
        return;
    }

    // Convert inputs to numbers
    const yearValue = parseInt(year.value);
    const monthValue = parseInt(month.value);
    const dayValue = parseInt(day.value);

    // Validate the input values
    if (isNaN(yearValue) || isNaN(monthValue) || isNaN(dayValue)) {
        alert('Please enter valid numbers for the birth date.');
        return;
    }

    // Validate the month input
    if (monthValue < 1 || monthValue > 12) {
        alert('Please enter a valid month (1-12).');
        return;
    }

    // Validate the day input
    const daysInMonth = new Date(yearValue, monthValue, 0).getDate();
    if (dayValue < 1 || dayValue > daysInMonth) {
        alert(`Please enter a valid day (1-${daysInMonth}).`);
        return;
    }

    // Remove border color classes if inputs are valid
    year.classList.remove('border-[#FF5757]');
    month.classList.remove('border-[#FF5757]');
    day.classList.remove('border-[#FF5757]');

    // Calculate age difference
    const birthDate = new Date(yearValue, monthValue - 1, dayValue);
    const currentDate = new Date();
    
    const ageInMilliseconds = currentDate - birthDate;
    
    const years = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((ageInMilliseconds % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30.5));
    const days = Math.floor((ageInMilliseconds % (1000 * 60 * 60 * 24 * 30.5)) / (1000 * 60 * 60 * 24));
    
    // Display age difference
    displayYear.innerText = years;
    displayMonth.innerText = months;
    displayDay.innerText = days;
};

const validateInputs = () => {
    // Add or remove border color class based on input values
    year.classList.toggle('border-[#FF5757]', year.value === '');
    month.classList.toggle('border-[#FF5757]', month.value === '');
    day.classList.toggle('border-[#FF5757]', day.value === '');
};

// Add event listeners to inputs
year.addEventListener('input', validateInputs);
month.addEventListener('input', validateInputs);
day.addEventListener('input', validateInputs);

checkBtn.addEventListener('click', difference);
      

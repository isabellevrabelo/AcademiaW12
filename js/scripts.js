window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');

    if (listHoursArray.length > 0) {
        const today = new Date().getDay();

        if (listHoursArray[today]) {
            listHoursArray[today].classList.add('today');
        }
    }
});

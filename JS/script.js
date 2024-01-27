const ageBox = document.getElementById("age-box");
const result = document.querySelector(".result");
ageBox.max = new Date().toISOString().split("T")[0];

function calcAge() {
    if (ageBox.value === "") {
        alert("الرجاء ادخال تاريخ ميلادك");
    } else {
        let brithDay = ageBox.value.split("-");
        let day = parseInt(new Date().getDate()) - parseInt(brithDay[2]),
            month =12 - parseInt(new Date().getMonth()) + 1 - parseInt(brithDay[1]),
            year = parseInt(new Date().getFullYear()) - parseInt(brithDay[0]);
        if (day < 0) {
            day = -1 * day;
            console.log(+day, -1* day)
            month--;
        }
        if (month < 0) {
            month = -1 * month;
            year--;
        }

        result.innerHTML = `عمرك هو <span> ${year} </span> سنه و <span>${month}</span> اشهر و <span>${day}</span> يوم`;
    }
}

const ageBox = document.getElementById("age-box");
const result = document.querySelector(".result")
ageBox.max = new Date().toISOString().split("T")[0];

function calcAge() {
    if(ageBox.value === ""){
        alert("الرجاء ادخال تاريخ ميلادك")
    }
    else {
        console.log(ageBox.value)
        let brithDay = ageBox.value.split("-");
        let year = parseInt(new Date().getFullYear()) - parseInt(brithDay[0]) -1,
        month = Math.abs(12 - parseInt(new Date().getMonth()) + 1 - parseInt(brithDay[1])),
        day = Math.abs(parseInt(new Date().getDate()) - parseInt(brithDay[2]));

        result.innerHTML = `عمرك هو <span> ${year} </span> سنه و <span>${month}</span> اشهر و <span>${day}</span> يوم`;            
    }
}

let days_labels = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'],
    months_labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


const calendar = document.getElementById("calendar")


// Wochentag von 0-6
console.log(new Date().getDay())

// Aktueller Tag
console.log(new Date().getDate())


const startDate = new Date()
let offset = 0
console.log(startDate)

const decMe = () => {
    --offset
    calendar.innerHTML = ""
    for (let i = -2; i <= 3; i++) {
        const week = new Date(startDate)
       
        week.setDate(week.getDate() + i + (offset))
        let todayDate = startDate.toLocaleDateString() === week.toLocaleDateString()
        calendar.innerHTML += `<div class="day" style="${todayDate ? 'background: #79CCAA;color: white' : ''}">${days_labels[week.getDay()]} <br> ${week.getDate()} <br> ${months_labels[week.getMonth()]}</div>`
        console.log(`${days_labels[week.getDay()]} - ${week.getDate()} ${months_labels[week.getMonth()]}`)
    }
}

const incMe = () => {
    ++offset
    calendar.innerHTML = ""
    for (let i = -2; i <= 3; i++) {
        const week = new Date(startDate)
       
        console.log("Incmme: " + startDate.toLocaleDateString());
        console.log("Heute: " + week.toLocaleDateString());
        week.setDate(week.getDate() + i + (offset))
        let todayDate = startDate.toLocaleDateString() === week.toLocaleDateString()
        calendar.innerHTML += `<div class="day" style="${todayDate ? 'background: #79CCAA;color: white' : ''}" >${days_labels[week.getDay()]} <br> ${week.getDate()} <br> ${months_labels[week.getMonth()]}</div>`
        console.log(`${days_labels[week.getDay()]} - ${week.getDate()} ${months_labels[week.getMonth()]}`)
    }
}





for (let i = -2; i <= 3; i++) {
    const week = new Date(startDate)
    week.setDate(week.getDate() + i)
    let todayDate = startDate.toLocaleDateString() === week.toLocaleDateString()
    // console.log(todayDate)
    calendar.innerHTML += `<div class="day" style="${todayDate ? 'background: #79CCAA;color: white' : ''}">${days_labels[week.getDay()]} <br> ${week.getDate()} <br> ${months_labels[week.getMonth()]}</div>`
    console.log(`${days_labels[week.getDay()]} - ${week.getDate()} ${months_labels[week.getMonth()]}`)
}

const toggleColor = () => {
    console.log("working");
}
let countElHome = document.getElementById("count-el-home");
let countElGuest = document.getElementById("count-el-guest");
let resetELHome = document.getElementById("count-el-home")
let resetELGuest = document.getElementById("count-el-guest")


let countHome = 0
let countGuest = 0

function incrementHome() {
    countHome += 1
    countElHome.textContent = countHome
}

function incrementGuest() {
    countGuest += 1
    countElGuest.textContent = countGuest
}

function increment2Home() {
    countHome += 2
    countElHome.textContent = countHome
}

function increment2Guest() {
    countGuest += 2
    countElGuest.textContent = countGuest
}

function increment3Home() {
    countHome += 3
    countElHome.textContent = countHome
}

function increment3Guest() {
    countGuest += 3
    countElGuest.textContent = countGuest
}

function resetHome(){
    countHome += 0
    countElHome.textContent = countHome
    countHome = 0
}

function resetGuest(){
    countGuest += 0
    countElGuest.textContent = countGuest
    countGuest = 0
}
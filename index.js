function getUsername() {
    let userName = prompt('My name is', 'Nightily Furrying');
    return userName
}
function setWelcomeMessage() {
    let name
    do {
        name = getUsername()
    } while (name == null || name == undefined || name == '')
    if (getHour() < 12) {
        document.body.innerHTML = `Good morning ${name}!`
    } else if (getHour() >= 12 && getHour() < 18) {
        document.body.innerHTML = `Good afternoon ${name}!`
    } else {
        document.body.innerHTML = `Good evening ${name}!`
    }
}
function getHour() {
    return new Date().getHours()
}
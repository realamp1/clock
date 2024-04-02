function getTime() {
    const currentDate = new Date(); 
    let hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const am_pm = hours >= 12 ? 'PM' : 'AM';
    if (hours > 12) {
        hours -= 12;
    } else if (hours === 0) {
        hours = 12;
    }
    const formattedTime = `${hours}:${minutes < 10 ? '0' + minutes : minutes} ${am_pm}`;
    document.getElementById("time").textContent = formattedTime;
}

window.onload = getTime;

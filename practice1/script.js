let time = document.getElementsByClassName("time")[0];
let morOrevg = document.getElementsByClassName("morOrEvg")[0];

setInterval(() => {
    let date = new Date();
    let h = date.getHours() % 12 || 12;
    let amOrPm = date.getHours() >= 12 ? 'PM' : 'AM';
    let morOrevg = date.getHours() >= 12 ? 'Good Afternoon' : 'Good Morning';
    if (h >= 12 && amOrPm === 'PM' && morOrevg === "Good Afternoon") {
        h -= 12;
    }
    let min = date.getMinutes().toString().padStart(2, '0');
    let sec = date.getSeconds().toString().padStart(2, '0');
    let formattedH = h.toString().padStart(2, '0');
    time.innerHTML = `${formattedH}:${min}:${sec} ${amOrPm}`;
    morOrevg.innerHTML = `${morOrevg}`
}, 1000);


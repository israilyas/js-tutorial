const clock = document.querySelector('#clock')

// 1000 = 1sec 
setInterval(function () {
    let date = new Date()
    date.getDay()
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)
function tick(){
    document.getElementById('currentTime').innerHTML = new Date().toLocaleTimeString()
}

setInterval(tick,1000)
const timeout = 500

const realTime = {
    initialMinutes: "25",
    initialSeconds: "00",
    playing: false,
    minutes: document.querySelector('.minutes'),
    seconds: document.querySelector('.seconds'),
}
const tools = {
    plus: document.querySelector(".plus"),
    pause: document.querySelector(".pause"),
    minus: document.querySelector(".minus"),
    play: document.querySelector(".play"),
    stop: document.querySelector(".stop"),
}

function updateRealtime(minutes, seconds) {
    if (minutes < 10) {
        realTime.minutes.innerHTML = String(minutes).padStart(2, "0")
    } else {
        realTime.minutes.innerHTML = String(minutes)
    }

    if (seconds < 10) {
        realTime.seconds.innerHTML = String(seconds).padStart(2, "0")
    } else {
        realTime.seconds.innerHTML = String(seconds)
    }
}

function counter() {
    let minutes = Number(realTime.minutes.innerHTML)
    let seconds = Number(realTime.seconds.innerHTML)
    if (minutes < 5) {
        if (!tools.minus.classList.contains('desabilitado'))
            tools.minus.classList.add('desabilitado');
    }
    if (seconds <= 0 && minutes <= 0) {
        realTime.playing = false;
        if (!tools.stop.classList.contains('desabilitado'))
            tools.stop.classList.add('desabilitado');
        if (!tools.play.classList.contains('desabilitado'))
            tools.play.classList.add('desabilitado');
        showModalError()
        return;
    }
    else if (seconds > 0) {
        seconds--
    } else if (seconds === 0) {
        minutes--
        seconds = 59
    }
    console.log(`${minutes}:${seconds}`)
    updateRealtime(minutes, seconds)
}

function plus5minutes() {
    selectingTool(tools.plus)
    tools.plus.classList.add('desabilitado')
    setTimeout(function (e) { tools.plus.classList.remove('desabilitado') }, timeout);
    let minutes = Number(realTime.minutes.innerHTML)
    const seconds = Number(realTime.seconds.innerHTML)
    if (tools.minus.classList.contains('desabilitado')) {
        tools.minus.classList.remove('desabilitado');
    }
    changeTimer(minutes + 5, seconds)
}

function minus5minutes() {
    let minutes = Number(realTime.minutes.innerHTML)
    const seconds = Number(realTime.seconds.innerHTML)
    if (minutes - 5 < 0) {
        return;
    } else {
        if (tools.minus.classList.contains('desabilitado'))
            tools.minus.classList.remove('desabilitado')
        tools.minus.classList.add('desabilitado')
        setTimeout(function (e) { tools.plus.classList.remove('desabilitado') }, timeout);
    }
    selectingTool(tools.minus)
    changeTimer(minutes - 5, seconds)
}

function Timer() {
    if (realTime.playing) {
        var intervalId = setInterval(counter, 1000); // roda a cada um segundo

        // Para parar o intervalo quando realTime.playing for falso
        var checkInterval = setInterval(function () {
            if (!realTime.playing) {
                clearInterval(intervalId);
                clearInterval(checkInterval);
            }
        }, 1000);
    }
}

function playTimer() {
    let minutes = Number(realTime.minutes.innerHTML)
    let seconds = Number(realTime.seconds.innerHTML)
    if (seconds <= 0 && minutes <= 0) {
        showModalError();
        return;
    }
    // rida apenas na primeira vez
    if (tools.play.classList.contains('desabilitado'))
        tools.play.classList.remove('desabilitado');
    if (!tools.play.classList.contains('selected'))
        tools.play.classList.add('selected')
    if (tools.stop.classList.contains('desabilitado'))
        tools.stop.classList.remove('selected', 'desabilitado')
    // rida apenas na primeira vez
    tools.play.classList.toggle('hide')
    tools.pause.classList.toggle('hide')
    realTime.playing = true
    console.log(tools)
    Timer()
}
function pauseTimer() {
    realTime.playing = false
    tools.play.classList.toggle('hide')
    tools.pause.classList.toggle('hide')
    tools.stop.classList.add('desabilitado')
}
function changeTimer(minutes, seconds) {
    realTime.initialMinutes = String(minutes)
    realTime.initialSeconds = String(seconds)
    realTime.minutes.innerHTML = realTime.initialMinutes
    realTime.seconds.innerHTML = realTime.initialSeconds
    updateRealtime(Number(realTime.minutes.innerHTML), Number(realTime.seconds.innerHTML))
}
function stopTimer() {
    if (realTime.playing === false) {
        return;
    }
    tools.stop.classList.add('selected')
    tools.stop.classList.add('desabilitado')
    tools.play.classList.toggle('hide')
    if (tools.play.classList.contains('selected'))
        tools.play.classList.remove('selected')
    tools.pause.classList.toggle('hide')
    realTime.playing = false
    changeTimer(Number(realTime.minutes.innerHTML), Number(realTime.seconds.innerHTML))
}
function showModalError() {
    alert("Insira um tempo válido")
}

tools.plus.addEventListener('click', plus5minutes)
tools.minus.addEventListener('click', minus5minutes)
tools.play.addEventListener('click', playTimer)
tools.stop.addEventListener('click', stopTimer)
tools.pause.addEventListener('click', pauseTimer)

function selectingTool(element) {
    element.classList.add('piscando')
    setTimeout(function () {
        element.classList.remove('piscando');
    }, timeout);
}

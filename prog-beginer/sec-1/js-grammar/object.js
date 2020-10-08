var game = {
    startTime: null,
    displayArea: document.getElementById('display-area')
};
function start() {
    game.startTime = Date.now();
    document.body.onkeydown = stop;
    console.log('Start!!');
}

function stop() {
    var currentTime = Date.now();
    var seconds = (currentTime - game.startTime) / 1000;
    if (9.5 <= seconds && seconds <= 10.5) {
        game.displayArea.innerText = seconds + 'sec でした。すごい!!';
    } else {
        game.displayArea.innerText = seconds + 'sec でした。残念....';
    }
    console.log('Stop!!');
}

if (confirm('OKをおして10秒だと思ったら何かキーをおしてください。')){
//TODO start
    start();
};

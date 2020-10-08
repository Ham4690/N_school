var startTime = null;
function start() {
    startTime = Date.now();
    document.body.onkeydown = function() {
        console.log('Stop!!');
    }
    console.log('Start!!');
}

function stop() {

}

if (confirm('OKをおして10秒だと思ったら何かキーをおしてください。')){
//TODO start
    start();
};

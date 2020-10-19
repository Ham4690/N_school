var myBirthTime = new Date(1928, 11, 14, 12, 30);
function updateParagraph() {
    var now = new Date();
    var getSeconds = (now.getTime() - myBirthTime.getTime()) / 1000;
    var hours = parseInt(getSeconds / 3600);
    console.log('getSec' + getSeconds);
    console.log('hour ' + hours);
    var min = parseInt((getSeconds - (3600 * hours)) / 60); 
    console.log('min ' + min);
    var sec = parseInt((getSeconds - (3600 * hours)) % 60); 
    console.log('sec ' + sec);
    document.getElementById('birth-time').innerText = `${hours} [h] ${min} [min] ${sec} [sec] have passed since you were born.`;
    // document.getElementById('birth-time').innerText = `${getSeconds} sec have passed since you were born.`;
    // document.getElementById('birth-time').innerText = `${min} sec have passed since you were born.`;
}

setInterval(updateParagraph, 1000);
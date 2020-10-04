var age = 16;
var isMember = true;
var result = null;
var fee = 0;

if (age <= 15 ) {
    fee = 800;
} else if (isMember){
    fee = 1000;
} else {
    fee = 1500;
}
document.write(fee);
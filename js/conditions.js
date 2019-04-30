//if conditon
// var hour = 1;

var hour = prompt('Enter value of hour');

// if (hour > 18){
//     console.log('class has started');
// }

// if (hour < 21) {
//    //continue class
//    console.log('continue class');
//    //at var hour 20, it will console log bcuz 20 is less than 21.
// }

if (hour > 18 && hour < 21){
    console.log('class hours');
} else if (hour > 0 && hour < 4) {
    console.log('sleep time');

} else {
    console.log('non class hours');
}



var minute = prompt('how many minutes past the hour?');
//SWITCH CONDITION
switch (minute) {
    case 0: 
        console.log('hour has just begun');
        break;
    case 30:
        console.log('it is almost next hour');
        break;
    default:
        console.log('waiting for next hour');
        break;
}
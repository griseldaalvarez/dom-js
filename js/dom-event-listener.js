var btn = document.getElementsByClassName('button');
var btnUsingSelector = document.querySelector('.button');
btn[0].style.padding = '10px';
btn[0].style.fontSize = '22px';

//add event listenter
btnUsingSelector.addEventListener('click', function (){
    console.log('button was clicked from JS!');
});

btnUsingSelector.addEventListener('mouseover', function(event){
    console.log(event);
    console.log(typeof event.target);

    var btnText = event.target.innerHTML;
    alert('Mouse over on the ' + btnText + ' button');
});

//button that when clicked alerts the client to confirm the cancel
var btn = document.getElementsByClassName('button2');
var btnUsingSelector = document.querySelector('.button2');

btnUsingSelector.addEventListener('click', function(event){
var response = confirm('Confirm cancel');
console.log(response);

//if user confirms, do something = response value is true
//if user confirms, do something = response value is false
});

//add an event on the document that captures any key that is typed/clicked on the keyboard
//console.log the key value

// document.addEventListener('keypress', function(event){
// console.log(event.key);
// console.log(event.keyCode);
// });

// document.addEventListener('keydown', function(event){
//     console.log(event.key);
//     console.log(event.keyCode);

// });

// document.addEventListener('keyup', function(event){
//     console.log(event.key);
//     console.log(event.keyCode);

// });

document.addEventListener('scroll', function (event){
    console.log(event);
    

});


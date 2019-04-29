//DOM manipulation is manipulating whatever we see on the screen; not behind the screen coding


var anchor = document.querySelector('a');
console.log(anchor);

var allAnchors = document.querySelectorAll('a');
console.log(allAnchors);

allAnchors[1].textContent = 'This text is set from JS using DOM manipulation';

allAnchors[1].href = 'https://www.google.com'; //by doing this, when i click on the "this is an anchor tag" link, the google page will open in this same page

allAnchors[1].target = '_blank'; //when i use this; once i click the "this is an.." link, it will open google in a NEW window. with underscore, every time you click the link it will ALWAYS open a new tab. no underscore means it will open a new tab on the first time you click the link, but will keep opening in the same tab every time you click on the link




var para1 = document.getElementById('para-1');
console.log(para1);

var para1UsingSelector = document.querySelector ('#para-1');//with querySelector you have to be very specific in telling what you want to target; hence the # sign. when doing byclassname you dont have to include the period
console.log(para1UsingSelector);
para1.style.color = 'orange';

var btn = document.getElementsByClassName('button');
console.log(btn[0]);
btn[0].style.padding = '10px';
btn[0].style.fontSize = '22px';

//integers
var a = 2;
var b = 5;
console.log(a,b);

//strings
var str1 = 'my';
var str2 = 'room is hot';
console.log(str1);
console.log(str2);
console.log(str1 + str2);
console.log(str1 + ' ' + str2);

//boolean
var boo1 = '5';
var boo2 = 5;
console.log('5' == 5);
console.log('5' === 5);

var boo3 = 'yes';
var boo4 = '3';
console.log('yes' == '3');

//array
var arr1 = ['My', 'bedroom'];
var arr2 = ['is', 'not', 'hot'];
console.log(arr1);
console.log(arr2);
console.log(arr1 + ' ' + arr2);
console.log(arr1[0] + ' ' + arr1[1] + ' ' + arr2[0] + ' ' + arr2[1] + ' ' + arr2[2]);

arr2.push('today.');
console.log(arr2);

arr1.unshift('yes');
console.log(arr1);

//objects
var days = {
    lazy: 'Monday',
    good: 'Tuesday',
    happy: 'Friday'
};
console.log(days);
console.log(days.good);
console.log(days.lazy + ' ' + days.good + ' ' + days.happy);
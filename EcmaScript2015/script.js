/* LET and CONST */
/* 
// ES5
var name5 = 'steve jobs';
var age5 = 23;
name5 = 'steve william';
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age6 =23;
console.log(name6); // error
 */

// ES5
/* function driversLicence5(passedTest) {
    if (passedTest) {
        var firstName = 'John';
        var yearOfBirth = 1990;
    }

    console.log(firstName + ", born in " + yearOfBirth + " is now officially allowed to drive a car.");
}

driversLicence5(true);

// ES6
function driversLicence6(passedTest) {

    let firstName;
    const yearOfBirth = 1990;

    if (passedTest) {
        firstName = 'John';
    }

    console.log(firstName + ", born in " + yearOfBirth + " is now officially allowed to drive a car.");
}

driversLicence6(true); 
*/

/* Blocks and IIFEs */
/* 
// ES6
{
    const a = 1;
    let b = 2;
}

console.log(a + b); // error

// ES5
(function() {
   var c = 3; 
})();
 */

/* Strings */

/* let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
    return 2016 - year;
} */

// ES6
/* console.log(`This is ${firstName}.`);

const n = `${firstName} ${lastName}`;

console.log(n.startsWith("j"));
console.log(n.endsWith("th"));
console.log(n.includes(' '));

console.log(firstName.repeat(5)); */

/* Arrow functions */

const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function(el) {
   return 2016 - el; 
});

// ES6
const ages6 = years.map(el => 2016 - el);

/* 
*   Lexical 'this' keyword
*/

// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {

        var self = this;
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
};
//box5.clickMe();

// ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function () {

        document.querySelector('.green').addEventListener('click', () => {
            // Arrow function share lexical function
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
};
box6.clickMe();

/* Destructuring */
// array result

// ES5
var john = ['john', 24];
// var name = john[0];
// var age = john[1];

// ES6
const [name, age] = ['John', 24];
console.log(name);
console.log(age);

// Destructuring an object
const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);

function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);


/* Arrays */

const boxes = document.querySelectorAll('.box');

// ES5 - Array with prototype.slice.call
var boxesArr5 = Array.prototype.slice.call(boxes);

/* boxesArr5.forEach(function(cur) {
   cur.style.backgroundColor = 'dodgerblue';
}); */

// ES6 - Array with from
const boxesArr6 = Array.from(boxes);

boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

/* 
* Array loop
*/

// ES5 - for with if
/* for(var i=0; i< boxesArr5.length; i++) {
    if(boxesArr5[i].className === 'box blue') {
        continue;
    }

    boxesArr5[i].textContent = 'I changed to blue!';
} */

// ES6 - for Of
for(const cur of boxesArr6) {
    if(cur.className.includes('blue')) {
        continue;
    }

    cur.textContent = "I changed to blue!";
}

// ES5 - indexOf
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur) {
    return cur >= 18;    
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// ES6 - findIndex (like map/foreach)
console.log(ages.findIndex(cur => cur >= 18)); //array index
console.log(ages.find(cur => cur >= 18)); //array value

// oberatori binari

let x = 3 + 4;
lets = "a" + "b";

console.log (11 + "1");
console.log (11 - "1");

x = x + 3;
x +=3;

let str = "ceva";
str += "altceva";
console.log (str);

x = 7 / 3; // x=Math.floor (7/3);
console.log (x);

x = 7 % 3;
console.log (x);

let a = 10, b = 20, c = 30;

// operatori unari

let y = 7;
console.log (-y);

y = y + 1;
y=7;
let y1 = y++;
y=7; 
let y2= ++y;
console.log (y1 + " " + y2);


console.log (5 < 3);
console.log (5 === 3);

console.log ("10" == 10);
console.log ("10" === 10); //se compara si tipul

let m = true;
console.log (!m); 

console.log (m || true);
console.log (m && false);

m &&= false; //prescurtare pentru m = m && false;

let q = null;
let n = q ?? 3;

console.log (n);

let p = 3 ** 3;
p = Math.pow (3, 3);


// de decizie

let s = 7;

switch (s) {
    case 3:
        ///
        break;
    case 5:
        ///
        break;
    default:
        ///
        break;
}

/*let cond = true;
let x = 0;
if (cond) {
    x=7;
}   else{
    x=3;
}
*/ 

// echivalent cu

// let x = cond ? 7:3;



let i = 1;
while (i<=10) {
    console.log (i++);
}


for (j=0; j<= 10; j++) {
    console.log (j);
}


/* let arr = ["a1", "a2", "a3"];
for (let k=0; k<arr.length; k++) {
    console.log (arr[k]);
}
*/

let arr = ["a1", "a2", "a3"];
for (const o in arr) {
    console.log (arr[o]);
}

let obj = {
    a:1,
    b:2,
    c:3,
    d:4
}

// l = a -> d
for (const l in obj) {
    console.log (l + "; " + obj [l]);
}


// Functii

function f (x) {
    return x+3;
}

console.log (f(7));

function say_hello ()
{
    console.log ("hello!")
}
let o = {
    name: "nume",
    age: 30,
    hello: say_hello // sau putem pune direct functia in loc de say_hello
}
o.hello ();

console.log (o);

function f (x) {
    return x +3 ;
}

let f1 = function (x) {
    return x + 4;
}

let f2 = (x) => {
    return x + 5;
}


// Functii recursive

let afisare = (x) => {
    if (x > 10) {
        return;
    }
    console.log (x);
    afisare (x+1);
}
afisare (0);


///


let u = 3;
let mult = (x) => {
   return x*x;

}
console.log(mult(x));
console.log(x);


let obj = {
    x:3,
}
let omult = (o) =>
{
    o.x*= o.x;
    return o.x;
}
console.log(omult(obj));
console.log (obj);


/// Paramentrii default

let print_hello = (name = "me") => { //me e valoare default pe care o va lua functia. Paramentrii default se pun la final. 
    console.log ("hello" + name);
}
print_hello ("da");
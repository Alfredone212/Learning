// wowowowowo
/*
If you want a general rule: always declare variables with const.
If you think the value of the variable can change, use let.
*/
const n = 5
// ^cannot be reassigned
const mell = "Shmello"
const milk = {flavour:"Strawberry", type:"Full Fat", price:2.50}
const cars = ["Volvo", "BMW"]
cars[0] = "Ferrari"
cars.push("Ford")
        
let p = n + 6
// ^Cannot be redeclared
var firstName = "John", lastName = "Paul", age = 26
x = 10
y = 5
//x += y;
//x *= y;
//alert(x);
//^Onscreen popup
function hero() {
    return "Hello"
}
//alert(milk.flavour + " Is yummy & costs " + milk.price)
let l = mell.length
//alert(l)
//alert("We are\"vikings\"")
// The Backslash is an escape character that allows a "" in ""
// Slicing for getting number include whitespace
mell.replace("Shmello", "Trello")
let s = Number.MAX_SAFE_INTEGER
//alert(s) ^it gives you the highest possible safe interger in js
n.toString()
// ^Converts to string
        
document.getElementById("smeno").innerHTML = p
document.getElementById("demo").innerHTML = hero()
document.getElementById("plen").innerHTML = milk.flavour
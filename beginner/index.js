console.log("Hello world");

/* operands
arthimetic
:+ - / % * 
logical
: && || == >= <= != !
*/

const pie = 3.14
var a = 5
var b

var array =  [["c", "1b"], 2, 3]

var object = {
    name: "Kold kardio",
    age : 23
}

console.log(array[0][1])

console.log(object.name)



function add() {
    let b = 5
    if (a === "5") {
        a + b
        console.log(a+b)
    } else if( a == 5) {
        a+b
        console.log(a+b)
    }
    else console.log("condition failed")

}

// call
add()

function limit() {
    for (let index = 1; index <= 10; index++) {
        console.log("this is number :", index)
    }
}

limit()

// demo click me
function click() {
    // console.log("this is working")
    document.getElementById('demo').innerHTML = Date()
}
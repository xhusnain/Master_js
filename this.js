// in global scope this represent the value of window so basically when we do console.log its print the the window object
// so what i was going to tell you the this object value is depend on what ever the enclosing lexical enviroment it was
// so what i means if we do lke this
console.log(this)

// what i means by the enclosing lexical scope is if we have a object and in this object the value of this represent to that object
let obj = {
    name: "John",
    x: function () {
        console.log(this)
    }
}
obj.x();
let obj2 = {
    name: "John2",
    x: () => {
        console.log(this)
    }
}
obj2.x();
let obj3 = {
    name: "John3",
    x: function () {
        const y = () => {
            console.log(this)
        }
        y();
    }
}

obj3.x();

// but what we do this in regular function
function fn() {
    console.log(this, 'fn')
}

fn();
// and this does nto bound in the js only it also was in html too
// <button onClick="alert(this)">Click me</button>
// in this case the value of this keywords in button represent the html element and we can do alot of things with it like this
// <button onClick="alert(this.tagName)">Click me to check tag name </button>


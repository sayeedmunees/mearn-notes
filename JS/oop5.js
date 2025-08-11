// Rest operator
function add(...arg){
    console.log(arg);
    console.log("Add 2 number", arg.reduce((a,b) => a+b));
}

add(10, 20)
add (10,20,30)
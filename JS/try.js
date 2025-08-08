console.log("Exception Handling");
const expr = "%3+5*10"
try{
    console.log("try");
    const result = eval (expr)
    console.log(result);
}catch(err){
    console.log("catch");
    console.log("Invalid syntax");
}
finally{
    console.log("Finally");
}
console.log("Completed" );
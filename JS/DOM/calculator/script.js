//to display content
function displayContent(content){
    result.value+=content
}
//clear
function calcScreenClear(){
    result.value=""
}
//result
function calcOutput(){
    result.value=eval(result.value)
}
//remove last digit
function removeLastDigit(){
    result.value=result.value.slice(0,-1)
}
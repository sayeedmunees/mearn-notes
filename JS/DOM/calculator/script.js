// display content in calculator screen
function displayContent(content) {
    result.value += content
}

// clear
function calcScreenClear(){
    result.value = "";
}

// result
function calcOutput(){
    result.value = eval(result.value)
}

function removeLastDigit(){
    result.value = result. value.slice(0, -1)
}
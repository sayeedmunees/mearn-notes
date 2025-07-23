//w.a.p program to check a number is +ve or -ve

const num = 12;

if (num > 0){
    console.log(` ${num} is +ve`);
} else if (num < 0){
    console.log(` ${num} is -ve`);
} else{
    console.log(` ${num} is zero`);
}

console.log(num > 0 ? ` ${num} is +ve` : num < 0 ? ` ${num} is -ve` : ` ${num} is zero`);


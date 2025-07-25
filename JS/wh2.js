// WAP to print numbers from 1 to 10

var i = 1 ;
while (i <= 10) {
    console.log(i);
    i++;
}

// WAP to print numbers from 5 to 1


var i = 5 ;
while (i >= 1) {
    console.log(i);
    i--;
}

// WAP to print total sum of all numbers from 1 to 10

var i = 1 , sum = 0;
while (i <= 10) {
    sum += i;
    i++;
}

console.log(sum);

// Another method

// var j = 10;
// sum1 = (j*(j+1))/2;
// console.log(sum1);

// WAP to print all even numbers from 1 to 50

var i = 1 ;
while (i <= 50) {
    // if (i%2 == 0){
    //     console.log(i);
    // }
    i%2 == 0 && console.log(i);
    i++;
}

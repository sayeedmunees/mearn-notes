// print common elemsts

arrayOne = [2,3,4,6];
arrayTwo = [1,3,5,6];

for (i of arrayOne){
    for (j of arrayTwo){
        if (i == j){
            console.log(`Common element found`);
            break
        }
    }
}
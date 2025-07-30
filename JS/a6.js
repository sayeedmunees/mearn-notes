//  print pairs whose sum is 6

pairArray = [2,3,4,6];

for (i = 0 ; i < pairArray.length ; i++){
    for (j = i+1 ; j < pairArray.length ; j++){

        if (pairArray[i] + pairArray [j]  == 6){
            console.log(`Pair elements ${pairArray[i]} & ${pairArray[j]}`);
        }
    }
}
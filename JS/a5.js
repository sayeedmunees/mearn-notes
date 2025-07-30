//  print duplicate elements

duplicateArray = [10,20,30,10,40,20,50];

for (i = 0 ; i < duplicateArray.length ; i++){
    for (j = i+1 ; j < duplicateArray.length ; j++){
        if (duplicateArray[i] == duplicateArray [j]){
            console.log(`Duplicate element ${duplicateArray[i]}`);
        }
    }
}
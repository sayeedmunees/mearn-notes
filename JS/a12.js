// [no,district,+ve cases, death rate, curred rate, 1st dose vaccine, 2nd dose vaccine]

covid_data = [

    [1,'Ernakulam', 34000,2000,23000,20000,2000],

    [2,'Idukki', 14000,3000,25000,30000,1000],

    [3,'Thrissur', 24000,4000,33000,24000,2500],

    [4,'Pathanamthitta', 20000,2000,45000,22000,1500],

    [5,'Kozhikode', 44000,5000,12000,21000,500],

    [6,'Palakkad', 27000,1000,20000,23000,3400],

    [7,'Kottayam', 27000,1500,27000,14000,1000],

    [8,'Kollam', 14000,2500,25000,18000,2700]

]

//1. District having Highest +ve case:

console.log("District having Highest +ve case:");
const dangerZone = (covid_data.reduce((a,b) =>a[2] > b[2] ? a : b));
console.log(`${dangerZone[1]}`);

//2. District having highest 1st dose vaccine :

console.log("District having highest 1st dose vaccine : ");
const highest1stVaccine = (covid_data.reduce((a,b) =>a[5] > b[5] ? a : b));
console.log(highest1stVaccine[1]);


//3. District having lowest death rate :

console.log("District having lowest death rate :");
const lowDeathRate = (covid_data.reduce((a,b) =>a[3] < b[3] ? a : b));
console.log(lowDeathRate[1]);

//4.  sort data with +ve case in descending order :

console.log("+ve case in descending order");
covid_data.sort((a,b) => b[2] - a[2]).forEach(a => console.log(a[1]))


//5.  Is there districts with +ve cases > 15000 ?

console.log("Districts with +ve cases > 15000");
console.log(`Is there districts with +ve cases > 15000 ? : ${covid_data.some(cases => cases[2] > 15000) ? "Yes" : "No" }`);

console.log(`Is all districts with +ve cases > 15000 ? : ${covid_data.every(cases => cases[2] > 15000) ? "Yes" : "No" }`);


//6.  sort data with 1st dose vaccine :

console.log("Sort data with 1st dose vaccine :");
covid_data.sort((a,b) => a[5] - b[5]).forEach(a => console.log(a))

//7.  Print thrissur details:

console.log("Print thrissur details:");
console.log(covid_data.find(cases => cases[1] == 'Thrissur'));


//8.  Print total number of positive cases:

console.log("Print total number of positive cases:");
const posCases = covid_data.map (cases => cases[2]).reduce((s1, s2) => s1+s2);
console. log(`${posCases}`);

//9. Print total number of curred cases :

console.log("Print total number of curred cases:");
const curedCases = covid_data.map (cases => cases[4]).reduce((s1, s2) => s1+s2);
console. log(`${curedCases}`);

//10. print curred cases in idukki:

console.log("Print curred cases in idukki:");
const curredCases = covid_data.find(cases => cases[1] == "Idukki")
console.log(`${curredCases[4]}`);

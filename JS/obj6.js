weatherData=[
    {district:"Trissur",temp:32},
    {district:"Trissur",temp:28},
    {district:"Kottayam",temp:29},
    {district:"Palakakd",temp:34},
    {district:"Ernakulam",temp:33},
    {district:"Trissur",temp:29},
    {district:"Kottayam",temp:30},
    {district:"Palakakd",temp:32},
    {district:"Ernakulam",temp:31}
]

//  print district with its highest temperature
// output : {Trissur:32,Kottayam:30,....}

output = {}
weatherData.forEach(districtDetails  => {
    dist = districtDetails.district
    currentTemp = districtDetails.temp
    if(output.hasOwnProperty(dist)){
        oldTemp = output[dist];
        if(currentTemp >= oldTemp){
            output [dist] = currentTemp
        }
    }else{
        output [dist] = currentTemp;
    }
})

console.log(output);

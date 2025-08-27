import { useState } from "react"

const useFetch =(url) =>{
    const [data,setData] = useState(null)

    fetch(url).then((res)=>{
        res.json().then(result=>{
            setData(result)
        }
        )
    })

    console.log(data)
}

export default useFetch
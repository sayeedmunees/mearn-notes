import { useEffect, useState } from "react"

const useFetch =(url) =>{
    const [data,setData] = useState(null)

    useEffect(()=>{
        fetch(url).then((res)=>{
        res.json().then(result=>{
            setData(result)
        }
        )
    })
    },[url])
    console.log(data)
    return data
}

export default useFetch
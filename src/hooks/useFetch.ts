import { useState, useEffect } from "react"
import axios from 'axios'

export function useFetch<T = unknown>(url: string) {
    const [data, setData] = useState<T | null>(null)
    const [error,setError] = useState<Error |null>(null)
    const [isFetching,setIsFetching] = useState(true)

    useEffect(() => {
        axios.get(url)
            .then(response => {
                console.log(response.data)
                setData(response.data.results)
            })
            .catch(err=>{
                setError(err)
            })
            .finally(()=>{
                setIsFetching(false)
            })
    }, [url])

    const fetchData = async <T=unknown>(url:string) =>{
        let result:T;
        try{
            const resp = await axios.get(url)
            result = resp.data
            
            return result
        }catch(e){
            console.log(e)
        }
    }

    return {data, fetchData, isFetching,error}
}
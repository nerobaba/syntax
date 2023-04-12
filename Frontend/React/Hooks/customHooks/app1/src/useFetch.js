import { useEffect, useState } from "react"
import axios from "axios"

export default function useFetch() {
  const [data, setData] = useState()
  const API_URL = "https://jsonplaceholder.typicode.com/todos/"
  const fetchUrl = () => {
    axios.get(API_URL).then((res) => console.log(res.data))
  }
  useEffect(() => {
    fetchUrl()
  }, [])
  return <div></div>
}

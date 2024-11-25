import { useEffect, useState } from "react"
import { useParams } from "react-router"

const useHome = () => {
    const [pallete, setPallete] = useState({colors: ['#FFFFFF']})
    const {id} = useParams()

    useEffect(() => {
        getPalleteColor(id)
    }, [id])

    const getPalleteColor =  (id) => {
        console.log(typeof(id))
        const endpoint = typeof(id) === 'string' ? `http://localhost:3001/colors/${id}` : 'http://localhost:3001/colors'
        fetch(endpoint)
        .then((response) =>  response.json())
        .then(({data}) => {setPallete(data)})
    }

    return {
        pallete,
        getPalleteColor
    }
}

export default useHome
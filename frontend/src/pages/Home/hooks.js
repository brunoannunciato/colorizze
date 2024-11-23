import { useEffect, useState } from "react"

const useHome = () => {
    const [pallete, setPallete] = useState({colors: ['#FFFFFF']})

    useEffect(() => {
        getPalleteColor()
    }, [])

    const getPalleteColor =  () => {
        fetch('http://localhost:3001/colors')
        .then((response) =>  response.json())
        .then(({data}) => {setPallete(data)})
    }

    return {
        pallete,
        getPalleteColor
    }
}

export default useHome
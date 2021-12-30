import { useEffect, useState } from "react"

const useData = () => {
    const [services, setServices] = useState([])
    const [dataLoading, setDataLoading] = useState(true)
    useEffect(() => {
        // setDataLoading(true) 
        fetch('https://tour-planner-8.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
        // setDataLoading(false)
    }, [])
    return {
        services
    };
}
export default useData;
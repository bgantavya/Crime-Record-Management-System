import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCriminal } from "../api/searchCriminal";

export default function Criminal(){
    const [guy, setGuy] = useState({})
    const {id} = useParams()
    useEffect(()=>{
        getCriminal(id).then((res)=> setGuy(res.data))
    },[])
    return <div>{guy.firstName}</div>
}
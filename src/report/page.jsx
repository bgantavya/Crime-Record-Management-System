import { useEffect, useState } from "react";
import { getReport } from "../api/getReports";
import { useParams } from "react-router-dom";

export default function Report(){
    const [report, setReport] = useState({})
    const {uid} = useParams()
    useEffect(()=>{
        getReport(uid).then((res)=> setReport(res.data))
    },[])
    return <div>{report.title}</div>
}
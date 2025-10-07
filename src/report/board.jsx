import { useEffect, useState } from "react";
import { getReports } from "../api/getReports";
import ReportCard from "../components/reportCard";
export default function ReportBoard(){
    const [reports, setReports] = useState([])
    useEffect(() => {
        getReports().then((res)=> setReports(res.data.products))
        
    },[]) 
    return <div>
        {/* develop component reportCard for this */}
        {reports.map((product) => (<ReportCard key={product.id} product={product}/>))}
    </div>
}
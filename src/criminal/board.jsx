import { useEffect, useState } from "react";
import CriminalCard from "../components/CriminalCard";
import { getCriminals } from "../api/searchCriminal";
export default function CriminalBoard(){
    const [guys, setGuys] = useState([])
    useEffect(() => {
        getCriminals().then((res)=> setGuys(res.data.users))
        
    },[]) 
    return <div>
        {/* develop component reportCard for this */}
        {guys.map((guy) => (<CriminalCard key={guy.id} guy={guy}/>))}
    </div>
}
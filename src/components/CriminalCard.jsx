import { useNavigate } from "react-router-dom";

export default function CriminalCard({ guy }) {
    const navigate = useNavigate();
    const toGuy = () => navigate(`/product/${id}`);
    return <div>{guy.firstName}</div>
}
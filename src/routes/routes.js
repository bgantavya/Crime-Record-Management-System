import { Navigate } from "react-router-dom";
import { UserContext } from "../App";
import { useContext } from "react";

export function UserRoutes({children}){
    // const {user} = useContext(UserContext)
    // if (!user) {
    //     return (<Navigate to="/login"/>);
    // } 
    return children
}
export function AuthRoutes({ children}){
    // const {user} = useContext(UserContext)
    // if (user) {
    //     return <Navigate to="/"/>;
    // } 
    return children
}
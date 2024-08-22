import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Rushikesh = () => {
    const user = useContext(UserContext)
    return (
        <span>
            User Name is : {user.userName} <br/>
            Company is : {user.company} <br/>
            Topic is : {user.topic} 
        </span> 
    )
}

export default Rushikesh
import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const UserDetails = () => {
    const user = useContext(UserContext)

    return (
        <span>
            User Name is : {user.userName} <br/>
            Company is : {user.company} <br/>
            Topic is : {user.topic} 
        </span> 
    )
}
export default UserDetails
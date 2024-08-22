import { createContext } from "react";

export const userData = {
    userName : "Prasanna", company : "Wipro",
    topic : "React Training"
}

export const UserContext = createContext(userData)
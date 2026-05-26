import { useState } from "react"
import { CategoryContext } from "./CategoryContext"

export function CategoryProvider({ children }) {
    const [category, setCategory] = useState("All")

    return (
        <CategoryContext.Provider value={{ category, setCategory }}>
            {children}
        </CategoryContext.Provider>
    )
}
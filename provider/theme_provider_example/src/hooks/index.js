import { useContext } from "react";
import { ThemeContext } from "../provider/ThemeProvider"

export const useThemeContext = () => {

    const theme = useContext(ThemeContext);

    if(!theme){
        throw new Error("useThemeContext must be used within a ThemeProvider")
    }
    return theme
}
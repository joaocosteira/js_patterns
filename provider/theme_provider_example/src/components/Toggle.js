import { useThemeContext } from "../hooks";

const Toggle = () => {

    //OG
    //const theme = useContext(ThemeContext)
    //Custom Hook version
    
    const theme = useThemeContext()

    return(
        <label className="switch">
            <input 
                type="checkbox" 
                onClick={theme.toggleTheme}
            />
            <span className="slider round" />
        </label>
    )
}

export default Toggle;
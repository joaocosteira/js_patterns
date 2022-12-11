import { useThemeContext } from "../hooks";

const ListItem  = () => {
    
    //O.G.
    //const theme = useContext(ThemeContext)
    //Custom Hook
    const theme = useThemeContext();

    return (
        <li style={theme.theme}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro obcaecati dolorem aspernatur totam ullam neque? Quae ducimus quia repellat architecto aspernatur provident quos. Perspiciatis alias animi tenetur quia voluptatibus magni!
        </li>
    )
    }


export default ListItem;
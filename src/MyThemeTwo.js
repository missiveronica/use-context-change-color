import { useContext } from "react"
import { ColorContext } from "./App"

function MyThemeTwo () {
    const myColor = useContext(ColorContext);
    const themeIdeas = {
        backgroundColor: myColor ? "yellow" : "green",
        color: myColor ? "black" : "white",
        padding: "100px",
        margin: "100px"
    }
    return (
        <div style = {themeIdeas}>
<p>My Block Two</p>
            </div>

    )
}
export default MyThemeTwo;
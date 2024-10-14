import { ThemeButton } from "./button_theme"
import { Sidebar } from "./sidebar_about"

import { concertone, jua } from "./../fonts"
import LogoSVG from "./svg_icon"

export const Header = () => {
    return (
        <div className={concertone.className}>
            <div className="navigation-header">
                {/* header buttons */}
                <ThemeButton/>
                <Sidebar/>
            </div>
            {/* <div className="svg-overlay">
                <LogoSVG rotate="rotate(-160)" viewbox='' scale=""></LogoSVG>
                <LogoSVG rotate="rotate(90)" viewbox='100 150 50 50' scale="0.1"></LogoSVG>
            </div> */}
            {/* title and description */}
            <h1>PARTY ANIMALS</h1>
            <h2>Mission Tracker</h2>
        </div>
    )
}
import MoonIcon from '../moon-icon.svg'
import SunIcon from '../sun-warm-icon.svg'

const ToggleMode = ({toggleTheme, toggleIsClicked}) => {
    return (
        <>
            <input
                type="checkbox"
                id="theme-toggle"
                className="app__toggle-theme--checkbox"
                onChange={() => toggleTheme()}
                checked={toggleIsClicked}
            />
            <label htmlFor="theme-toggle" className="app__toggle-theme--label">
                <img
                    className="app__toggle-theme--icon"
                    src={MoonIcon}
                    alt=""
                />
                <img
                    className="app__toggle-theme--icon"
                    src={SunIcon}
                    alt=""
                />
                <span className="app__toggle-theme--toggle"/>
            </label>
        </>
    )
}

export default ToggleMode

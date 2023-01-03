import './logo.scss'

const Logo = ({logo}) => {
    return (
        <a href="/" className="app__logo">
            <h1 className={`app__title ${logo}`}>Cinematika</h1>
        </a>
    )
}
export default Logo
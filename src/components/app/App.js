import Home from '../../pages/Home'
import Header from '../header/Header'

import './app.scss'

function App() {
    return (
        <div className="app">
            <Header/>
            <div className="app__container">
                <Home/>
            </div>
        </div>
    )
}

export default App

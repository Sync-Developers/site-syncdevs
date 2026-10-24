import Navbar from './components/navbar/Navbar'
import { BrowserRouter } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <div>
                <Navbar />
            </div>
        </BrowserRouter>
    )
}

export default App
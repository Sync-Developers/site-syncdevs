import Navbar from './components/navbar/Navbar'
import { BrowserRouter } from 'react-router-dom'
import Home from "./home/Home";


function App() {
    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <Home />
            </div>
        </BrowserRouter>
    )

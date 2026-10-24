import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sobre from './pages/sobre/Sobre'

function App() {
    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <main className="pt-25">
                    <Routes>
                        <Route path="/sobre" element={<Sobre />} />
                    </Routes>
                </main>

            </div>
        </BrowserRouter>
    )
}

export default App
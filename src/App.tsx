import AuthPage from "./pages/AuthPage"
import Dashboard from "./pages/Dashboard"
import LandingPage from "./pages/LandingPage"
import { Routes, Route } from "react-router-dom"

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    </div>
  )
}

export default App

import { Link } from "react-router-dom"
import { Route, Routes } from 'react-router-dom'
import About from "./component/pages/About"
import Navbar from "./component/ui/Navbar"
import LandingPage from "./component/pages/landingPage"
import Not_found from "./component/pages/not_found"
import More from "./component/pages/More"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />}>
          <Route path="more" element={<More />} />
        </Route>
        <Route path="/*" element={<Not_found />} />
      </Routes>
    </>
  )
}

export default App

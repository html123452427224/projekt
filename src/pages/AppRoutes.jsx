import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Error from "./Error/Error";
import Sponsors from "./Sponsors/Sponsors";
import About from "./About/About";
import Articles from "./Articles/Articles"
import Donate from "./Donate/Donate";
export default function AppRoutes() {
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/sponsors" element={<Sponsors></Sponsors>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/articles" element={<Articles></Articles>}></Route>
            <Route path="/donate" element={<Donate></Donate>}></Route>
            <Route path="*" element={<Error></Error>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}
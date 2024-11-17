import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import DoctorPage from './DoctorPage';
import Header from "./Header";
import SearchDoctorPage from "./SearchDoctorPage";

function App() {


    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<div>Home Page</div>} />
                    <Route path="/doctors" element={<SearchDoctorPage />} />
                    <Route path="/doctor/:id" element={<DoctorPage />} />
                </Routes>
            </Router>
        </div>
    );
    // return (
    //     <div className="App">
    //         <Header />
    //         <DoctorPage doctor={doctors[0]} />
    //     </div>
    // );
}

export default App;

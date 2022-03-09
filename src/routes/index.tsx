import { Routes, Route, Navigate } from "react-router-dom";
import { AddCard } from "../pages";


const RoutesApp = () => {
    return (
        <Routes>
            <Route path="/add-card" element={<AddCard />} />
            <Route path='/' element={<Navigate to='/add-card' />} />
        </Routes>
    );
};
export default RoutesApp;
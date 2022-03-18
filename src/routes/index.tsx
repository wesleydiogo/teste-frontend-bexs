import { Routes, Route, Navigate } from "react-router-dom";
import { AddCard } from "../pages";


const RoutesApp = () => {
    return (
        <Routes>
            <Route path={`${process.env.PUBLIC_URL}/`} element={<AddCard />} />
        </Routes>
    );
};
export default RoutesApp;
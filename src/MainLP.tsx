import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ProtectedRoute from "./Common/ProtectedRoutes";
import LoginRouter from "./Auth/index"
import MainLayout from "./Main/Layout/components/MainLayout";
import {Header} from "./Header/index"
import CourseMainSection from "./Main/Courses/components/Course";



function MainLP () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginRouter />} />            
                <Route path="/verify" element={<LoginRouter />} />            
                <Route path="/signup" element={<LoginRouter />} />
                <Route path="/" element={<ProtectedRoute />}> 
                    <Route path="/home" element={<MainLayout path="home" />} />
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/all-courses" element={<MainLayout path="all-courses" />} />
                    <Route path="/bookmarks" element={<MainLayout path="bookmarks" />} />
                    <Route path="/code-playground" element={<MainLayout path="code-playground" />} />
                    <Route path="/question-bank" element={<MainLayout path="question-bank" />} />
                    <Route path="/projects" element={<MainLayout path="projects" />} />
                    <Route path="/my-learnings" element={<MainLayout path="my-learnings" />} />
                    <Route path="/course" element={<MainLayout path="course" />} />
                    <Route path="/header" element={<Header/>} />
                    <Route path="*" element={<MainLayout path="home" />} />
                </Route>
            </Routes>
        </BrowserRouter>



    )
}

export default MainLP;
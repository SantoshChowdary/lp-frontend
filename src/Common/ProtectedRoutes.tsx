import { Navigate, Outlet } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { userAuthStore } from "../Auth/stores/userAuthStore";
import ErrorBoundary from "../Common/ErrorBoundaryComponent";

const ProtectedRoute = observer(() => {
    return userAuthStore.isUserLoggedIn ? 
    <Outlet /> 
    : 
    <Navigate to="/login" />
});

export default ProtectedRoute;
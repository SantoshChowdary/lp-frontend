import {Navigate} from "react-router-dom";
import MainLoginComponent from "../components/LoginOrSignUpComponent";
import { userAuthStore } from "../stores/userAuthStore";

const LoginRouter = () => {

    if (userAuthStore.isUserLoggedIn) {
        return <Navigate to="/" />
    }

    return (
        <MainLoginComponent />
    )
}


export default LoginRouter;
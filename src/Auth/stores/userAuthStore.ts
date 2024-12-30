import { observable, makeAutoObservable } from "mobx";
import {validateUserService, validateUserPassword, addNewUserService} from '../services/validateUserService'
import { responseStrings } from "../../Common/constants";
import Cookies from "js-cookie";

class UserAuthStore {

    userDetails = {};
    mobileNumber: any;
    isUserLoggedIn = false;
    
    constructor(){
        makeAutoObservable(this)
        this.getTokenFromStorage()
    };

    checkUserExistenceInDb = async (mobileNumber: string) => {
        const res = await validateUserService(mobileNumber);
        return res;
    };

    checkUserPassword = async (password: string) => {
        const res = await validateUserPassword(this.mobileNumber, password);
        if (res?.token){

            // save user data in local storage upon successful login;
            const expiryTime = Math.floor(res.expiresIn/7);
            this.isUserLoggedIn = true;
            Cookies.set("LP_USER_DATA", JSON.stringify(res), {expires : expiryTime});

            return responseStrings.LOGIN_SUCCESS;

        } else if (res === responseStrings.INVALID_PASSWORD){
            return responseStrings.INVALID_PASSWORD;
        }

        return;
    };

    addNewUserToDB = async (userData : any) => {
        const res = await addNewUserService(userData);
    };

    setMobileNumber = (mobileNumber: string) => {
        this.mobileNumber = mobileNumber;
    };

    getTokenFromStorage = () => {
        const userData = Cookies.get("LP_USER_DATA");

        if (userData !== undefined){
            this.userDetails = JSON.parse(userData);
            this.isUserLoggedIn = true;
        }
    }

    // Logout 
    logOutUser = () => {
        this.userDetails = {};
        this.mobileNumber = "";
        this.isUserLoggedIn = false;
        Cookies.remove("LP_USER_DATA");

        return "SUCCESS";
    };
};

export const userAuthStore = new UserAuthStore();
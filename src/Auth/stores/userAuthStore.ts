import { observable, makeObservable } from "mobx";
import {validateUserService, validateUserPassword} from '../services/validateUserService'
import { responseStrings } from "../../Common/constants";
import Cookies from "js-cookie";

class UserAuthStore {

    userDetails = {};
    mobileNumber: any;
    isUserLoggedIn = false;
    
    constructor(){
        makeObservable(this, {
            userDetails : observable,
            isUserLoggedIn : observable,
            mobileNumber : observable
        })
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
            Cookies.set("LP_USER_DATA", JSON.stringify(res), {expires : expiryTime});

            return responseStrings.LOGIN_SUCCESS;

        } else if (res === responseStrings.INVALID_PASSWORD){
            return responseStrings.INVALID_PASSWORD;
        }

        return;
    };

    setMobileNumber = (mobileNumber: string) => {
        this.mobileNumber = mobileNumber;
    }

    
};

export const userAuthStore = new UserAuthStore();
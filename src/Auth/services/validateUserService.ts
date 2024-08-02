import {verifyLoginAPI} from './authApi';
import { responseStrings } from '../../Common/constants';
import axios from 'axios';

export const validateUserService = async (mobileNumber: string) => {
    try {
        const response = await axios.post("http://localhost:3000/auth/v1/login/"+mobileNumber);
        // LOGIN_SUCCESS, INVALID_USER, SERVER_ERROR
        if (response.status === 200 && response.data === responseStrings.LOGIN_SUCCESS){
            return responseStrings.LOGIN_SUCCESS;
        }
    } catch (err : any) {
        if (err?.response?.data === responseStrings.INVALID_USER){
            return err.response.data
        } else {
            window.alert("Something went wrong! Please try again later");
        }
    }

    return;
}

export const validateUserPassword = async (mobileNumber: string, password: string) => {
    const userData = {
        mobileNumber : mobileNumber,
        password : password
    };

    try {
        const response = await axios.post("http://localhost:3000/auth/v1/verify/", JSON.stringify(userData), {
            headers: {
              'Content-Type': 'application/json'
            }
          });
          return response.data;
    } catch (err: any){
        if (err?.response?.data === responseStrings.INVALID_PASSWORD){
            return responseStrings.INVALID_PASSWORD
        } else {
            window.alert("Something went wrong! Please try again later");
        }
    }
}
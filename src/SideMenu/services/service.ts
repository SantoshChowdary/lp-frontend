import { responseStrings } from '../../Common/constants';
import axios from 'axios';

export const getSideBarOptions = async (enrollPlan: string) => {
    const url = `https://lp-backend-0cw2.onrender.com/api/menu-options`;

    const options = {
        headers : {
            Authorization : `Bearer token`
        }
    };

    const body = {
        enrollPlan : enrollPlan
    }

    try {
        const response = await axios.post(url);
        if (response.status === 200){
            return response.data;
        }
    } catch (err : any) {
        window.alert("Something went wrong! Please try again later at menu tabs");
        // console.log(err)

        // if (err?.response?.data === responseStrings.SERVER_ERROR){
        //     return err.response.data
        // } else {
        //     window.alert("Something went wrong! Please try again later");
        // }
    };

    return;
}
import { getSideBarOptions } from "../services/service";
import {makeAutoObservable} from 'mobx';
import Cookies from "js-cookie";


class SideMenuStore {
    options = [];

    constructor(){
        makeAutoObservable(this)
    }

    getOptions = async () => {
        const enrollPlan = "";
        const optionsData = await getSideBarOptions(enrollPlan);
        return optionsData || [];
        // this.options = optionsData;
    };




}

export const sideMenuStore = new SideMenuStore();
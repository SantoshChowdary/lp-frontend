import { useState, useEffect } from "react";
import { screenTypes } from "../constants";

const useScreenType = () => {

    const [screenType, setScreenType] = useState(screenTypes.NONE);

    const updateScreenType = () => {
        const width = window.innerWidth;

        if (width <= 767) {
            setScreenType(screenTypes.MOBILE)
        } else if (width >= 768 && width < 1024){
            setScreenType(screenTypes.TABLET)
        } else {
            setScreenType(screenTypes.LAPTOP)
        }
    }

    useEffect(()=> {
        updateScreenType();
        window.addEventListener("resize", updateScreenType);

        return () => window.removeEventListener("resize", updateScreenType);
    }, []);

    return screenType;
}

export default useScreenType;
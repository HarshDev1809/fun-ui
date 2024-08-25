import React, { useEffect, useState } from "react";
import useStyle from "../../../utils/helperFunctions/cssClasses";
import { loaderDefaultStyle } from "../../../utils/constants/defaultStyle";
import { loaderCaptionDefaultStyle } from "../../../utils/constants/defaultStyle";

function GlassWatchLoader({style,time,caption, captionStyle}){
    if(!time){
        time = 2000;
    }

    const finalStyle = {...loaderDefaultStyle, ...style};
    const [loader, setLoader] = useState("|>-<|");
    const [isRotated, setIsRotated] = useState(true);
    const classes = useStyle();
    const captionFinalStyle = {...loaderCaptionDefaultStyle, ...captionStyle}

    const showLoader = ()=>{
        const intervalId = setInterval(()=>{
            setIsRotated(prevIsRotated => !prevIsRotated);
        },time)
        return intervalId;
    }

    useEffect(()=>{
        const intervalId = showLoader();

        return ()=>{clearInterval(intervalId)};
    },[])

    return <div className={`glass-watch-loader ${isRotated ? classes.rotated : ""}`} style={finalStyle}>
        {loader}
        <span style={captionFinalStyle}>{caption}</span>
    </div>
}

export default GlassWatchLoader;
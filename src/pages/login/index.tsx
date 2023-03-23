import Config from "../../config/Config";
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';

const PageLogin = () => {
    const location = useLocation();

    useEffect(() => {
        console.log("conasdada", JSON.stringify(location))
    })
    return (

        <div className="container">
            <a href={Config.O365_URL + Config.CLIENT_HOST.url}>Sign in with O365</a>
        </div>
    )
}

export default PageLogin;
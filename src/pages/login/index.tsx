import Config from "../../config/Config";
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';

const PageLogin = () => {
    const location = useLocation();

    useEffect(() => {
        console.log("location", JSON.stringify(location));
    })
    return (

        <div className="container">
            <a href={Config.O365_URL + Config.CLIENT_HOST.url + "/loading"}>Sign in with O365</a>
        </div>
    )
}

export default PageLogin;
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const PageLoading = () => {
    const location = useLocation()

    useEffect(() => {
        let ticket = location.search;
    }, [location.search])
    return (

        <div className="container">
            <p>Page Loading</p>
        </div>
    )
}
export default PageLoading;
import axios from "axios";
import { useEffect, useState } from "react";

const useGet = (url) => {
    const [ gotData, setGotData ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const getData = async () => {
        setLoading(true);
        const getUrl = `https://rocky-bastion-69611.herokuapp.com/${url}`;
        // const getUrl = `http://localhost:5000/${url}`;
        const response  = await axios.get(getUrl).catch((err) => {
            console.log('Error is : ', err);
        });
        setGotData(response.data);
        setLoading(false);
    }

    useEffect(() => {
        getData();
    }, [url]);

    return { loading, gotData };
};

export default useGet;
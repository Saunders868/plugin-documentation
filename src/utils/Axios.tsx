import axios from 'axios';
import { useEffect, useState } from 'react';

const APICall = (url: string, payload: object | null, method:string, param: string | null) => {
  console.log(`url: ${url}, payload: ${payload}, method: ${method}, param: ${param}`);
  
  const [data, setData] = useState<object>({}); //what data type will ne returned here?
  const [error, setError] = useState<any>("");
  const [loaded, setLoaded] = useState<boolean>(false);

  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_GENERAL_URI,
    timeout: 1000,
    headers: {'Authorization': `Bearer `},
    method: method,
    params: {
      param
    },
    url: url
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await instance.request({
          data: payload,
          url: url
        })
        console.log(response);

        setData(response)

        setLoaded(true)
      } catch (error:any) {
        setError(error);
        console.log(error);
      }

    }

    loadData();
  }, [url])
  return { data, error, loaded };
}

export default APICall
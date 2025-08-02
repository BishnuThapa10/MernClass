import axios from "axios";
import { useEffect, useState, useTransition } from "react";

export const useApiHooks = (url, paramas)=>{

  const [data, setData] = useState();
  const [load, setLaod] = useTransition();
  const [err, setErr] = useState();

  const getData = ()=>{setLaod(async () =>{
    setLaod(true);
    try {
      const response = await axios.get(url, {
        params: paramas 
      });
      setData(response.data);
    } catch (err) {
      setErr(err.message);
    }
  })}

  useEffect(()=>{
    getData();
  },[]);

  return [data, load, err];
}
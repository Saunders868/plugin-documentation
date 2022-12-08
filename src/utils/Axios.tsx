import axios from "axios";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addData } from "../slices/dataSlice";
import { loading, errorState } from "../slices/loadErrorSlice";
import { globalStateType } from "../types";

const useAxios = (
  url: string,
  payload: object | null,
  method: string,
  param: string | null
) => {
  // console.log(
  //   `url: ${url}, payload: ${payload}, method: ${method}, param: ${param}`
  // );

  const dispatch = useAppDispatch();

  // move these states up to the global state
  const data: any = useAppSelector((state: globalStateType) => state.data);
  const error: boolean = useAppSelector(
    (state: globalStateType) => state.loadError.error
  );
  const load: boolean = useAppSelector(
    (state: globalStateType) => state.loadError.loading
  );
  const request: boolean = useAppSelector(
    (state: globalStateType) => state.loadError.makeRequest
  );

  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_GENERAL_URI,
    timeout: 1000,
    headers: { Authorization: `Bearer ` },
    method: method,
    params: {
      param,
    },
    url: url,
  });

  useEffect(() => {
    const loadData = async () => {
      if (request === true) {
        try {
          dispatch(loading(true));
          const response = await instance.request({
            data: payload,
            url: url,
          });
          console.log(response);
          dispatch(loading(false));
          dispatch(errorState(false));
          dispatch(addData(response));

          // add notification
        } catch (error: any) {
          console.log(error);
          dispatch(errorState(true));

          // add notification
        }
      } else {
        return;
      }
    };

    loadData();
  }, [url, dispatch, instance, payload, request]);
  return { data, error, load };
};

export default useAxios;

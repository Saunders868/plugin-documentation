import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addData } from "../slices/dataSlice";
import { loading, errorState } from "../slices/loadErrorSlice";
import { globalStateType } from "../types";

// this is making request to all endpoints instead of a selected endpoint
// could use global state to determine which endpoint to request?
const useAxios = (
  url: string,
  payload: object | null,
  method: string,
  param: string | null
) => {
  const dispatch = useAppDispatch();

  // move these states up to the global state
  // set token to global state redux
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
  const token: string = useAppSelector(
    (state: globalStateType) => state.session.accessToken
  );

  // retuns string data type so the type is correct just to check if loggin works
  console.log(token);

  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_GENERAL_URI!,
    timeout: 1000,
    headers: { Authorization: `Bearer ${token}` },
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
          const response: AxiosResponse = await instance.request({
            data: payload,
            url: url,
          });

          const serializedData = response.data;
          console.log(response);
          console.log(serializedData);
          dispatch(loading(false));
          dispatch(errorState(false));
          dispatch(addData(serializedData));

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

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_GENERAL_URI!,
  timeout: 1000,
});

export async function axiosCall(
  method: string,
  token: string,
  url: string,
  payload: object | null
) {
  try {
    const response: AxiosResponse = await instance.request({
      data: payload,
      url: url,
      headers: { Authorization: `Bearer ${token}` },
      method: method,
    });

    const serializedData = await response.data;
    console.log("RESPONSE", response);
    console.log("SERIALIZED RESPONSE",serializedData);

    return serializedData;
    // add notification
  } catch (error: any) {
    console.log(error);

    // add notification
  }

  return;
}

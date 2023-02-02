import axios, { AxiosResponse } from "axios";
import { sessionType } from "../types";
import toast from "react-hot-toast";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_GENERAL_URI!,
  timeout: 5000,
});

export async function axiosCall(
  method: string,
  token: sessionType,
  url: string,
  payload: object | null
) {
  try {
    const response: AxiosResponse = await instance.request({
      data: payload,
      url: url,
      headers: {
        authorization: token.accessToken,
        "x-refresh": token.refreshToken,
      },
      method: method,
    });

    const serializedData = await response.data;
    // console.log("RESPONSE", response);
    // console.log("SERIALIZED RESPONSE", serializedData);
    toast.success(`${response.status} ${response.statusText}`, {
      duration: 4000,
      position: "top-center",

      // Styling
      style: {},
      className: "",

      // Custom Icon
      icon: "✅",

      // Change colors of success/error/loading icon
      iconTheme: {
        primary: "#000",
        secondary: "#fff",
      },

      // Aria
      ariaProps: {
        role: "status",
        "aria-live": "polite",
      },
    });
    return serializedData;
    // add notification
  } catch (error: any) {
    console.log(error);

    toast.error(error.message, {
      duration: 4000,
      position: "top-center",

      // Styling
      style: {},
      className: "",

      // Custom Icon
      icon: "❌",

      // Change colors of success/error/loading icon
      iconTheme: {
        primary: "#000",
        secondary: "#fff",
      },

      // Aria
      ariaProps: {
        role: "status",
        "aria-live": "polite",
      },
    });

    // add notification
  }

  return;
}

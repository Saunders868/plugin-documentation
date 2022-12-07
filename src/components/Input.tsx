import React, { Dispatch, SetStateAction } from "react";
import { userType } from "../types";

type CardProps = {
  required: boolean;
  label: string;
  placeholder: string;
  id: string;
  setFormData: Dispatch<SetStateAction<userType>>;
  formData: userType;
  type: string;
};

const Card = ({
  required,
  label,
  placeholder,
  id,
  setFormData,
  formData,
}: CardProps) => {
  const stateID = id;

  const onChangeHandler = (e: any) => {
    setFormData({ ...formData, [stateID]: e.target.value });
  };
  
  
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-sans font-medium text-gray-900 dark:text-gray-300 text-transform: capitalize"
      >
        {required ? `${label}` : `${label} (optional)`}
      </label>
      {required ? (
        <input
          type="text"
          id={id}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
          onChange={onChangeHandler}
          required
        />
      ) : (
        <input
          type="text"
          id={id}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
          onChange={onChangeHandler}
        />
      )}
    </div>
  );
};

export default Card;

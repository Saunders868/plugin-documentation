import React, { Dispatch, FC, SetStateAction } from "react";
import { formType, orderSchema, productSchema, sessionSchema } from "../types";

type componentProps = {
  required: boolean;
  label: string;
  placeholder: string;
  id: string;
  setFormData: Dispatch<
    SetStateAction<formType | sessionSchema | productSchema | orderSchema>
  >;
  formData: formType | sessionSchema | productSchema | orderSchema;
  type: string;
};

const Input: FC<componentProps> = ({
  required,
  label,
  placeholder,
  id,
  setFormData,
  formData,
  type,
}: componentProps) => {
  const stateID = id;

  const onChangeHandler = (e: any) => {
    setFormData({ ...formData, [stateID]: e.target.value });

    if (type === "number") {
      const number = parseFloat(e.target.value);
      setFormData({ ...formData, [stateID]: number });
    }

    if (type === "checkbox") {
      setFormData({ ...formData, isCompleted: e.target.checked });
    }
  };

  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-sans font-medium text-gray-900 capitalize"
      >
        {required ? `${label}*` : `${label} (optional)`}
      </label>
      <input
        type={type}
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default Input;

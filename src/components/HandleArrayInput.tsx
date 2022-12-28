import React, { Dispatch, FC, SetStateAction } from "react";
import { Body } from "../types";

type componentProps = {
  required: boolean;
  label: string;
  placeholder: string;
  id: string;
  setCartState: Dispatch<SetStateAction<Body>>;
  cartState: Body;
  type: string;
};

const HandleArrayInput: FC<componentProps> = ({
  required,
  label,
  placeholder,
  id,
  setCartState,
  cartState,
  type,
}: componentProps) => {
  const onChangeHandler = (e: any) => {
    const newArray = cartState.products?.map((input) => {
      if (type === "number") {
        const number = parseFloat(e.target.value);
        return {
          ...input,
          quantity: number,
        };
      } else {
        return {
          ...input,
          product_id: e.target.value,
        };
      }
    });
    setCartState({products: newArray});
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

export default HandleArrayInput;

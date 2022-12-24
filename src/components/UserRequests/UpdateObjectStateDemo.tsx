import React, { Dispatch, FC, SetStateAction } from "react";

type componentProps = {
  required: boolean;
  label: string;
  placeholder: string;
  id: string;
  setFormData: Dispatch<SetStateAction<object>>;
  type: string;
  product?: boolean;
  user?: boolean; 
  order?: boolean;
  cart?: boolean;
};

const GetRequestInput: FC<componentProps> = ({
  required,
  label,
  placeholder,
  id,
  setFormData,
  type,
  product,
  user,
  cart,
  order
}: componentProps) => {

  const onChangeHandler = (e: any) => {
    if (product) {
      setFormData({ productId: e.target.value})
    }
    if (user) {
      setFormData({ id: e.target.value})
    }
    if (cart) {
      setFormData({ cartId: e.target.value})
    }
    if (order) {
      setFormData({ orderId: e.target.value})
    }
    // setFormData(e.target.value);
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

export default GetRequestInput;

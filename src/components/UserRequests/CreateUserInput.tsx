import React, { Dispatch, FC, SetStateAction } from "react";
import { formType } from "../../types";

type componentProps = {
  required: boolean;
  label: string;
  placeholder: string;
  id: string;
  setFormData: Dispatch<SetStateAction<formType>>;
  formData: formType;
  type: string;
};

const CreateUserInput: FC<componentProps> = ({
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
        onChange={(e) => onChangeHandler(e)}
      />
    </div>
  );
};

export default CreateUserInput;

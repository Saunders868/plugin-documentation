import React, { useEffect, useState } from "react";
// @ts-ignore
import Input from "./Input.tsx";

type CardProps = {
  method: string;
};

const Card = ({ method }: CardProps) => {
  const [formData, setFormData] = useState<object>({
    email: '',
    password: '',
    passwordConfirm: '',
    username: '',
    firstName: '',
    lastName: ''
  })

  useEffect(() => {
    // console.log(formData);
    
  }, [formData])
  return (
    <div className="h-auto w-full max-w-7xl m-4 rounded-lg border-gray-50 bg-yellow-500">
      {/* localhost:1337/api/users */}
      <h2 className="font-serif text-4xl m-8 md:text-7xl text-transform: capitalize;">
        {method}
      </h2>

      <form className="grid gap-6 mb-6 m-8 lg:grid-cols-2 overflow-y-scroll h-64">
        <Input setFormData={setFormData} formData={formData} required placeholder="john@email.com" label="email" id="email" />
        <Input setFormData={setFormData} formData={formData} required placeholder="password" label="password" id="password" />
        <Input setFormData={setFormData} formData={formData}
          required
          placeholder="confirm password"
          label="password Confirm"
          id="passwordConfirm"
        />
        <Input setFormData={setFormData} formData={formData} required placeholder="john868" label="username" id="username" />
        <Input setFormData={setFormData} formData={formData} placeholder="John" label="First Name" id="firstName" />
        <Input setFormData={setFormData} formData={formData} placeholder="Last" label="Last Name" id="lastName" />
      </form>
    </div>
  );
};

export default Card;

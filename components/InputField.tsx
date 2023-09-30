import { ChangeEvent } from "react";
interface InputFieldProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    type?: string;
    placeholder:string
}
export const InputField: React.FC<InputFieldProps> = ({placeholder, label, value, onChange, type = 'text' }) => {
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
};
return (
    <div className="border-2 rounded-sm p-2 w-full lg:w-2/3" >
      <label htmlFor={label}>{label}</label>
      <input
        className="focus:outline-none text-secondary w-full  "
        type={type}
        id={label}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
    </div>
  );
};

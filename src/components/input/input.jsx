import { InputSpace } from "./inputStyled";

export function Input({ type, placeholder, name, register }) {
    return (
        <InputSpace type={type} placeholder={placeholder} {...register(name)} />
    )
}
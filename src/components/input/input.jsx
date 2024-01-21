import { InputSpace } from "./inputStyled";

export function Input({ type, placeholder, register, name }) {
    return (
        <InputSpace type={type} placeholder={placeholder} /* {...register(name)}  *//>
    )
}
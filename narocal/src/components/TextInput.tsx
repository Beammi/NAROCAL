import React from "react"
interface ITextInput{
    textInputStyle?: string
    inputId: string
    inputType: string
    inputValue: string


}

const TextInput: React.FunctionComponent<ITextInput> = ({
    inputId,
    textInputStyle,
    inputType,
    inputValue,

}) => {
    return(
        <input type={inputType} id={inputId} className={`input input-secondary w-full max-w-xs ${textInputStyle}`} />
    )
}

export default TextInput
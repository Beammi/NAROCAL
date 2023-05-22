import React from "react"
interface ILabel {
  label: string
  labelId: string
  labelStyle?: string
}

const Label: React.FunctionComponent<ILabel> = ({
  labelStyle,
  label,
  labelId,
}) => {
  return (
    <label
      htmlFor={labelId}
      className={`md:text-lg phone:text-sm ${labelStyle}`}
    >
      {label}
    </label>
  )
}

export default Label

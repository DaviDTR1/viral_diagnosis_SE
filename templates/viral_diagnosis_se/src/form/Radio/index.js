import * as React from "react";
import { HStack } from "@chakra-ui/react";

export const RadioGroup = ({ info, onChange, answers, children }) => {
  // Use React.Children.map and React.cloneElement to clone the children
  // and pass the correct props to each RadioOption
  const RadioOptions = React.Children.map(children, (child) => {
    return React.cloneElement(child ,{
      checked: child.props.value === answers,
      onChange,});
    });
  return <div className="RadioGroup">{RadioOptions}</div>;
};

export const RadioOption = ({ info, value, checked, onChange, children }) => {
  // Hook up the onChange handler to call the onChange prop passed to RadioGroup
  // Also, make sure to pass the correct checked prop to the input element
  return (
    <div className="RadioOption">
      <input
        id={info}
        type="radio"
        name={info}
        value={value}
        checked={checked}
        onChange={(e) => {onChange(e)}}
      />
      <label htmlFor={`${info}-${value}`} marginLeft="1rem" className="card-subtitle">{children}</label>
    </div>
  );
};

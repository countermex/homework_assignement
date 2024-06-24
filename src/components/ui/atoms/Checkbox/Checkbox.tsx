import { ChangeEventHandler, RefObject } from 'react';

const Checkbox = (props: { value?: string, disabled?: boolean, checked?: boolean, inputRef?: RefObject<HTMLInputElement>, onClick?: ChangeEventHandler<HTMLInputElement> }) => {
  return (
    <input
      type="checkbox"
      name={props.value}
      id={props.value}
      onChange={props.onClick}
      checked={props.checked}
      disabled={props.disabled}
      ref={props.inputRef}
    />
  );
};

export default Checkbox;

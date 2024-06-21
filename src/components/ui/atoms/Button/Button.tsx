import { ReactNode } from 'react';

const Button = (props: { children: ReactNode }) => {
  return (
    <button type="button">
      {props.children}
    </button>
  );
};

export default Button;

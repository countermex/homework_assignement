import { MouseEventHandler, ReactNode } from 'react';
import styles from './Button.module.css';

const Button = (props: { children: ReactNode, onClick?: MouseEventHandler<HTMLButtonElement>, disabled?: boolean, icon?: ReactNode }) => {
  return (
    <button type="button" onClick={props.onClick} className={`${styles.button} ${props.disabled && styles.button_disabled}`} disabled={props.disabled}>
      {props.icon}
      <span className={styles.button_text}>{props.children}</span>
    </button>
  );
};

export default Button;

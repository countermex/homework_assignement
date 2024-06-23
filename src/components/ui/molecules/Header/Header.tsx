import { ReactNode } from 'react';
import styles from './Header.module.css';

const Header = (props: { children: ReactNode }) => {
  return (
    <header className={styles.header}>
      {props.children}
    </header>
  );
};

export default Header;

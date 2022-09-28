import React from 'react';
import cx from 'classnames';
import styles from '../../../styles/Button.module.css';

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick: () => void;
    ref?: React.MutableRefObject<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, className, ref }) => {
  return (
    <button ref={ref} onClick={onClick} className={cx(className, styles['Button__wrapper'])}>
        {children}
    </button>
  )
}

export default Button;

import React from 'react'
import styles from '../../../styles/Select.module.css';

interface SelectProps {
    onChange: (e: string) => void;
    options: string[];
    value: any;
}

const Select: React.FC<SelectProps> = ({
    onChange,
    options,
    value
}) => {
  return (
    <select
        onChange={e => onChange(e.target.value)}
        className={styles['Select__selectOption']}
        value={value}
    >
        {options.map((data, i) => (
            <option key={i} value={data}>{data}</option>
        ))}
    </select>
  )
}

export default Select
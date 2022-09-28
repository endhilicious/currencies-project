import React from 'react'
import styles from '../../../styles/Card.module.css';
import Minus from '../Icon/Minus';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    selected: boolean;
    onClick: () => void;
    onClose: () => void;
}

const Card: React.FC<CardProps> = ({
    children,
    className,
    onClick,
    onClose,
    selected
}) => {
    return (
        <div className={className} onClick={onClick}>
            {selected && (
                <div className={styles['Card__removeIcon']} onClick={onClose}>
                    <Minus />
                </div>
            )}
            {children}
        </div>
    )
}

export default Card
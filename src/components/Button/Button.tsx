import styles from './Button.module.css'

type ButtonProps = {
    title?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    type?: 'button' | 'submit' | 'reset' | undefined
    className?: string
}

export function Button({ title, onClick, type, className }: ButtonProps) {
    return (
        <button
            className={`${styles.button} ${className}`}
            onClick={onClick}
            type={type}
        >
            {title}
        </button>
    )
}

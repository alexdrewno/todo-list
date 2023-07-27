import styles from './Button.module.css'

type ButtonProps = {
    title?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    type?: 'button' | 'submit' | 'reset' | undefined
}

export function Button({ title, onClick, type }: ButtonProps) {
    return (
        <button className={styles.button} onClick={onClick} type={type}>
            {title}
        </button>
    )
}

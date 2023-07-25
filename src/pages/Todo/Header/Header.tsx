import styles from './Header.module.css'

export function Header() {
    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={() => {}}>
                Edit
            </button>
            <h1 className={styles.title}>Todo</h1>
            <button className={styles.button} onClick={() => {}}>
                Add
            </button>
        </div>
    )
}

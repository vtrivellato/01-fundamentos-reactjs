import styles from './Avatar.module.css'

export function Avatar(props) {
    return (
        <img 
            className={props.borderless ? styles.avatar : styles.avatarWithBorder} 
            src={props.src} 
        />
    )
}
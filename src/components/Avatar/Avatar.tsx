import React from 'react'

import styles from './Avatar.module.css'

interface AvatarProps {
    borderless?: boolean,
    src: string
}

export function Avatar({ borderless, src }: AvatarProps) {
    return (
        <img 
            className={borderless ? styles.avatar : styles.avatarWithBorder} 
            src={src} 
        />
    )
}
import React, { ImgHTMLAttributes } from 'react'

import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    borderless?: boolean
}

export function Avatar({ borderless, ...props }: AvatarProps) {
    return (
        <img 
            className={borderless ? styles.avatar : styles.avatarWithBorder} 
            {...props} 
        />
    )
}
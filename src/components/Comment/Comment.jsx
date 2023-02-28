import { Avatar } from '../Avatar/Avatar'
import { ThumbsUp, Trash } from 'phosphor-react'

import styles from './Comment.module.css'
import { useState } from 'react'

export function Comment({ content, onDelete }) {
    const [likeCount, setLikeCount] = useState(0);

    const handleLikeButton = () => {
        setLikeCount(state => {
            return state + 1
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar src="https://github.com/vtrivellato.png" borderless />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Outra Pessoa</strong>

                            <time title="21 de fevereiro às 16:53" dateTime="2022-02-21 16:53:57">Publicado há 1h</time>
                        </div>

                        <button 
                            title="Deletar comentário"
                            onClick={onDelete}
                        >
                                <Trash size={24} />
                        </button>
                    </header>

                    <p>
                        {content}
                    </p>
                </div>

                <footer>
                    <button onClick={handleLikeButton}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>                    
                    </button>
                </footer>
            </div>
        </div>
    )
}
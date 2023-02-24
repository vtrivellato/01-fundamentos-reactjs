import { Avatar } from './Avatar'
import { ThumbsUp, Trash } from 'phosphor-react'

import styles from './Comment.module.css'

export function Comment() {
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

                        <button title="Deletar comentário"><Trash size={24} /></button>
                    </header>

                    <p>
                        Parabéns 
                    </p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>                    
                    </button>
                </footer>
            </div>
        </div>
    )
}
import { Comment } from './Comment'

import styles from './Post.module.css'

export function Post(props) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img 
                        src="https://github.com/vtrivellato.png" 
                        className={styles.avatar}
                    />

                    <div className={styles.authorInfo}>
                        <strong>{props.author}</strong>
                        <span>{props.authorInfo}</span>
                    </div>
                </div>

                <time title="21 de fevereiro às 16:53" dateTime="2022-02-21 16:53:57">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉{' '}<a href="">github.com/vtrivellato</a></p>
                <p>
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#nlw</a>{' '}
                    <a href="">#rocketseat</a>
                </p>
            </div>
            
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback: </strong>
                <textarea placeholder="Deixe um comentário" />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}
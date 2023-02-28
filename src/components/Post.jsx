import { useState } from 'react'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

export function Post({ author, publishedAt, content }) {
    const publishDateFormatted = new Intl.DateTimeFormat('pt-BR', {
        day: "2-digit", 
        month: "long", 
        hour: "2-digit", 
        minute: "2-digit"
    }).format(new Date(publishedAt))

    const [comments, setComments] = useState([
        {
            id: 1, 
            content: 'Post muito bacana'
        }        
    ])
    const [newComment, setNewComment] = useState('')

    const handleNewCommentChange = () => {
        event.target.setCustomValidity('')

        setNewComment(event.target.value);
    }

    const handleCreateNewComment = () => {
        event.preventDefault();

        setComments([...comments, 
            {
                id: comments.length + 1, 
                content: newComment
            }
        ])

        setNewComment('')
    }

    const handleCommentDelete = (id) => {
        const commentListExcludingById = comments.filter(comment => {
            return comment.id !== id
        })

        setComments(commentListExcludingById)
    }

    const handleInvalidComment = () => {
        event.target.setCustomValidity('Esse campo é obrigatório')
    }

    const isNewCommentEmpty = newComment.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />

                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time 
                    title="21 de fevereiro às 16:53" 
                    dateTime="2022-02-21 16:53:57"
                >
                    {publishDateFormatted}
                </time>
            </header>

            <div className={styles.content}>
                {
                    content.map(part => {
                        switch (part.type) {
                            case "paragraph":
                                return <p key={Math.floor(Math.random() * 100)}>{part.content}</p>
                            case "link":
                                return (
                                    <>
                                        <a href="">{part.content}</a>
                                        <span>&nbsp;</span>
                                    </>
                                )
                            default:
                                break;
                        }
                    })
                }
            </div>
            
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback: </strong>
                <textarea 
                    name="comment" 
                    placeholder="Deixe um comentário" 
                    value={newComment}
                    onChange={handleNewCommentChange}
                    onInvalid={handleInvalidComment}
                    required
                />

                <footer>
                    <button 
                        type="submit"
                        disabled={isNewCommentEmpty}
                    >
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {
                    comments.map(comment => {
                        return (
                            <Comment 
                                key={comment.id}
                                content={comment.content} 
                                onDelete={() => handleCommentDelete(comment.id)}
                            />
                        )
                    })
                }
            </div>
        </article>
    )
}
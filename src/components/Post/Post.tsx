import React from 'react'

import { Avatar } from '../Avatar/Avatar'
import { Comment } from '../Comment/Comment'

import { AuthorProps, CommentProps, ContentProps } from './interfaces';

import styles from './Post.module.css'

import { usePost } from './usePost'

interface PostProps {
    author: AuthorProps, 
    publishedAt: Date, 
    content: ContentProps[],
    comments: CommentProps[]
}

export function Post({ author, publishedAt, content, comments }: PostProps) {
    const { 
        publishDateFormatted,
		commentsList,
		newComment,
		handleNewCommentChange,
        handleCreateNewComment, 
        handleCommentDelete, 
        handleInvalidComment, 
        isNewCommentEmpty
    } = usePost({ publishedAt, comments });

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
                                return (
                                    <p>
                                        {part.content}
                                    </p>
                                )
                            case "link":
                                return (
                                    <span>
                                        <a href="">{part.content}</a>
                                        <span>&nbsp;</span>
                                    </span>
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
                    commentsList.map(comment => {
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
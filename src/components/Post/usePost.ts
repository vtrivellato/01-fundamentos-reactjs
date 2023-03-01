import { useState } from 'react'

import { CommentProps, ContentProps } from './interfaces'

interface UsePostProps {
    publishedAt: Date, 
    comments: CommentProps[]
}

export function usePost({ publishedAt, comments }: UsePostProps) {
    const publishDateFormatted = new Intl.DateTimeFormat('pt-BR', {
        day: "2-digit", 
        month: "long", 
        hour: "2-digit", 
        minute: "2-digit"
    }).format(new Date(publishedAt))

    const [commentsList, setCommentsList] = useState<CommentProps[]>(comments)
    const [newComment, setNewComment] = useState('')
    
    const handleNewCommentChange = (event: any) => {
        event.target.setCustomValidity('')
    
        setNewComment(event.target.value);
    }
    
    const handleCreateNewComment = (event: any) => {
        event.preventDefault();
    
        setCommentsList([...commentsList, 
            {
                id: commentsList.length + 1, 
                content: newComment
            }
        ])
    
        setNewComment('')
    }
    
    const handleCommentDelete = (id: number) => {
        const commentListExcludingById = commentsList.filter(comment => {
            return comment.id !== id
        })
    
        setCommentsList(commentListExcludingById)
    }
    
    const handleInvalidComment = (event: any) => {
        event.target.setCustomValidity('Esse campo é obrigatório')
    }
    
    const isNewCommentEmpty = newComment.length === 0;

    return {
		publishDateFormatted,
		commentsList,
		newComment,
		handleNewCommentChange,
        handleCreateNewComment, 
        handleCommentDelete, 
        handleInvalidComment, 
        isNewCommentEmpty
	};
}
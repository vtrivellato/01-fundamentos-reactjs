import { useState } from 'react'

export function usePost({ publishedAt }) {
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

    return {
		publishDateFormatted,
		comments,
		newComment,
		handleNewCommentChange,
        handleCreateNewComment, 
        handleCommentDelete, 
        handleInvalidComment, 
        isNewCommentEmpty
	};
}
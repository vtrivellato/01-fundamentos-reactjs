import React from 'react'

import { Header } from "./components/Header/Header"
import { Post } from "./components/Post/Post"
import { Sidebar } from "./components/Sidebar/Sidebar"

import './App.modules.css'

import './global.css'

import posts from './posts.json'

export function App() {
	return (
		<div>
			<Header />
			
			<div className="wrapper">
				<Sidebar />
				
				<main>
					{posts.map(post => {
						return (
							<Post 
								key={post.id}
								author={post.author}	
								publishedAt={new Date(post.publishedAt)}	
								content={post.content}
								comments={post.comments}
							/>
						)
					})}
				</main>
			</div>
		</div>
	)
}

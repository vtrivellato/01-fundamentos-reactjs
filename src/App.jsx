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
								publishedAt={post.publishedAt}	
								content={post.content}
							/>
						)
					})}
				</main>
			</div>
		</div>
	)
}

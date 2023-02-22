import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from'./App.modules.css'

import './global.css'

export function App() {
	return (
		<div>
			<Header />
			
			<div className="wrapper">
				<Sidebar 

				/>
				
				<main>
					<Post 
						author="Fulano"
						authorInfo="Fullstack developer"
					/>
					<Post 
						author="Ciclano"
						authorInfo="Frontend developer"
					/>
				</main>
			</div>
		</div>
	)
}

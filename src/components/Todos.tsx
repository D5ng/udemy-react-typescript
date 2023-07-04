import React, { ReactChild } from "react"


const Todos: React.FC<{children: ReactChild, items: string[]}> = (props) => {
	return (
		<React.Fragment>
			<ul>
				{props.items.map(item =>
					<li key={item}>{item}</li>
				)}
			</ul>
			<div>
				{props.children}
			</div>
		</React.Fragment>
	)
}


export default Todos
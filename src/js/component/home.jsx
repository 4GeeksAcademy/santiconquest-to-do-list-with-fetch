import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
const Home = () => {
function getTask() {
	console.log("Presionaaste el boton Get Task")
	fetch("https://playground.4geeks.com/todo/users/Lebron")
	.then((response)=>response.json())
	.then((data)=>console.log(data.todos))
}
function addTask() {
	console.log("Presionaaste el boton Add Task")
	const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
			{
				"label": "Ir a la cancha",
				"is_done": false,
			})
    };
    fetch('https://playground.4geeks.com/todo/todos/Lebron', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
}
function deleteTask() {
	console.log("Presionaaste el boton Delete Task")
	const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
			{
				"label": "Ir a la cancha",
				"is_done": false,
			})
    };
	fetch("https://playground.4geeks.com/todo/todos/21",
		requestOptions
	)
	.then((response) => response.text())
	.then((result) => console.log(result))
}
//create your first component
	return (
		<div className="text-center">
			<div>
				<h1>Lista de tareas</h1>
				<ul>
					<li>
						<input 
							type="text" 
							placeholder="Ingrese tarea a realizar"
						/>
					</li>
				</ul>
			</div>

			<button onClick={getTask}>Get Task</button>
			<button onClick={addTask}>Add Task</button>
			<button onClick={deleteTask}>Delete Task</button>


			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;

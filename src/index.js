//1) Necesitamos la variable React en scope
import React from "react"

//2) necesitamos la variable ReactDOM en scope
import ReactDOM from "react-dom"

//3) Necesitamos un componente en scope
/*const App = () => "Hola asdasdsa"*/
import App from "./App.js"
import "./estilos.css"

//4) Necesitamos poner el componente en el DOM
ReactDOM.render(<App/>,document.getElementById("root"))



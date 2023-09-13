import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Pizzas(props) {
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Mission Impizzable Pizzeria</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <Pizzas
        name="Focaccia"
        price={6}
        photoName="pizzas/focaccia.jpg"
        ingredients="Bread with italian olive oil and rosemary"
      />
      <Pizzas
        name="Pizza Margherita"
        price={10}
        photoName="pizzas/margherita.jpg"
        ingredients="Tomato and mozarella"
      />
      <Pizzas
        name="Pizza Spinaci"
        price={12}
        photoName="pizzas/spinaci.jpg"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
      />
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const isOpen = hour >= 10 && hour <= 23;
  const footerMessage = isOpen
    ? "We are currently open"
    : "Sorry we are closed. We will be open tommorow at 10am";
  return <footer className="footer">{footerMessage}</footer>;
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  // strict mode enabled
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

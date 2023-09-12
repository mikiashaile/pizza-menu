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

function Pizzas() {
  return (
    <div>
      <img src="pizzas/focaccia.jpg" alt="ficcacia" />
      <h3>Focaccia</h3>
      <p>Bread with italian olive oil and rosemary</p>
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
      <Pizzas />
      <Pizzas />
      <Pizzas />
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

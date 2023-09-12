import React from "react";
import ReactDom from "react-dom/client";

function App() {
  return (
    <div>
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
      <h2>Focaccia</h2>
      <p>Bread with italian olive oil and rosemary</p>
    </div>
  );
}

function Header() {
  return <h1>Mission Impizzable Pizzeria</h1>;
}

function Menu() {
  return (
    <div>
      <Pizzas />
      <Pizzas />
      <Pizzas />
    </div>
  );
}

function Footer() {
  return <footer>We are open {new Date().toLocaleDateString()}</footer>;
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  // strict mode enabled
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

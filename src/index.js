import React, { useState, useEffect } from "react";
import ReactDom from "react-dom/client";
import "./index.css";

function App() {
  const [pizzas, setPizzas] = useState("");
  async function getPizzas() {
    const res = await fetch("./data.json");
    const data = await res.json();
    setPizzas(data);
  }

  useEffect(function () {
    getPizzas();
  }, []);

  return (
    <div className="container">
      <Header />
      <Menu pizzas={pizzas} />
      <Footer />
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

function Menu({ pizzas }) {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzas.length > 0 ? (
        <>
          <p>Authentic Italina Pizza! With 5 stars yelp stars</p>
          <ul className="pizzas">
            {pizzas.map((pizza, index) => (
              <Pizza pizzaObj={pizza} key={index} />
            ))}
          </ul>
        </>
      ) : (
        <p>
          Our Pizzas are so popular that we don't have anything on the menu now.
        </p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const isOpen = hour >= 10 && hour <= 23;
  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>We are open! Come and visit us or order online</p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  // strict mode enabled
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

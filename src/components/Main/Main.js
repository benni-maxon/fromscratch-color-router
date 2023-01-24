import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import './Main.css';

export default function Main() {
  const { r, g, b } = useParams();
  return (
    <main className="color-main" style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}>
      <section className="color-links">
        <NavLink to="/100/60/80">color1</NavLink>
        <NavLink to="/20/70/30">color2</NavLink>
        <NavLink to="/10/50/130">color3</NavLink>
      </section>
      <h2>
        rgb({r}, {g}, {b})
      </h2>
    </main>
  );
}

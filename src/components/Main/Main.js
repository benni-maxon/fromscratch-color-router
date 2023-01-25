import React, { useEffect, useState } from 'react';
import { NavLink, Redirect, Route, useHistory, useParams } from 'react-router-dom';
import './Main.css';

export default function Main() {
  const { r, g, b } = useParams();
  const [red, setRed] = useState(r);
  const [green, setGreen] = useState(g);
  const [blue, setBlue] = useState(b);
  let history = useHistory();
  const handleIncrement = (e) => {
    if (e.target.name === 'red') {
      setRed((prev) => +prev + 1);
      console.log('red', red);
      history.replace(`/${red}/${green}/${blue}`);
    }
  };
  const handleDecrement = (e) => {
    if (e.target.name === 'red') {
      setRed((prev) => +prev - 1);
      console.log('red', red);
    }
  };
  useEffect(() => {
    const updatePage = () => history.replace(`/${red}/${green}/${blue}`);
    updatePage();
  }, [red, green, blue, history]);

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
      <div>
        <button name="red" onClick={handleDecrement}>
          -
        </button>
        <input value={red} />
        <button name="red" onClick={handleIncrement}>
          +
        </button>
      </div>
    </main>
  );
}

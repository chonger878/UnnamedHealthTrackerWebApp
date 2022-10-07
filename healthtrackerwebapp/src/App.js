import logo from './logo.svg';
import './App.css';
import {Link, Outlet} from "react-router-dom"

function Home() {
  return (
    <div>
      <nav>
        <Link to='/about'>About Us</Link>
        <Link to='/contact'>Contact Us</Link>
      </nav>
      <h1>Rare Diseases/Disorders Tracker App</h1>
    </div>
  );
}

export function App(){
  return <Home />
};

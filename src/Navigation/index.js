import {useState} from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import "../App.css";

export default function Navigation() {
    return (
        <div className='nav'>
            <ul className="list">
                <li><Link to="./">Home</Link></li>
                <li><Link to="./Products">Products</Link></li>
                <li><Link to="./Settings">Settings</Link></li>
            </ul>
        </div>
    )
}
import {useState} from 'react';
import { useLocation } from 'react-router-dom';

export default function Breadcrumb() {
    const path = useLocation().pathname;
    return (
        <div className='home'>
            {path === "/" ? "Home" : `Home${path}`}
        </div>
    )
}
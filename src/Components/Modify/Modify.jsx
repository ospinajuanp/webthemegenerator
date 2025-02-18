import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import './Modify.css';

const Modify = () => {
    const [mode, setMode] = useState(localStorage.getItem('mode'));
    const [intensity, setIntensity] = useState(localStorage.getItem('intensity'));
    const [color, setColor] = useState(localStorage.getItem('color'));

    useEffect(() => {
        localStorage.setItem('mode', mode || 'dark');
        localStorage.setItem('intensity', intensity || 3);
        localStorage.setItem('color', color || '#000');
        document.body.className = localStorage.getItem('mode') || mode;
    }, [mode]);

    const changeMode = () => {
        if (mode === 'dark') {
            setMode('light');
        }else if(mode === 'light'){
            setMode('contrast');
        }else {
            setMode('dark');
        }
    }

    return (
        <div className='Modify'>
            <nav className='nav'>
                <div className='nav-left'>@OSPINAJUANP</div>
                <div className='nav-right'><button className='nav-btn_mode' type="button" onClick={changeMode}><FontAwesomeIcon icon={faSun} /></button></div>
            </nav>
            <div className='content'>
                <form action="form">
                    <div className='form-intensity'>
                        <label className='form-intensity_text' htmlFor="intensity">Intensidad</label>
                        <input className='form-intensity_range' name='intensity' type="range" min="0" max="5" onChange={(e) => setIntensity(e.target.value)} id='intensity' value={intensity}/> 
                        <label >{intensity}</label>
                    </div>
                    <div className='form-color'>
                        <label htmlFor="color" className='form-color_text'>Color Primario</label>
                        <input type="color" name="color" className='form-color_input' onChange={(e) => setColor(e.target.value)} id='color' value={color}/>
                        <label>{color}</label>
                    </div>
                </form>

                <div className='content-css'>
                    <textarea name="textarea" className='content-css_textarea' >
                    </textarea>

                    <div className='content-btn'>
                        <button className='content-btn_copy'>Copiar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modify;
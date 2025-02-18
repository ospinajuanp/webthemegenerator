import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import './Modify.css';

const Modify = () => {
    const [mode, setMode] = useState(localStorage.getItem('mode') || 'dark');

    useEffect(() => {
        localStorage.setItem('mode', mode);
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
                        <input className='form-intensity_range' name='intensity' type="range" min="0" max="5"/> 
                        <label >0</label>
                    </div>
                    <div className='form-color'>
                        <label htmlFor="color" className='form-color_text'>Color Primario</label>
                        <input type="color" name="color" className='form-color_input'/>
                        <label>#ffffff</label>
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
import React, { useState, useEffect } from 'react';
import chroma from 'chroma-js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import './Modify.css';

const Modify = ({color, setColor, solidColor, setSolidColor}) => {
    const [mode, setMode] = useState(localStorage.getItem('mode') || 'dark');
    const [intensity, setIntensity] = useState(localStorage.getItem('intensity') || 3);
    
    
    useEffect(() => {
        localStorage.setItem('mode', mode || 'dark');
        document.body.className = localStorage.getItem('mode') || mode;
    }, [mode]);

    useEffect(() => {
        localStorage.setItem('intensity', intensity || 3);
    }, [intensity]);

    useEffect(() => {
        localStorage.setItem('color', color || '#000');
        changeSolidColor(color);
    }, [color]);

    useEffect(() => {
        localStorage.setItem('solidColor', solidColor || color);
    }, [solidColor]);

    



    const changeMode = () => {
        if (mode === 'dark') {
            setMode('light');
        }else if(mode === 'light'){
            setMode('contrast');
        }else {
            setMode('dark');
        }
    }
    const changeSolidColor = () => {
        let w = chroma(color).darken(intensity)
        w = w.hex();
        setSolidColor(w);
        document.getElementById('solidColor').style.backgroundColor = solidColor;
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
                        <input className='form-intensity_range' name='intensity' type="range" min="1" max="5" onChange={(e) => setIntensity(e.target.value)} id='intensity' value={intensity}/> 
                        <label >{intensity}</label>
                    </div>
                    <div className='form-color'>
                        <label htmlFor="color" className='form-color_text'>Color</label>
                        <input type="color" name="color" className='form-color_input' onChange={(e) => {setColor(e.target.value)}} id='color' value={color}/>
                        <label>{color}</label>
                    </div>
                    <div className='form-solidColor'>
                        <div className='form-solidColor_box' id='solidColor'>
                            {solidColor}
                        </div>
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
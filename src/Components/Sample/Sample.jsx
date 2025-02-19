import React, { useEffect } from 'react';
import './Sample.css';

const Sample = ({color, solidColor}) => {

    useEffect(() => {
        document.getElementById('primary').style.backgroundColor = color;
        document.getElementById('secondary').style.backgroundColor = solidColor;
        document.getElementById('background').style.backgroundColor = generateThemeColors(color).background;
        document.getElementById('text').style.backgroundColor = generateThemeColors(color).text;
    }, [color, solidColor]);
    
    // localStorage.setItem('mode', mode || 'dark');
    // localStorage.setItem('intensity', intensity || 3);
    // localStorage.setItem('color', color || '#000');
    function generateThemeColors(baseColor) {
        let [h, s, l] = hexToHSL(baseColor);
    
        let secondary = hslToHex((h + 30) % 360, s, l);  // Análogo
        let background = hslToHex(h, s, l > 50 ? l - 20 : l + 20); // Más claro u oscuro
        let textColor = l > 50 ? "#000000" : "#FFFFFF"; // Contraste automático
    
        return {
            primary: baseColor,
            secondary,
            background,
            text: textColor
        };
    }
    
    // Convierte HEX a HSL
    function hexToHSL(H) {
        let r = parseInt(H.substring(1, 3), 16) / 255,
            g = parseInt(H.substring(3, 5), 16) / 255,
            b = parseInt(H.substring(5, 7), 16) / 255;
    
        let max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;
    
        if (max === min) {
            h = s = 0;
        } else {
            let d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h = Math.round(h * 60);
        }
        return [h, Math.round(s * 100), Math.round(l * 100)];
    }
    
    // Convierte HSL a HEX
    function hslToHex(h, s, l) {
        s /= 100;
        l /= 100;
        let c = (1 - Math.abs(2 * l - 1)) * s, x = c * (1 - Math.abs((h / 60) % 2 - 1)), m = l - c / 2, r, g, b;
    
        if (h < 60) { r = c; g = x; b = 0; }
        else if (h < 120) { r = x; g = c; b = 0; }
        else if (h < 180) { r = 0; g = c; b = x; }
        else if (h < 240) { r = 0; g = x; b = c; }
        else if (h < 300) { r = x; g = 0; b = c; }
        else { r = c; g = 0; b = x; }
    
        r = Math.round((r + m) * 255);
        g = Math.round((g + m) * 255);
        b = Math.round((b + m) * 255);
    
        return `#${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1)}`;
    }
    
    // Prueba con un color base
    const themeColors = generateThemeColors("#007BFF");
    
    return (
        <div className='Sample'>
            <div>
                <div id='primary'>Color 1</div>
                <div id='secondary'>Color 2</div>
                <div id='background'>Color 3</div>
                <div id='text'>Color 4</div>
            </div>
            <div className='Sample-tags'>
                <button type="button">botonera</button>
                <button type="button">botonera</button>
                <button type="button">botonera</button>
                <button type="button">botonera</button>
            </div>
            
            <div className='Sample-content'>
                <div className='main'>
                    <h1>Sample</h1>
                    <p>Sample</p>
                </div>
                <div>
                    <button>Botón Ejemplo</button>
                </div>
                <div>
                    <a href="/">Hipervínculo</a>
                </div>
            </div>
        </div>
    );
};

export default Sample;
import React, { useEffect } from 'react';
import './Sample.css';

const Sample = ({color, solidColor}) => {

    let primario,secundario,fondo,texto;

    useEffect(() => {
        primario = color;
        secundario = solidColor;
        fondo = generateThemeColors(color).background;
        texto = generateThemeColors(color).text;

        let boxPrimario = document.getElementById('primary');
        let boxSecundario = document.getElementById('secondary');
        let boxFondo = document.getElementById('background');
        let boxText = document.getElementById('text');


        boxPrimario.style.backgroundColor = color;
        boxPrimario.style.color = texto;
        boxPrimario.innerText = 'Primario '+primario;
        
        boxSecundario.style.backgroundColor = solidColor;
        boxSecundario.style.color = texto;
        boxSecundario.innerText = 'Secundario '+secundario;

        boxFondo.style.backgroundColor = fondo;
        boxFondo.style.color = texto;
        boxFondo.innerText = 'Fondo '+fondo;

        boxText.style.backgroundColor = texto;
        boxText.style.color = color;
        boxText.innerText = 'Texto '+texto;

        let content = document.getElementsByClassName('main')[0];
        content.style.backgroundColor = fondo;
        content.style.color = texto;

        let button = document.getElementsByClassName('button')[0];
        button.style.backgroundColor = primario;
        button.children[0].style.backgroundColor = fondo;
        button.children[0].style.color = texto;
        button.children[0].style.borderColor = secundario;

        button.children[0].addEventListener("mouseenter", () => {
            button.children[0].style.backgroundColor = texto; // Color en hover
            button.children[0].style.color = fondo; // Color en hover
            button.children[0].style.borderColor = color; // Color en hover
            button.style.backgroundColor = secundario; // Color en hover

        });
        
        button.children[0].addEventListener("mouseleave", () => {
            button.children[0].style.backgroundColor = fondo; // Restaura el color
            button.children[0].style.color = texto; // Restaura el color
            button.children[0].style.borderColor = secundario; // Restaura el color
            button.children[0].style.borderColor = secundario; // Restaura el color
            button.style.backgroundColor= primario; // Restaura el color
        });

        let link = document.getElementsByClassName('link')[0];
        link.style.backgroundColor = primario;
        link.children[0].style.color = texto;
        link.children[0].style.backgroundColor = fondo;
        
        link.children[0].addEventListener("mouseenter", () => {
            link.children[0].style.backgroundColor = texto; // Color en hover
            link.children[0].style.color = fondo; // Color en hover
        });
        
        link.children[0].addEventListener("mouseleave", () => {
            link.children[0].style.backgroundColor = fondo; // Restaura el color
            link.children[0].style.color = texto; // Restaura el color
        });


    }, [color, solidColor]);
    
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
    // const themeColors = generateThemeColors("#007BFF");
    
    return (
        <div className='Sample'>
            <div className='Sample-colors'>
                <div id='primary'>Color Primario</div>
                <div id='secondary'>Color Secundario</div>
                <div id='background'>Color Fondo</div>
                <div id='text'>Color Texto</div>
            </div>
            {/* <div className='Sample-tags'>
                <button type="button">botonera</button>
                <button type="button">botonera</button>
                <button type="button">botonera</button>
                <button type="button">botonera</button>
            </div> */}
            
            <div className='Sample-content'>
                <label htmlFor="main">Body Y Texto</label>
                <div className='main'>
                    <h1>Sample H1</h1>
                    <p>Sample P, Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem error dolore, sequi autem a, eligendi eius, officiis sunt aspernatur placeat dolores? Assumenda quibusdam laboriosam odio culpa totam distinctio tenetur obcaecati.</p>
                </div>
                <label htmlFor="button">Botón</label>
                <div className='button'>
                    <button>Botón Ejemplo</button>
                </div>
                <label htmlFor="link">Hipervínculo </label>
                <div className='link'>
                    <a href="/">Hipervínculo</a>
                </div>
            </div>
        </div>
    );
};

export default Sample;
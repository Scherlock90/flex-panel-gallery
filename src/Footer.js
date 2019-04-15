import React from 'react';

const footerStyle = {
    textAlign: 'center',
    color: 'rgb(21, 101, 192)',
    padding: '2em 0 2em 0',
    width: 'auto'
}
const titleStyle = {
    width: 'auto',
    borderRadius: '5%',
    fontWeight: '600',
    fontSize: '20px',
    zIndex: '100',
    position: 'relative',
    boxShadow: '-10px 25px 50px rgba(0, 0,0, 10.2)'
}

export default function Footer () {
    return (
        <div style={footerStyle}>
            <a style={titleStyle} href="http://senjs.eu/"> Designed SeN</a> 
        </div>
    )
}
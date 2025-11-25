import React from 'react';

function Button({ type = "button", children, onClick }) {
    return (
        <button 
            type={type} 
            onClick={onClick}
            style={{ marginTop: '10px', padding: '8px 16px', cursor: 'pointer' }}
        >
            {children}
        </button>
    );
}

export default Button;
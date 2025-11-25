import React from 'react';

function Button({ type = "button", children, onClick }) {
    return (
        <button 
            type={type} 
            onClick={onClick}
            className="w-full p-2.5 mt-2 bg-[#007bff] text-white rounded hover:bg-blue-600 transition-colors cursor-pointer border-none font-medium"
        >
            {children}
        </button>
    );
}

export default Button;
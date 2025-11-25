import React from 'react';
import LoginForm from '../components/LoginForm.jsx';

function Login() {
    return (    
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
            
             {/* La página instancia el Organismo */}
            <LoginForm />

        </div>
    );
}

export default Login;
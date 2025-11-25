import React from 'react';
import LoginForm from '../components/LoginForm.jsx';

function Login() {
    return (    
        <div className="h-screen w-screen grid place-content-center">

            <main className="flex flex-col items-center justify-center bg-white rounded shadow-none md:shadow-lg p-5 md:p-[90px]">

                <h1 className="text-3xl font-bold mb-5 text-center font-sans text-gray-800">
                    Iniciar Sesión
                </h1>

                 {/* La página instancia el Organismo */}
                <LoginForm />

            </main>

        </div>
    );
}

export default Login;
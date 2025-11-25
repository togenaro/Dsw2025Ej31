import React from 'react';
import { useForm } from 'react-hook-form';
// Importamos los átomos compartidos
import Input from '../../shared/components/ui/Input.jsx';
import Button from '../../shared/components/ui/Button.jsx';

function LoginForm() {
    
    const { 
        register, 
        handleSubmit, 
        formState: {errors}
    } = useForm( {mode: "onChange"} );

    const onSubmit = (data) => {
        console.log(data);
    };

    const rules = {
        username: { 
            required: "El nombre de usuario es obligatorio", 
            minLength: { 
                value: 5, 
                message: "El nombre de usuario debe tener al menos 5 caracteres" 
            } 
        },
        password: {
            required: "La contraseña es obligatoria",
            minLength: {
                value: 8,
                message: "La contraseña debe tener al menos 8 caracteres"
            }
        }
    };  

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
            <h2>Iniciar Sesión</h2>
            
            <Input 
                type="text" 
                id="username"
                label="Username"
                register={register}
                rules={rules.username}
                error={errors.username}
            />
            
            <Input 
                type="password" 
                id="password"
                label="Password"
                register={register}
                rules={rules.password}
                error={errors.password}
            />

            <Button type="submit">Submit</Button>

        </form>
    );
}

export default LoginForm;
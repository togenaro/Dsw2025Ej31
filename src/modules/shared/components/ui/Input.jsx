function Input ({type, id, label, register, rules, error}) {
    
    return (

        <div>
            <label htmlFor="id">
                {label}
            </label>

            <input 
                type={type || "text"}
                id={id}
                {...register(id, rules) }
            />
            { error && <p style={{ color: 'red' }}>{error.message}</p> }

        </div>
    );
}

export default Input;

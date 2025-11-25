function Input ({type, id, label, register, rules, error}) {
    
    return (

        <div className="flex flex-col mb-4 w-full">
            <label htmlFor="id">
                {label}
            </label>

            <input 
                type={type || "text"}
                id={id}
                {...register(id, rules) }
                // Clases Tailwind equivalentes a tu CSS original
                 className={`p-2.5 border rounded outline-none transition-colors
                ${error ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'}
                `}
            />
            { error && 
                <span className="text-red-500 text-xs mt-1">
                    {error.message}
                </span>
            }

        </div>
    );
}

export default Input;

import React, { useState } from "react";

export default function SearchForm ({ onSubmit }) {
    const [keyword, setKeyword] = useState('');
    
    const handleSubmit = evt => {
        evt.preventDefault();

        onSubmit({ keyword });
    }

    const handleChange = evt => {
        setKeyword(evt.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Search a gif here..." onChange={handleChange} type="text" value={keyword} />
            <button>Buscar</button>
        </form>
    )
}
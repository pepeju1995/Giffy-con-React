import React, { useState } from "react";
import { Link, useLocation } from "wouter";

const POPULAR_GIFS = ["Matrix", "Programacion", "Libros", "Harry Potter"];

export default function Home() {
    const [keyword, setKeyword] = useState('');
    const [path, pushLocation] = useLocation()

    const handleSubmit = evt => {
        evt.preventDefault()

        pushLocation(`/search/${keyword}`)
    }

    const handleChange = evt => {
        setKeyword(evt.target.value)
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input placeholder="Search a gif here..." onChange={handleChange} type="text" value={keyword} />
                <button>Buscar</button>
            </form>

            <h3 className="App-title">Los gifs mas populares</h3>
            <ul>
                {
                    POPULAR_GIFS.map((popularGif) => (
                        <li key={popularGif}>
                            <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
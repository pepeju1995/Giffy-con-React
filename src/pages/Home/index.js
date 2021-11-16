import React, { useState } from "react";
import { useLocation } from "wouter";
import useGifs from 'hooks/useGifs'
import ListOfGifs from 'components/ListOfGifs/index'
import TrendingSearches from "components/TrendingSearches";

export default function Home() {
    const [keyword, setKeyword] = useState('');
    const [path, pushLocation] = useLocation()
    const { loading, gifs} = useGifs()

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

            <h3 className="App-title">Ultima búsqueda</h3>
            <ListOfGifs gifs={gifs} />

            <div>
                <TrendingSearches />
            </div>
        </>
    )
}
import React, { useState } from "react";
import { useLocation } from "wouter";
import useGifs from 'hooks/useGifs'
import ListOfGifs from 'components/ListOfGifs/index'
import TrendingSearches from "components/TrendingSearches";
import SearchForm from "components/SearchForm";

export default function Home() {
    const [path, pushLocation] = useLocation()
    const { loading, gifs} = useGifs()

    const handleSubmit = ({ keyword }) => {
        pushLocation(`/search/${keyword}`)
    }
    
    return (
        <div>
            <SearchForm onSubmit={handleSubmit} />
            
            <h3 className="App-title">Última búsqueda</h3>
            <ListOfGifs gifs={gifs} />

            <div>
                <TrendingSearches />
            </div>
        </div>
    )
}
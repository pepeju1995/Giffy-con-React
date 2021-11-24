import React, { useCallback } from "react";
import { useLocation } from "wouter";
import useGifs from 'hooks/useGifs'
import ListOfGifs from 'components/ListOfGifs/index'
import TrendingSearches from "components/TrendingSearches";
import SearchForm from "components/SearchForm";
import { Helmet } from "react-helmet";

export default function Home() {
    const [ , pushLocation] = useLocation()
    const {gifs} = useGifs()

    const handleSubmit = useCallback(({ keyword }) => {
        pushLocation(`/search/${keyword}`)
    }, [pushLocation])
    
    return (
        <div>
            <Helmet>
                <title>Home | Giffy</title>
            </Helmet>
            <SearchForm onSubmit={handleSubmit} />
            
            <h3 className="App-title">Última búsqueda</h3>
            <ListOfGifs gifs={gifs} />

            <div>
                <TrendingSearches />
            </div>
        </div>
    )
}
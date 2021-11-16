import { useContext } from "react";
import GifsContext from 'context/GifsContext'

export default function useGloblGifs(){
    const {gifs} = useContext(GifsContext)

    return gifs
}
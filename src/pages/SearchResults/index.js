import React,{ useEffect, useRef, useCallback } from "react";
import Spinner from "components/Spinner";
import ListOfGifs from "components/ListOfGifs";
import useGifs from "hooks/useGifs";
import useNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";

export default function SearchResults({ params }) {
    const { keyword } = params;
    const { loading, gifs, setPage } = useGifs({ keyword })
    const externalRef = useRef();
    const { isNearScreen } = useNearScreen({ 
        externalRef: loading ? null : externalRef, 
        once: false,
        distance: '500px'
    })

    // eslint-disable-next-line
    const debounceHandleNextPage = useCallback(debounce(
        () => setPage(prevPage => prevPage + 1), 100
    ), [setPage])

    useEffect(() => {
        if(isNearScreen) debounceHandleNextPage();
    }, [debounceHandleNextPage, isNearScreen])

    return <>
        {loading
            ? <Spinner />
            : <>
                <h3 className="App-title">{decodeURI(keyword)}</h3>
                <ListOfGifs gifs={gifs} />
                <div id="visor" ref={externalRef}>

                </div>
            </>
        }
        <br/>
    </>
}

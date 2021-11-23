import React from "react";
import Gif from "components/Gif";
import './styles.css'

export default function ListOfGifs({ gifs }) {
    return <div className='ListOfGifs'>
        {
            gifs.map(({ id, title, url, ...restOfGif}) => {
            return (
                <Gif 
                    id={id}
                    key={id}
                    title={title}
                    url={url}
                    extraInfo={restOfGif}
                />
            )
            })
        }
    </div>
}
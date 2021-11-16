import React from "react";
import { Link } from "wouter";

export default function Category({ name, options}) {
    return (
        <>
            <h3 className="App-title">{name}</h3>
            <ul>
                {
                    options.map(option => (
                        <li key={option}>
                            <Link to={`/search/${option}`}>{option}</Link>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
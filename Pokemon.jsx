import React from 'react';
import { useEffect } from 'react';
import './index.css';
import { Pokemoncard } from './Pokemoncard';
export const Pokemon = () => {
    const [pokemon, setPokemon] = React.useState([]);
    const[search, setSearch] = React.useState('');
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    const API="https://pokeapi.co/api/v2/pokemon?limit=124";
    const fetchPokemon=async()=>{
        try{
            const response=await fetch(API);
            const data=await response.json();
            const detailedData=data.results.map(async(curElem)=>{
               const res=await fetch(curElem.url);
               const data=await res.json();
               return data;
            })
            const detailedResponse=await Promise.all(detailedData);
            console.log(detailedResponse);
            setPokemon(detailedResponse);
            setLoading(false);
           


        }
        catch(error){
            console.log(error);
            setError(error);
            setLoading(false);       }
    }
 
    useEffect(()=>{
        fetchPokemon();

    },[])


    // Filter the pokemon based on search input 
    // using toLowerCase for case-insensitive search
    const Searchdata = pokemon.filter((curElem) => {
        return curElem.name.toLowerCase().includes(search.toLowerCase());
    })

    if(loading){
        return <h1>
            Loading...</h1>;
    }
    if(error){
        return <div>Error: {error.message}</div>;
    }
    return(
        <section className="container">
            <header>
            <h1>Let's Catch Pokemon</h1>
            </header>
            <div className="pokemon-search">
                <input type='text' placeholder="Enter Pokemon Name" value={search} onChange={(e)=> setSearch(e.target.value)} />
            </div>
            <div>
                <ul className="cards">
                    {Searchdata.map((curPokemon)=>{
                        return <Pokemoncard key={curPokemon.id} pokemonData={curPokemon} />
                    })}
                </ul>

            </div>

        </section>

       
    );

}

    
    
    


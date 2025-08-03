export const Pokemoncard=({pokemonData})=>{
    return <li className="pokemon-card">
        <figure>
            <img src={pokemonData.sprites.other.dream_world.front_default} alt={pokemonData.name} className="pokemon-image"/>
        </figure>
        <div className="pokemon-name"><b>{pokemonData.name}</b></div>
        <div className="pokemon-info pokemon-highlight">
           <p>
            {pokemonData.types.map((curElem)=>curElem.type.name).join(', ')}
           </p>
        </div>
        <div className="grid-three-cols">
            <div className="pokemon-info">
                  <p>{pokemonData.height}</p>
                <span>Height:</span>

            </div>
            <div className="pokemon-info">
                  <p>{pokemonData.weight}</p>
                <span>Weight:</span>

            </div>
            <div className="pokemon-info">
                  <p>{pokemonData.base_experience}</p>
                <span>Experience:</span>

            </div>
            <div className="pokemon-info">
                  <p>{pokemonData.stats[5].base_stat}</p>
                <span>speed:</span>

            </div>
            <div className="pokemon-info">
                  <p>{pokemonData.stats[1].base_stat}</p>
                <span>Attack:</span>

            </div>
             <div className="pokemon-info">
                  <p>{pokemonData.abilities.map((curElem)=>curElem.ability.name).slice(0, 1)}</p>
                <span>Abilities:</span>

            </div>
        </div>
        

    </li>

}

import { useEffect, useState } from "react";
import axios from "axios";
import Search from "../search/search";

const Pokemon = () => {
  const [searchValue, setSearchValue] = useState("");
  const [pokemonData, setPokemonData] = useState({});

  // AXIOS BASIQUE version
  useEffect(() => {
    if (searchValue !== "") {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${searchValue}`)
        .then((response) => {
          console.log(response.data)
          setPokemonData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [searchValue]);

  return (
    <>
      <Search setSearch={setSearchValue} />
      {/* Vérification si le state qui est un object contient quelque chose */}
      {Object.keys(pokemonData).length !== 0 ? (
        <section>
          <h1>{pokemonData.name}</h1>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <p>Height: {pokemonData.height}</p>
          <p>Weight: {pokemonData.weight}</p>

          <h2>Stats</h2>
          <ul style={ { listStyle: "none" } }>
            {pokemonData.stats.map((stat) => (
              <li key={stat.stat.name}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <section>
          <h3>Search something...</h3>
        </section>
      )}
    </>
  );
};

export default Pokemon;

// XHR version 
  // useEffect(() => {
  //   if (searchValue !== "") {
  //     const xhr = new XMLHttpRequest();
  //     const url = `https://pokeapi.co/api/v2/pokemon/${searchValue}`;
    
  //     xhr.onreadystatechange = function() {
  //       if (xhr.readyState === 4 && xhr.status === 200) {
  //         const response = JSON.parse(xhr.responseText);
  //         console.log('XHR console.log');
  //         console.log(response);
  //         // Process the response data here
  //       }
  //     };

  //     xhr.open('GET', url, true);
  //     xhr.send();
  //   }
  // }, [searchValue])


  //FETCH version
  // useEffect(() => {
  //   if (searchValue !== "") {
  //     const url = `https://pokeapi.co/api/v2/pokemon/${searchValue}`;

  //     fetch(url)
  //       .then(response => {
  //         if (response.ok) {
  //           return response.json();
  //         }
  //         throw new Error('Network response was not ok.');
  //       })
  //       .then(data => {
  //         console.log('FETCH console.log');
  //         console.log(data);
  //         // Process the response data here
  //       })
  //       .catch(error => {
  //         console.error('Error:', error);
  //       });
  //   }
  // }, [searchValue])
  
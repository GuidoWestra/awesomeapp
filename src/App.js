import logo from "./logo.svg";
import Title from "./components/title";
import Pokemon from "./components/Pokemon";
// import PokemonDos from "./components/PokemonDos";
import "./App.css";

// const allPokemonData = [
//   { name: "Charizard", weight: 90 },
//   { name: "Bulbasaur", weight: 6.9 },
//   { name: "Mewtwo", weight: 122 },
//   { name: "Mega Beedrill", weight: 65 },
// ];

// const poke = allPokemonData.map((Animal) => {
// return <PokemonDos name={Animal.name} weight={Animal.weight} />;
// });

function App() {
  return (
    <div className="App">
      <main>
        <Title content="Some Simple Title" />
        {/* {poke} */}
        <Pokemon
          name="Charizard"
          weight={90}
          awesome={true}
          terrifying={false}
          abilities={["Blaze", "Solar power", "Tough claws", "Drought"]}
        />
        <Pokemon
          name="Bulbasaur"
          weight={6.9}
          awesome={true}
          terrifying={false}
          abilities={["Overgrow", "Chlorophyll"]}
        />
        <Pokemon
          name="Mewtwo"
          weight={122}
          awesome={true}
          terrifying={true}
          abilities={["Pressure", "unnerve"]}
        />
        <Pokemon
          name="Mega Beedril"
          weight={65}
          awesome={false}
          terrifying={true}
          abilities={["Pressure", "Unnerve"]}
        />
      </main>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This moving thing above me is pretty cool :)</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Whaddup
        </a>
      </header>
    </div>
  );
}

export default App;

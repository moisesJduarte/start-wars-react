import React from 'react';

class StarWars extends React.Component {
    constructor() {
        super();
        this.state = {
            loadedCharacter: false,
            name: null,
            height: null,
            homeworld: null,
            imageUrl: null,
            gender: null,
            species: null,
            films: [],
        };
    }

    getNewCharacter() {
        const randomNumber = Math.ceil(Math.random() * 83);
        const url = `https://raw.githubusercontent.com/akabab/starwars-api/master/api/id/${randomNumber}.json`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    name: data.name,
                    height: data.height,
                    homeworld: data.homeworld,
                    films: data.films,
                    imageUrl: data.image,
                    gender: data.gender,
                    species: data.species,
                    loadedCharacter: true,
                });
            });
    }

    render() {
        return (
            <div>
                <header className="header">
                    <h1>Star Wars Character Randomizer</h1>
                </header>
                <main className="main">
                    <div className="character-container">
                        {this.state.loadedCharacter && (
                            <div className="character-card">
                                <img src={this.state.imageUrl} alt={this.state.name} className="character-img" />
                                <h2>{this.state.name}</h2>
                                <p>Height: {this.state.height} m</p>
                                <p>Homeworld: {this.state.homeworld}</p>
                                <p>Gender: {this.state.gender}</p>
                                <p>Species: {this.state.species}</p>
                            </div>
                        )}
                    </div>
                    <button
                        type="button"
                        onClick={() => this.getNewCharacter()}
                        className="btn"
                    >
                        Randomize Character
                    </button>
                </main>
            </div>
        );
    }
}

export default StarWars;

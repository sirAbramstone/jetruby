import React, {Component} from 'react';

import shuffleArray from '../shuffleArray';
import Tile from '../Tile/Tile';
import './App.css';

const COLORS = [
    "green", "green", "green", "green", "blue", "blue", "blue", "blue",
    "yellow", "yellow", "yellow", "yellow", "pink", "pink", "pink", "pink"
];

class App extends Component {
    constructor() {
        super();

        this.state = {
            tiles: shuffleArray([...COLORS]),
            selected: [],
            correct: [],
            count: 0
        };
    }

    onTileClick = (i) => {
        const {tiles, selected, correct} = this.state;
        let {count} = this.state;

        if (selected.length === 0) {
            this.setState({
                selected: [i],
                count: count + 1
            });
        } else if (selected.length === 1) {
            if (tiles[selected[0]] === tiles[i]) {
                this.setState({
                    correct: correct.concat([selected[0], i]),
                    selected: [],
                    count: count + 1
                });
            } else {
                this.setState({selected: [selected[0], i]});
                setTimeout(() => {
                    this.setState({
                        selected: [],
                        count: count + 1
                    })
                }, 500);
            }
        }
    };

    render() {
        const {tiles, selected, correct, count} = this.state;

        return (
            <div className="App">
                <h1>{correct.length === tiles.length ? `Congratulations! You made: ${count} moves` : "JetRuby`s Memory Puzzle"}</h1>
                <div className="TileGrid">
                    {tiles.map((tile, i) => (
                        <Tile
                            key={i}
                            color={tile}
                            isSelected={selected.includes(i)}
                            isCorrect={correct.includes(i)}
                            onSelect={() => this.onTileClick(i)}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default App;

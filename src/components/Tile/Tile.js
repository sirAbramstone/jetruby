import React, {Component} from 'react';

import './Tile.css';

class Tile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            flipped: false,
            flippedColor: this.props.flippedColor
        }
    }

    flipTile = () => {
      this.setState({flipped: true})
    };

    render() {
        const isFlipped = this.state.flipped;
        const classes = this.state.flippedColor;

        return (
            <li
                className={isFlipped ? `Tile Tile-${classes}` : "Tile"}
                id={`Tile-${this.props.id}`}
                onClick={this.flipTile}
            />
        );
    }
}

export default Tile;
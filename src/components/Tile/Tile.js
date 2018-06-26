import React from 'react';

import './Tile.css';

const Tile = ({color, isSelected, isCorrect, onSelect}) => {
    const classes = (isSelected || isCorrect) ? `Tile Tile-${color}` : "Tile";
    return (
        <div
            className={classes}
            onClick={() => {
                if (!isSelected && !isCorrect) {
                    onSelect();
                }
            }}
        />
    )
};


export default Tile;
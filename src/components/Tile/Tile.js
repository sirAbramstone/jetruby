import React from 'react';
import PropTypes from 'prop-types';

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

Tile.propTypes = {
    color: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
    isCorrect: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired
};

export default Tile;
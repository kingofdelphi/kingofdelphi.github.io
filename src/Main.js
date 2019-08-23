import React from 'react';

import CSSModules from 'react-css-modules';

import GameLink from './GameLink';

import styles from './css/styles.scss';

const Main = () => {
    return (
        <div styleName='main'>
            <div styleName='projects-container'>
                <GameLink 
                    href='/cube_solver/dist'
                    title='Cube Solver'
                    description='AI solver for game from Simon Tathams Puzzle Collection'
                />
                <GameLink 
                    href='/neverball'
                    title='Neverball'
                    description='Open source game clone in vanilla JS'
                />
                <GameLink 
                    href='#'
                    title='2d Physics Engine'
                    description='Demonstrates collision detection and response'
                />
                <GameLink 
                    href='/bicycle/dist'
                    title='Cycle Game'
                    description='Cycle game using verlet physics'
                />
            </div>
        </div>
    );
};

export default CSSModules(Main, styles);

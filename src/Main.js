import React from 'react';

import CSSModules from 'react-css-modules';

import GameLink from './GameLink';

import styles from './css/styles.scss';

const Main = () => {
    return (
        <div styleName='main'>
            <h2>My name is Uttamraj Khanal</h2>
            <p>I am a software engineer</p>
            <p>These are my projects</p>
            <div styleName='projects-container'>
                <GameLink 
                    href='/projects/cube_solver'
                    title='Cube Solver'
                    description='AI solver for game from Simon Tathams Puzzle Collection'
                />
                <GameLink 
                    href='/projects/neverball'
                    title='Neverball'
                    description='Open source game clone in vanilla JS'
                />
                <GameLink 
                    href='/projects/2d_physics_engine'
                    title='2d Physics Engine'
                    description='Demonstrates collision detection and response'
                />
                <GameLink 
                    href='/projects/bicycle'
                    title='Cycle Game'
                    description='Cycle game using verlet physics'
                />
            </div>
        </div>
    );
};

export default CSSModules(Main, styles);

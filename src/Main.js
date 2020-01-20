import React from 'react';

import CSSModules from 'react-css-modules';

import GameLink from './GameLink';

import styles from './css/styles.scss';

const Main = () => {
    return (
        <div styleName='main'>
          <div styleName='profile'>
            <div styleName='profile-pic'></div>
              <div styleName='profile-info'>
                <div styleName='name'>Uttam Raj Khanal</div>
                <div styleName='description'>
                  <div>I am a software engineer with 3 years of experience.</div>
                  <div>Skills: ReactJS, Docker, Nginx, Java, C, C++, Scala</div>
                </div>
              </div>
          </div>
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
              <GameLink 
                  href='/projects/car_game'
                  title='2d Street Racing'
                  description='Street racing car game'
              />
          </div>
        </div>
    );
};

export default CSSModules(Main, styles);

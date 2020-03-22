import React from 'react';

import CSSModules from 'react-css-modules';

import GameLink from './GameLink';

import styles from './css/styles.scss';

const Main = () => {
    return (
      <div styleName="main">
        <div styleName="profile">
          <div styleName="profile-pic"></div>
          <div styleName="profile-info">
            <div styleName="name">Uttam Raj Khanal</div>
            <div styleName="description">
              <div>I am a software engineer with 3 years of experience.</div>
              <div>Skills: ReactJS, Docker, Nginx, Java, C, C++, Scala</div>
            </div>
          </div>
        </div>
        <div styleName="projects-container">
          <GameLink
            href="/projects/machine_learning_with_javascript"
            title="Machine Learning"
            description="Regression and classification showcase. Supports linear and non-linear regression and classification"
          />
          <GameLink
            href="/projects/cube_solver"
            title="Cube Solver"
            description="AI solver for game from Simon Tathams Puzzle Collection. Tweaked version of Dijkstra was used to solve the problem."
          />
          <GameLink
            href="/projects/neverball"
            title="Neverball"
            description="3d game written in vanilla JS. A 3d renderer was built. It also includes a level designer as well."
          />
          <GameLink
            href="/projects/2d_physics_engine"
            title="2d Physics Engine"
            description="Demonstrates collision detection and response. SAT algorithm was used for collision detection."
          />
          <GameLink
            href="/projects/bicycle"
            title="Cycle Game"
            description="Cycle game using verlet physics. Simple line and circle collision detection and resolution was used with verlet integration"
          />
          <GameLink
            href="/projects/car_game"
            title="2d Street Racing"
            description="A very simple car game written in javascript."
          />
        </div>
      </div>
    );
};

export default CSSModules(Main, styles);

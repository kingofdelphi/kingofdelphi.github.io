import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './css/gamelink.scss';

const GameLink = (props) => {
    const { href, title, description } = props;
    return (
        <li styleName='game-link'>
            <a href={href}>
                <div styleName='title'>{title}</div>
                <div styleName='description'>{description}</div>
            </a>
        </li>
    );
};

export default CSSModules(GameLink, styles);

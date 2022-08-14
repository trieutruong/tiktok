import React from 'react';
import PropTypes from 'prop-types';
import './GlobalStyle.scss';

function GlobalStyles({ children }) {
    // return React.Children.only(children);
    return children
}

GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GlobalStyles;

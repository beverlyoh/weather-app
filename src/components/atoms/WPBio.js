
import React from 'react'
import PropTypes from 'prop-types';

const WPBio = ({bio, ...props}) => {
    return (
        <div>
            <p> If there is one thing Clive knows, it's bad weather. Need to complain about the impending bad weather heading your way? Tell it to Clive. He knows bad weather is snow laughing matter.</p>
            </div>
    )
}

WPBio.propTypes = {
  name: PropTypes.string
};

export default WPBio;
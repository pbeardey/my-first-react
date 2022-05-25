import React from 'react';
import PropTypes from 'prop-types';


const Dropdown = ( { title, options } ) => {
    const isOpen = false;

    return (
      <div>
        <div>{title}</div>
            { 
            isOpen && (
                <div>
                  <ul>
                    {options.map( (item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                  </ul>
                </div>
            )
            }
      </div>
    );
}

Dropdown.propTypes = {
    title: PropTypes.string,
    options: PropTypes.array
}

export default Dropdown;
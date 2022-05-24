import React from 'react'

const Dropdown = ({ title, options } ) => {
    return (
        <div>{title}
          <ul>
            {options.map( (item) => (
                <li>{item}</li>
              ))}
          </ul>
        </div>
    );
}

export default Dropdown;
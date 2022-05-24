import React from 'react'

const Dropdown = ( { title, options } ) => {
    return (
        <div>
          <div>{title}</div>
          <div>
            <ul>
              {options.map( (item, i) => (
                  <li key={i}>{item}</li>
                ))}
            </ul>
          </div>
        </div>
    );
}

export default Dropdown;
import React from 'react'

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

export default Dropdown;
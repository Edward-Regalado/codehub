import React from 'react';

function Table(props) {
  return (
    <div>
        {props.data.map((table, idx) => {
           return(
           <div key={idx}>
            <h1>{table.id}</h1>
            <h1>{table.name}</h1>
            <h3>{table.participants}</h3>
            </div>
            ); 
        })}
    </div>
  );
}

export default Table;
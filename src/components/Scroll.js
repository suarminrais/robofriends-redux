import React from 'react';

const Scroll = (props) => {
  return (
    <div className="pt2" style={{ overflowY: 'scroll', height: '73vh', border: '5px solid black' }}>
      {props.children}
    </div>
  );
}

export default Scroll;
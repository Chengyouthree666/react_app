import React from 'react';

const Sticky = () => (
  ['AAA', 'BBB', 'CCC', 'DDD'].map((i) => (
    <React.Fragment key={i}>
      <h4 className='title' style={{ position: 'sticky', top: 0, backgroundColor: 'skyblue' }}>{i}</h4>
      <div className='content' style={{ paddingBottom: `${Math.random() * 300}px` }}>{i}----内容...</div>
    </React.Fragment>
  ))
);

export default Sticky;

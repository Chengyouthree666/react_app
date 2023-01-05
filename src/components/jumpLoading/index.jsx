import React from 'react';

export default function JumpLoading() {
  return <div style={{
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(220, 220, 220, .6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }}>
    <span id='jump-loading-block'></span>
    <span style={{ color: 'skyblue', marginLeft: '20px', fontSize: '20px' }}>loading...</span>
  </div>;
}

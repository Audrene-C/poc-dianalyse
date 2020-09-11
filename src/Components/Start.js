import React from 'react';
import MyAccordion from './MyAccordion';

function Start() {
    let isMobile = window.matchMedia("(max-width: 414px)").matches;

    if (isMobile) {
        return (
            <div className="content">
                <MyAccordion />
            </div>
          );
    }
// return some smooth scroll react here
  return (
    <div className="content">
        <h1>Grand écran</h1>
    </div>
  );
}

export default Start;

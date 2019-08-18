import React, { useLayoutEffect, useEffect, useRef } from 'react';
import Details from '../Details';

export default function UseLayoutEffect() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  // The function inside useLayoutEffect fires when
  // React starts mutating the browser
  // Good example for this is if you want execute your function w/out any flickering
  // in the screen and want's to update the user initially
  // Be careful to use this hooks because it blocks the browser rendering
  // don't put high computation value here...
  useLayoutEffect(() => {
    // firstNameRef.current.focus();
    firstNameRef.current.value = 'Vincent';
    console.log('useLayoutEffect function was called.');
  }, []);

  // The function inside useEffect will fire when React finished mutating the browser
  // and painting the DOM.
  // As you noticed we have some ms delay flickering when we compare it to useLayoutEffect.
  useEffect(() => {
    lastNameRef.current.value = 'Llauderes';
    console.log('useEffect function was called.');
  }, []);

  console.log('render method');

  return (
    <Details title="useLayoutEffect effect example">
      <p>
        First Name:
        <input ref={firstNameRef} type="text" name="first-name" />
      </p>
      <p>
        Last Name:
        <input ref={lastNameRef} type="text" name="last-name" />
      </p>
      <input type="submit" name="submit" />
    </Details>
  );
}

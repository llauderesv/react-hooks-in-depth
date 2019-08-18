import React, { useMemo, useState, memo, useEffect, useCallback } from 'react';
import Details from '../Details';

export default function UseMemo() {
  const [count, setCount] = useState(0);
  // const [user, setUser] = useState({});
  const likes = useMemo(() => {
    let i = 0;
    while (i < 1000) i++;
    return i;
  }, []);

  // This will memoized the value of user object
  const user = useMemo(
    () => ({
      name: 'Vince',
      age: 21,
      address: 'Sample Address',
    }),
    []
  );

  const user2 = useCallback(() => ({
    name: 'Vince',
    age: 21,
    address: 'Sample Address',
  }), []);

  // useEffect(() => {
  //   const user = {
  //     name: 'Vince',
  //     age: 21,
  //     address: 'Sample Address',
  //   };
  //   setUser(user);
  // }, []);

  // useEffect(() => {
  //   if (count === 5) {
  //     setUser(prevState => ({ ...prevState, name: 'Vincent' }));
  //   }
  // }, [count]);

  return (
    <Details title="useMemo and React.memo example">
      <UserDetails user={user2} likes={likes} />
      <p>Count value is {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Click me!</button>
    </Details>
  );
}

const UserDetails = memo(function MyUserDetails({ user, likes, ...restProps }) {
  const { name, age, address } = user;

  console.log('UserDetails first render.');
  return (
    <div {...restProps}>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Address: {address}</p>
      <p>Likes: {likes}</p>
    </div>
  );
});

// This custom function used to check if we're going 
// to re-render Component/
// Returns true if there's no changes in prevProps and nextProps
// Returns false if prevProps and nextProps is not equal...
function AreEqual(prevProps, nextProps) {
  return prevProps.user.name === nextProps.user.name;
}

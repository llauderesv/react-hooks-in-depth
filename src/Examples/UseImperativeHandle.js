import React, {
  useImperativeHandle,
  useRef,
  useEffect,
  forwardRef,
} from 'react';
import Details from '../Details';

// This Component Uses useImperativeHandle to expose the
// custom method name in your parent component...
function Input(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focusOnInput: () => {
      inputRef.current.focus();
    },
  }));
  return <input ref={inputRef} {...props} />;
}

Input = forwardRef(Input);

export default function UseImperativeHandle() {
  const inputRef = useRef();

  useEffect(() => {
    // Instead of using focus method we use focusForm instead.
    inputRef.current.focusOnInput();
  }, []);

  return (
    <Details title="useImperativeHandler example">
      <Input ref={inputRef} />
    </Details>
  );
}

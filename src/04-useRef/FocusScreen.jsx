import { useRef } from 'react';

export const FocusScreen = () => {
  const inputRef = useRef();

  const onClick = () => {
    inputRef.current.select();
  };

  return (
    <div className='container-fluid text-center'>
      <h1 className='text-center text-bg-primary'>Focus Screen</h1>
      <hr />

      <input
        ref={inputRef}
        type='text'
        placeholder='Ingrese nombre'
        className='form-control'
      />

      <button className='btn btn-primary text-center' onClick={onClick}>
        Set Focus
      </button>
    </div>
  );
};

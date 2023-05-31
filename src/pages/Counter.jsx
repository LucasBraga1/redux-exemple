import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../context/actions';
import SectionContador from '../components/SectionContador';

function Counter() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <SectionContador
        count={count}
        increment={handleIncrement}
        decrement={handleDecrement}
        button1={"Increment"}
        button2={"Decrement"}
      />
    </div>
  );
}

export default Counter;

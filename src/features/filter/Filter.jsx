// Filter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updatedFilteredCars } from './filterCars';
import styles from './Counter.module.css';

export default function Filter() {
  const filteredCars = useSelector((state) => state.cars.filteredCars);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          type="button"
          aria-label="Filter value"
          onClick={() => dispatch(updatedFilteredCars())}
        >
          +
        </button>
        <span className={styles.value}>{filteredCars}</span>
        <button
          type="button"
          aria-label="Decrement value"
          onClick={() => dispatch(updatedFilteredCars())}
        >
          -
        </button>
      </div>
    </div>
  );
}

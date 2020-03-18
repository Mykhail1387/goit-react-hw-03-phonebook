import React from 'react';
import styles from './filter.module.css';

const Filter = ({ value, onchangeFilter }) => (
    <div className={styles.wrap}>
        <span className={styles.text}>Find contacts by name: </span>
        <input
            type="text"
            value={value}
            onChange={onchangeFilter}
        />
    </div>
)

export default Filter;
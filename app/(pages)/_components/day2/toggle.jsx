"use client";
import React, { useState } from 'react';
import styles from '../../_styles/days/day2.module.scss';

export const Toggle = ({ handleChange, isChecked }) => {
    return (
        <div className={styles.togglecontainer}>
            <input
                type="checkbox"
                id="check"
                className="toggle"
                onChange={handleChange}
                checked={isChecked}
            />

        <label htmlFor="check">Dark Mode</label>

        </div>

    );
};

export default Toggle;
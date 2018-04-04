import React from "react";

import {MONTHS_NAMES} from './../../constant';

export default ({date, prevMonthHandler, nextMonthHandler}) => (
    <section className="year-header">
        <button className="year-header__previous"
                onClick={() => {prevMonthHandler()}}>
        </button>
        <time
            className="year-header__year">
            {MONTHS_NAMES[date.getMonth()]} {date.getFullYear().toString()}
        </time>
        <button
            className="year-header__next"
            onClick={() => {nextMonthHandler();}}>
        </button>
    </section>
)
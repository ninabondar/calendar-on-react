import React from "react";

export default ({DayNumber, OtherMonthClass}) => (
    <div
        className={['calendar-page__day', OtherMonthClass].join(' ')}>
            {DayNumber}
    </div>
);
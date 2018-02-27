import React, { Component } from "react";
import ReactDOM from "react-dom";

import Day from './../presentational/Day';

class CalendarGridContainer extends Component {
    constructor(props){
        super(props);
    }

    renderMonthGrid(date) {
        console.log('a');
        const dayList = [];
        let offset = new Date(date.getFullYear(), date.getMonth(),1).getDay();
        let daysInMonth =  new Date(date.getFullYear(), date.getMonth()+1, 0).getDate().toString().split(' ')[0];
        if(offset === 0){
            for(let i=1;  i <=6; i++) {
                dayList.push(<Day DayNumber=''
                                  OtherMonthClass='other-month'/>);
            }
        }
        else if(offset !== 1){
            const prevMonth = new Date(date);
            prevMonth.setMonth(prevMonth.getMonth() - 1);

            const daysInPrevMonth = new Date(prevMonth.getFullYear(), prevMonth.getMonth()+1, 0).getDate().toString().split(' ')[0];

            const numDays = offset - 1;


            for(let i = 1; i < offset; i++){
                dayList.push(<Day DayNumber={daysInPrevMonth - numDays + i}
                                  OtherMonthClass='other-month'/>)
            }
        }
        for (let i = 1; i <= daysInMonth; i++){

            dayList.push(<Day key={i}
                              DayNumber={i}/>)
        }

        let newMonthDay = 1;
        while (dayList.length < 42){
            dayList.push(<Day DayNumber={newMonthDay}
                              OtherMonthClass='other-month'/>);
            newMonthDay++;
        }

        return (
            <main className="calendar-page">
                {dayList}
            </main>
        )
    }

    render() {
        return (
            this.renderMonthGrid(this.props.date)
        );
    }
}

export default CalendarGridContainer;

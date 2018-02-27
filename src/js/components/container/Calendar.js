import React from 'react';

import CalendarGrid from './CalendarGrid';
import Header from './../presentational/Header';

export default class Calendar extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            date: new Date()
        };

        let months = ['january', 'february', 'march', 'april', 'may', 'june', "july", 'august', 'september', 'october',
            'november', 'december'];
    }


    incrementMonth () {
        let newDate = this.state.date;
        newDate.setMonth(this.state.date.getMonth() + 1);
        this.setState({date: newDate});
    }

    decrementMonth () {
        let newDate = this.state.date;
        newDate.setMonth(this.state.date.getMonth() - 1);
        this.setState({date: newDate});
    }

    render () {
        return (<div>
            <Header date={this.state.date}
                    prevMonthHandler={() => {this.decrementMonth()}}
                    nextMonthHandler={() => {this.incrementMonth();}}/>
            <main className="calendar-page-wrapper">
                <ul className="weekdays">
                    <li className="weekdays__weekday">Mon</li>
                    <li className="weekdays__weekday">Tue</li>
                    <li className="weekdays__weekday">Wed</li>
                    <li className="weekdays__weekday">Thu</li>
                    <li className="weekdays__weekday">Fri</li>
                    <li className="weekdays__weekday">Sat</li>
                    <li className="weekdays__weekday">Sun</li>
                </ul>
                <CalendarGrid date={this.state.date}/>
            </main>
            </div>
        )
    }
}
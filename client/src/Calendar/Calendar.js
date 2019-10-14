import React, {Component} from 'react';
import { directive } from '@babel/types';

class Calendar extends Component {
    render() {
        return (
            <div className="calendar-container">
                <CalendarHeader year={this.props.year} month={this.props.month} />
                <CalendarMonth />
            </div>
        )
    }
}

class CalendarHeader extends Component {
    render() {
        return(
            <div className="calendar-header"><button className="btn btn-light" id="today">Today</button>
                <div className="ico-arrow"><a id="prevMonth" data-toggle="tooltip" data-placement="top" title="이전"><i className="material-icons">chevron_left</i></a><a id="nextMonth" data-toggle="tooltip" data-placement="top" title="다음"><i className="material-icons">chevron_right</i></a></div>
                <h4 id="cal-month">{this.props.year}년 {this.props.month}월</h4>
                    <ul className="nav nav-tabs view-tab" id="view" role="tablist">
                        <li className="nav-item"><a className="nav-link" id="tab-month" href="/" role="tab" aria-controls="month" aria-selected="true">Monthly</a></li>
                        <li className="nav-item"><a className="nav-link" id="tab-day" href="daily" role="tab" aria-controls="day" aria-selected="false">Daily</a></li>
                    </ul>
            </div>
        )
    }
}

class CalendarMonth extends Component {
    render() {
        return(
            <div className="tab-content">
                <div className="monthly-calendar">
                    <div className="week-day">
                        <div className="day-name">일</div>
                        <div className="day-name">월</div>
                        <div className="day-name">화</div>
                        <div className="day-name">수</div>
                        <div className="day-name">목</div>
                        <div className="day-name">금</div>
                        <div className="day-name">토</div>
                    </div>
                    <CalendarWeek />
                </div>
            </div>
        )
    }
}

const dates = [1,2,3,4,5,6,7];

class CalendarWeek extends Component {
    render() {
        return(
            <div className="week">
                {dates.map(c => { return ( <CalendarDate key={c} date={c} /> ) })}
            </div>
        )
    }
}

class CalendarDate extends Component {
    render() {
        return(
            <div className="day">
                <h3 className="day-label">{this.props.date}</h3>
            </div>
        )
    }
}


export default Calendar;
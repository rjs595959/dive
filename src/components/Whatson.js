import React from 'react';
import WeekCalendar from './WeekCalendar';
import ScheduleList from './ScheduleList';
import {Route} from 'react-router-dom';

const Whatson = () => {
    return (
        <div>
            <WeekCalendar />
            <Route exact path="/"
                component={ScheduleList}
            />
            <Route path="/content/:date"
                component={ScheduleList}
            />
        </div>
    )
}

export default Whatson;
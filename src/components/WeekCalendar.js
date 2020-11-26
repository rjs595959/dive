import React from 'react';
import {NavLink} from 'react-router-dom';

import styled from 'styled-components';

const WeekCalendar = () => {
    let week={}
    const days  = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const dates = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // style
    const Wrap = styled.div`
        display: flex;
        text-align: center;
        margin-bottom: 20px;
        justify-content: space-between;
    `

    const SubWrap = styled.div`
        width: 55px;
        height: 50px;
        & span {
            line-height: 23px;
            display: block;
        }
    `

    const activeStyle = {
        color: 'white',
        display: 'block',
        backgroundColor : 'black',
        borderRadius: '30% 30% 30% 30%'
    }

    function getFirstDayIndex(year, month) {
        let startYear = new Date(0).getFullYear();
        let diffYear = year-startYear;
        let totalDates = Math.floor(diffYear/4)*1461 + (diffYear%4)*365;
        
        if(year%4 == 0) dates[1] = 29;
        else dates[1] = 28;

        for(let i=0; i<month; i++) 
        {
            totalDates += dates[i];
        }
        
        return (totalDates+4)%7;
    }

    function makeWeekCalendar() {
        let nowTime = new Date();
        let nowYear = nowTime.getFullYear();
        let nowMonth = nowTime.getMonth();
        let nowMonthFirstDay = getFirstDayIndex(nowYear, nowMonth);
        let nowDay = (nowMonthFirstDay+nowTime.getDay())%7;
        let nowDate = nowTime.getDate();

        let day, date;
        for(let i=0; i<7; i++) {
            day = days[(i+nowDay)%7];
            date = (nowDate+i)%(dates[nowMonth]+1);

            if(date >= 0 && date <= 6)
                date += 1;

            week[day] = date;
        }
    }

    makeWeekCalendar()
    return (
        <Wrap>
            {Object.keys(week).map(function(key, index) {
                return (
                    <NavLink
                            activeStyle={activeStyle}
                            to={"/content/"+week[key]}
                            style={index == 0 ? {
                                border: "1px solid black",
                                borderRadius: "30% 30% 30% 30%"
                            } : {}}
                    >
                        <SubWrap>
                        
                            <span>{key}</span>
                            <span>{week[key]}</span>
                        </SubWrap>
                    </NavLink>
                )
            })}
        </Wrap>
    )
}

export default WeekCalendar;
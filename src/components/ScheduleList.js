import React from 'react';
import Schedule from './Schedule';

const ScheduleList = ({match}) => {
    const schedules = [
        {
            termStart : "11/20(금)",
            termEnd   : "12/27(일)",
            title     : "책과 함께 만드는 달콤한 커피 메이트",
            subTitle  : "Food Theme 11.Coffee 셀프쿠킹",
            category  : "쿠킹 라이브러리",
            imgUrl    : '80aa7a17d60246c0901bcb2de3f9e7ec.jpg',
            way       : "예매"
        },
        {
            termStart : "11/16(월)",
            termEnd   : "12/09(수)",
            title     : "챔피언 옆에 챔피언",
            subTitle  : "Food Theme 11. Coffee 클래스",
            category  : "쿠킹 라이브러리",
            imgUrl    : "fd241303df7846919bd2e2737dd2de23.jpg",
            way       : "예매"
        }
    ]
    return (
        <div>
            {schedules.map(schedule => (
                <Schedule key={schedule.title} schedule={schedule} />
            ))}
        </div>
    )
}

export default ScheduleList;
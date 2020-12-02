import React from 'react';
import NoticeContent from './NoticeContent';

const Notice = () => {
    const Contents = [
        {
            "title" : "12월 6일 휴관 안내드립니다.",
            "category" : "Vinyl&Plastic",
            "date" : "2020.11.23",
            "content" : "2020. 12. 06 (일) 내부 행사 진행으로 현대카드 바이닐앤플라스틱 휴관 하오니 양해 부탁 드립니다.",
        },
        {
            "title" : "코로나19로 인한 Space 단축 운영 안내 드립니다.",
            "date" : "2020.11.23",
            "content" : `수도권 코로나19 확산에 따라 현대카드 Space 운영 시간이 단축되오니 이ㅛㅇ에 참고하여 주시기 바랍니다. 
            -단축 운영 기간: 2020.11.24(화) ~ 별도 고지 시까지
            -설/추석 명절ㅈ 연휴 휴관
            -대상 공간 : 현대카드 Space
            (DESIGN/TRAVEL/MUSIC/COOKING LIBRARY, VINYL & PLASTIC)
            
            각 Space별 프로그램 진행 여부는 홈페이지 또는 문의 전화를 통해 확인하여 주시기 바랍니다.`
        }
    ]
    return (
        <div>
            {Contents.map(Content => (
                <NoticeContent Content={Content} />
            ))}
        </div>
    )
}

export default Notice;
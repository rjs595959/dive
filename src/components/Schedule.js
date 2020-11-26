import React from 'react';

import styled from 'styled-components';

const Schedule = ({schedule}) => {
    const Wrap = styled.div`
        display: flex;
        vertical-align: top;
        margin-bottom: 10px;
        justify-content: space-between;

        & > div:first-child {

        }

        & > div:last-child {
            & > img {
                width: 100px;
                height: 100px;
            }
        }

        & p {
            padding-left: 10px;
            padding-bottom: 10px;
            font-size: 15px;
        }

        & p:first-child, & p:last-child {
            font-size: 10px;
        }
    `

    return (
        <Wrap>
             <div>
                <p>{schedule.termStart+" ~ "+schedule.termEnd}</p>
                <p>{schedule.title}</p>
                <p>{schedule.subTitle}</p>
                <p><span>{schedule.category}</span> | <span>{schedule.way}</span></p>
            </div>
            <div>
                <img src={process.env.PUBLIC_URL + "/images/" + schedule.imgUrl} />
            </div>
        </Wrap>
       
    )
}

export default Schedule;
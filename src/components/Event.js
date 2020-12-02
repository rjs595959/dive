import React from 'react';
import styled from 'styled-components';

const Event = () => {
    const Wrap = styled.div`
        width: 100%;
        position: relative;
        & > div:first-child {
            & > img {
                width: 100%;
            }
        }
        & > div:last-child {
            position: absolute;
            top: 0;
            left: 0;
            & > p {
                color: white;
                padding: 10px 10px;
            }
            & > p:first-child {
                font-weight: bold;
            }
            & > p:last-child {
                font-size: 12px;
            }
        }
    `
    return (
        <Wrap>
            <div>
                <img src={process.env.PUBLIC_URL+"/Images/"+"20879605d3f740f2a3bd9d13e745129d.jpg"} />
            </div>
            <div>
                <p>
                   # 밥카챌린지 (ft. 배민현대카드) 
                </p>
                <p>
                    배민 쿠폰 3만원 혜택의 기회
                </p>
            </div>
        
        </Wrap>
    )
}

export default Event;
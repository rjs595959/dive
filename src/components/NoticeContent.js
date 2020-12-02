import React, {useState} from 'react';
import styled from 'styled-components';

const NoticeContent = ({Content}) => {
    const Wrap = styled.div`
        & > div:first-child {
            display: inline-block;
        }
        & > div:last-child {
            display: inline-block;
            float: right;
        }
    `
    const Title = styled.span`
        padding-bottom: 10px;
    `

    const [clicked, setClicked] = useState(false);
    return (
        <Wrap>
            <div>
                <Title>{Content.title}</Title>
            </div>
            <div>
                <span onClick={() => {setClicked(!clicked)}}>-</span>
            </div>
        </Wrap>
    )
}

export default NoticeContent;
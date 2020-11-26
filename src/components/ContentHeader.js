import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
//style
import styled from 'styled-components';

const ContentHeader = (props) => {
    const Header = styled.div`
        width: 100%;
        display : flex;
        margin: 10px auto;
        padding-bottom: 5px;
        justify-content: space-between;
        border-bottom: 1px solid gray;

        & > span:first-child {
            font-size: 25px;
        }
        & > span:last-child {
            line-height: 30px;
            font-size: 15px;
        }
    `

    return (
        <Header>
            <span>{props.title}</span>
            <span>
                <Link to='/'>전체 보기</Link>
            </span>
        </Header>
    )
}
export default ContentHeader;
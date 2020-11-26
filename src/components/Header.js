import React, {useState} from 'react';
import Gnb from './Gnb';

import styled from 'styled-components';

const Header = () => {
    const Wrap = styled.div`
        width: 100%;
        position: relative;
        height: 80px;
        margin-bottom: 15px;
    `
    const Logo =  styled.div`
        display: inline-block;
        font-size : 50px;
        font-weight: bold;
        padding: 10px 10px;
        vertical-align: top;
    `
    return (
        <Wrap>
            <Logo>DIVE</Logo>
            <Gnb />
        </Wrap>
    )
}

export default Header;
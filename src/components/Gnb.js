import React, {useState} from 'react';
import { Route, Link } from 'react-router-dom';
import MenuList from './MenuList';

import styled from 'styled-components';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';


const Gnb = () => {
    const menus = [    
        {
            subMenu : [],
            title : "What's on"
        },
        {
            subMenu : [
                'DESIGN LIBRARY',
                'TRAVEL LIBRARY',
                'MUSIC LIBRARY',
                'COOKING LIBRARY',
                'UNDERSTAGE',
                'VINYL & PLASTIC',
                'STORAGE'
            ],
            title : 'Space'
        },
        {
            subMenu : [
                'SUPER CONCERT',
                'CURTURE PROJECT',
                'DAVINCI MOTEL',
                'OVER THE RECORD'
            ],
            title : 'Culture'
        },
        {
            subMenu : [],
            title : 'Post'
        }
    ];

    const [showMenu, setShowMenu] = useState(false);

    const Wrap = styled.div`
        top: 0;
        right: 0;
        width: 200px; 
        display: block;
        position: absolute;
        text-align: right;
        z-index: 1000;
        background-color: white;
    `

    const Menus = styled.ul`
        text-align: left;
        padding-left: 20px;
        
    `
    const iconBar = {
        fontSize : '40px',
        margin: '15px 15px'
    }

    return (
        <Wrap style={showMenu ? {'border-left' : '1px solid black'} : {}}>
            <Link to='/Search' style={{color: 'black'}}>
                <AiOutlineSearch style={iconBar}/>
            </Link>
            <AiOutlineMenu onClick={()=>setShowMenu(!showMenu)} style={iconBar}/>
            {showMenu ? <Menus>
                {menus.map(menu => (
                    <MenuList subMenus={menu['subMenu']} title={menu['title']} />
                ))}
            </Menus> : ''}
        </Wrap>
    )
}

export default Gnb;
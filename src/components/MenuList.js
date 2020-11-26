import React, {useState} from 'react';
import styled from 'styled-components';

const MenuList = (props) => {
    const Wrap = styled.div`
        width: 145px;
        & > span {
            font-size : 20px;
            line-height: 60px;
        }
    `
    const SubMenus = styled.ul`
        line-height: 40px;
    `

    return (
        <Wrap>
            <span>{props.title}</span>
            <SubMenus>
                {props.subMenus.map(subMenu => ( 
                <li>
                    {subMenu}
                </li>
            ))}
            </SubMenus>
            
        </Wrap>
    )
}

export default MenuList;
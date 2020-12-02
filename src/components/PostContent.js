import React from 'react';
import styled from 'styled-components';

const PostContent = ({Content}) => {
    const Wrap = styled.div` 
        display: flex;
        flex-direction: column-reverse;
        
        & > p:first-child {
            font-size: 15px;
            font-weight: bold;
        }

        & > p:last-child {
            font-size: 10px;
        }
    `
    return (
        <Wrap>
            <p>{Content.title.split('\n').map(text => (
                <span>{text}<br/></span>
            ))}</p>
            <p>{Content.category}</p>
        </Wrap>
    )
}

export default PostContent;
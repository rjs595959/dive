import React from 'react';
import styled from 'styled-components';

const PostContent = ({Content}) => {
    const Wrap = styled.div` 
        display: flex;
        position: relative;
        flex-direction: column-reverse;
        
        & > span {
            display: block;
            & > a > img {
                width: 100%;
                height: 100%;
            }
        }
        
        & > div {
            position: absolute;
            bottom: 15px;
            left: 30px;

            & > p:first-child {
                font-size: 12px;
                color: white;
                padding-bottom: 10px;
            }

            & > p:last-child {
                color: white;
                font-size: 15px;
                font-weight: bold;
                line-height: 20px;
            }
        }
    `
    return (
        <Wrap>
            <span>
                <a href="#">
                    <img src={process.env.PUBLIC_URL + "/images/" + Content.imgUrl} />
                </a>
            </span>
            <div>
                <p>{Content.category}</p>
                <p>{Content.title.split('\n').map(text => (
                    <span>{text}<br/></span>
                ))}</p>
            </div>
        </Wrap>
    )
}

export default PostContent;
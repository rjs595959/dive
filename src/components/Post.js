import React from 'react';
import PostContent from './PostContent';

import styled from 'styled-components';

const Post = () => {
    const Wrap = styled.div`
        width: 100%;
        overflow: hidden;
        display: flex;
        
        & > div {
            width: 50%;
            margin: 1px;
            border: 1px solid black;
            box-sizing: border-box;
            border: 1px solid black;
        }
    `

    const Contents = [
        {
            title : "서울의 정취,\n사직터널 그집",
            category : "여행",
            imgUrl : "dacc1c030de0457a889c2b29858c74d3.jpg"
        },
        {
            title : "자유로운\n사진가",
            category : "디자인,아트",
            imgUrl : "7ae57b7c75bc4e7abb73a05a060616aa.jpg"
        }
    ]

    return (
        <Wrap>
            {Contents.map(Content => (
                <PostContent Content={Content} />
            ))}
        </Wrap>
    )
}

export default Post;
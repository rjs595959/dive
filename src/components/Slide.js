import React from 'react';

// style
import styled from 'styled-components';
const Slide = ({slide}) => {
    const titleList = slide.title.split('\n');
    const Wrap = styled.div`
        width: 100%;
        height: 500px;
        background-repeat : no-repeat;
        background-image: url(${process.env.PUBLIC_URL + slide.imgUrl});
        background-size: contain;
    `
    const Title = styled.div`
        width: 73%;
        font-size: 40px;
        font-weight: bold;
        line-height: 60px;
        padding: 20px 20px; 
    `
    const SubTitle = styled.div`
        margin-left: 25px;
        font-weight: bold;
        display: inline;
        border-bottom: 3px solid black;
    `
    return (
        <Wrap>
            <Title>
                {titleList.map(title => (
                    <p>{title}</p>
                ))}
            </Title>
            <SubTitle>{slide.subTitle}</SubTitle>
        </Wrap>
    );
}

export default Slide;
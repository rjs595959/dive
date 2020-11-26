import React from 'react';
import Slide from './Slide';

const SlideList = () => {
    const slides = [
        {
            key : 1,
            title : `바로 써먹는\n 프로들의\n 실전 특강`,
            subTitle : "오버 더 레코드 개코편",
            imgUrl : "/images/163876609a7b411285f33a582c2bb41b.jpg"
        }
    ]

    return (
        <div style={{width: "100%", height: "470px"}}>
            {slides.map(slide => (
                <Slide key={slide['key']} slide={slide} />
            ))}
        </div>
    )
}

export default SlideList;
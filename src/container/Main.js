import React from 'react';
import Header from '../components/Header';
import SlideList from '../components/SlideList';
import Contents from '../components/Contents';
import Footer from '../components/Footer';

// style
import styled from 'styled-components';

const Main = () => {
    const Wrap = styled.div`
        width: 100%;
    `
    
    return (
        <Wrap>
            <Header />
            <SlideList />
            <Contents />
            <Footer />
        </Wrap>
    )
}

export default Main;
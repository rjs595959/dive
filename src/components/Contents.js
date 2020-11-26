import React from 'react';
import ContentHeader from './ContentHeader';
import Whatson from './Whatson';
import Post from './Post';
import Event from './Event';
import Notice from './Notice';

import styled from 'styled-components';

const Contents = () => {
    const contents = {
        "What's on" : <Whatson />,
        "Post" : <Post />,
        "Event" : <Event />,
        "Notice" : <Notice />
    }

    const Wrap = styled.div`
        width: 90%;
        margin: 10px auto;
    `

    return (
        <div>
            {Object.keys(contents).map((key) => (
                <Wrap>
                    <ContentHeader title={key} />
                    {contents[key]}
                </Wrap>
            ))}
        </div>
    )
}
export default Contents;
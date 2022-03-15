import React from 'react'
import styled from 'styled-components';

const Announcement = () => {
    return (
        <Container>
            Super Deal! free Shipping on Orders Over $50
        </Container>
    )
}

export default Announcement;

const Container = styled.div`
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: teal;
    color: white;
`

import React from 'react'
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';


const ProductList = () => {


    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Dresses</Title>
            <FilterContainer >
                <Filter>
                    <FilterText>
                        Filter Products:
                    </FilterText>
                    <Select>
                        <Option>
                            Color
                        </Option>
                        <Option>
                            Black
                        </Option>
                        <Option>
                            Red
                        </Option>
                        <Option>
                            Blue
                        </Option>
                        <Option>
                            Yellow
                        </Option>
                        <Option>
                            Green
                        </Option>
                    </Select>
                    <Select>
                        <Option>
                            XS
                        </Option>
                        <Option>
                            S
                        </Option>
                        <Option>
                            M
                        </Option>
                        <Option>
                            L
                        </Option>
                        <Option>
                            XL
                        </Option>
                    </Select>
                </Filter>
                <FilterText>
                    Sort Products:
                </FilterText>
                <Select>
                    <Option selected>
                        Newest
                    </Option>
                    <Option>
                        Price (asc)
                    </Option>
                    <Option>
                        Price (desc)
                    </Option>
                </Select>
            </FilterContainer>
            <Products />
            <NewsLetter />
            <Footer />
        </Container>
    )
}

export default ProductList;

const Container = styled.div`
    
`;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
`;

const Select = styled.select`
    
`;

const Option = styled.option`
    
`;

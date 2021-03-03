import styled from 'styled-components';


export const PageContainer = styled.div`
    display: flex;
    @media screen and (max-width: 576px) {
        flex-direction: column;
        text-align: center;
    }
`

export const ContentContainer = styled.div`
    width: 100%;
    flex: 1 0 0;
`
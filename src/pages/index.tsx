import React from 'react'
import styled from 'styled-components';

import Header from '../components/header/Header'
import Intro from '../components/intro/Intro'
import Layout from '../components/layout/Layout'
import Projects from '../components/projects/Projects'


export const PageContainer = styled.div`
        display: flex;
        flex-direction: column;
`

export const ContentContainer = styled.div`
    width: 100%;
    flex: 1 0 0;
`

const IndexPage: React.FC = () => {
    return <Layout>
        <PageContainer>
            <Header></Header>
            <ContentContainer>
                <Intro/>
                <Projects/>
            </ContentContainer>
        </PageContainer>
    </Layout>    
}

export default IndexPage;

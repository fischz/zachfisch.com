import React from 'react'
import Header from '../components/header/Header'
import Intro from '../components/intro/Intro'
import Layout from '../components/layout/Layout'
import Projects from '../components/projects/Projects'
import { ContentContainer, PageContainer } from './index.styles'



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

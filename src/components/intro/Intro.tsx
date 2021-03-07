import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Section } from '../../shared.styles'
import { CodeBlock, IntroContainer, IntroImage, IntroText, Row } from './intro.styles'
import { Fade } from 'react-reveal'
import SyntaxHighlighter from 'react-syntax-highlighter';
import stackoverflowdark from 'react-syntax-highlighter/dist/esm/styles/hljs/stackoverflow-dark.js'


const Intro: React.FC = () => {
    return <Section>
        <IntroContainer>
            <Row>
                <IntroImage><Fade><img src='\heroimage.png' width='350px' height='auto'/></Fade></IntroImage>
            {/*<CodeBlock>
            <Fade>
            <SyntaxHighlighter language='typescript' style={stackoverflowdark} customStyle={{margin: 0, borderRadius: '1rem', padding:'1rem'}}>
                {`const IndexPage: React.FC = () => {
    return <Layout>
        <PageContainer>
            <Header></Header>
            <ContentContainer>
                <Intro/>
                <Projects/>
            </ContentContainer>
        </PageContainer>
    </Layout>|    
}

export default IndexPage;`}
            </SyntaxHighlighter>
            </Fade>
</CodeBlock>*/}
            <Fade up>
            <IntroText>
                <h3>Hi</h3>
                <div>
                    <p>
                    I'm Zach, a full-stack web developer based in Toronto.
                    </p>
                    <p>
                    I have experience developing applications with React, Node, .Net, and vanilla Javascript.
                    </p>
                    <p>
                    I also design and build responsive static websites with Gatsby.
                    </p>
                    <p>
                    Get in contact with me at <a href='mailto:fischzac@gmail.com'>fischzac@gmail.com</a>
                    </p>
                </div>
            </IntroText>
            </Fade>
            </Row>
        </IntroContainer>
    </Section>
}

export default Intro;
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Section } from '../../shared.styles'
import { IntroContainer } from './intro.styles'
import { Fade } from 'react-reveal'
import Header from '../header/Header'


const Intro: React.FC = () => {
    return <Section>
        <IntroContainer>
            <Fade down>
            <div>
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
            </div>
            </Fade>
        </IntroContainer>
    </Section>
}

export default Intro;
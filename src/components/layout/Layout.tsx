import React from "react"
import { Helmet } from "react-helmet"
import { DefaultTheme, GlobalStyle } from "../../shared.styles"
import {ThemeProvider} from 'styled-components'

interface Props {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({children}) => {
    return <div>
            
            <Helmet>
                <meta charSet="utf-8" />
                <title>Zach Fisch - Web Development</title>
                <link rel="canonical" href="https://www.zachfisch.com" />
                <link rel="stylesheet" href='/hamburgers.min.css'/>
            </Helmet>
            <ThemeProvider theme={DefaultTheme}>
                <GlobalStyle/>
                {children}
            </ThemeProvider>
        </div>
}

export default Layout;
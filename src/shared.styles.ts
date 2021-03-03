import styled, { createGlobalStyle, keyframes } from 'styled-components'

export const DefaultTheme = {
    colors: {
        text: 'rgba(0,0,0,0.9)',
        background: '#FFFFFF',
        foreground: 'rgba(0,0,0,0.1)',
        accent: 'rgb(204, 0, 102)'
    },
    padding: {
        xs: '0.25rem',
        s: '0.5rem',
        m: '1rem',
        l: '2rem'
    },
    margin: {
        s: '0.5rem',
        m: '1rem',
        l: '2rem'
    }
}

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }

    html, body {
        margin: 0;
        padding: 0;
        color: ${props => props.theme.colors.text};
        font-family: Roboto, Helvetica, sans-serif;//'Inconsolata', monospace;//-apple-system, Roboto, sans-serif, serif;
    }

    a, a:visited, a:active, a:link {
        font-weight: bold;
        text-decoration: none;
        cursor: pointer;
        color: ${props => props.theme.colors.text};
        transition: color 256ms ease;
    }

    a:hover {
        color: ${props => props.theme.colors.accent};
    }
`

export const Section = styled.div`
    width: '100%';
`

export const FadeInAnimationDown = keyframes`
    from {
        transform: translateY(-15vh);
        opacity: 0;
    }

    to {
        transform: translateY(0vh);
        opacity: 1;
    }
`
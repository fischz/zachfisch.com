import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    background: ${props => props.theme.colors.foreground};
    padding: ${props => props.theme.padding.m};
`
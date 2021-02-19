import {css, Global } from '@emotion/react'
import styled from '@emotion/styled'


export const globalStyles = (
    <Global
        styles={css`
            body {
                padding: 0;
                margin: 0;
                background: url('/bg.jpg') center no-repeat;
                background-size: cover;
                min-height: 100%;
                font-family: Helvetica, Arial, sans-serif;
                font-size: 24px;
            }
            html {
                min-height: 100%;
                padding: 0;
                margin: 0;
                overflow: hidden;
            }
        `}
    />
)


export const Playground = styled.div`
    width: 950px;
    height: 5000px;
    min-height: 100vh;
    position: absolute;
    left:50%;
    margin-left: -475px;
    display: flex;
`

export const Star = styled.div`
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('/star.png') center no-repeat;
    background-size: contain;
    font-size: 50px;
    position: absolute;
    cursor: pointer;
`

import styled from 'styled-components'

export const AuthFormWrapper = styled.section`
    background-image: ${({ bgImg }) => `url('${bgImg ?? ''}')`};
    background-color: #cccccc;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    padding-top: 10rem;

    .authHeader {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;

        h1 {
            color: white;
            font-size: 2.5rem;
        }
    }

    form {
        background-color: rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(2px);
        border: 1px solid lightgray;
        border-radius: 5px;
        margin: auto;
        width: 50vw;
        padding: 1rem;
    }
`

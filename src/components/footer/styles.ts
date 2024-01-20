import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    max-height: 40vh;
    padding: 1rem;
    color: #FFF;
    background-color: var(--var-blue);

    p {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 1.2rem;

        a {
           font-size: 1.4rem;
           color: #FFF;
    
           &:hover {
               color: #90ee90;
           }
        }
    }
`;


export const Content = styled.main`
    display: flex;
    justify-content: start;
    line-height: 2rem;
    font-size: 1.4rem;
    font-weight: bold;
    padding: 0 0 1rem 0;

    h2 {
        width: 100%;
        line-height: 2.5rem;
        font-size: 2.5rem;
    }

    div {
        margin-right: 2rem;

        li{
            font-weight: normal;
            transition:  filter 0.2s;

            &:hover {
                filter: opacity(80%);
            }
        }
    }

    @media(max-width: 500px) {
        h2 {
            display: none;
        }
    }
`;

export const SocialMedias = styled.div`
    display: flex;
    font-size: 2.5rem;
    gap: 1rem;

    svg {
        cursor: pointer;

        &:hover {
            color: #90ee90;
        }
    }
`;
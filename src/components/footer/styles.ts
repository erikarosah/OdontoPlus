import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    height: 40vh;
    padding: 1rem;
    color: #FFF;
    background-color: var(--var-blue);
`;


export const Content = styled.main`
    display: flex;
    
    h2{
        font-size: 2.5rem;
        gap: 1rem;
    }

    div {
        width: 100%;
        display: flex;
        justify-content: end;
        line-height: 2rem;
        font-size: 1.4rem;
        font-weight: bold;

        li{
            font-weight: normal;
        }
    }
`;

export const SocialMedias = styled.div`
    display: flex;
    font-size: 2.5rem;
    gap: 1rem;

    svg {
        cursor: pointer;
    }
`;

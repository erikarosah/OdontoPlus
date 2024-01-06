import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
`;

export const Content = styled.main`
    display: flex;
    flex-wrap: wrap;
    column-gap: 1rem;
    justify-content: center;
    min-height: 140vh;
`;

export const Images = styled.div`
    width: 35rem;
    height: 23rem;

    display: flex;
    flex-direction: column;

    cursor: pointer;

    img {
        width: 100%;
        min-height: 100%;
        transition: transform 0.2s;

        &:hover {
            transform: scale(1.01);
        }
    }
`;

export const About = styled.div`
    h2 {
        font-size: 2.2rem;
        color: var(--var-blue);
    }

    p {
        font-size: 1.3rem;
        font-weight: normal;
    }
`;
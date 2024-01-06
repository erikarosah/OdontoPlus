import styled from 'styled-components';

export const Container = styled.section`
    width: 98%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
`;

export const Content = styled.main`
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(3, 1fr);

    @media(max-width: 1024px) {
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: 688px) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const Images = styled.div`
    width: 35rem;
    height: auto;
    display: flex;
    flex-direction: column;

    cursor: pointer;

    img {
        width: 35rem;
        height: 23rem;
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
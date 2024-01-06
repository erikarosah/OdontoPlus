import styled from 'styled-components';

export const Container = styled.div`
    height: 10vh;
    padding: 1rem 2.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #F2F2F2;
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    color: var(--var-blue);

    display: flex;
    align-items: center;
    gap: 1rem;
    
    img {
        width: 40px;
    }
`;

export const Content = styled.ul`
    display: flex;
    align-items: center;
    gap: 1.5rem;

    @media(max-width: 768px) {
        display: none;
    }
`;

export const Items = styled.li`
    font-size: 1.5rem;
    font-weight: normal;
    color: #7A7A7A;
    transition: color 0.5s;

   &:hover{
        color: var(--var-blue)
    }
`;

export const Menu = styled.div`
    display: none;
    
    svg {
        font-size: 2.5rem;
        cursor: pointer;
        fill: var(--var-blue);
    }

    @media(max-width: 768px) {
        display: flex;
    }
`;
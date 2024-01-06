import styled from 'styled-components';

export const Container = styled.div`
    height: 15vh;
    padding: 1rem 2.5rem;
    display: flex;
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
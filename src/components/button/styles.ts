import styled from 'styled-components';

export const Container = styled.button`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    color: #FFF;
    border-radius: 5px;

    background-color: var(--var-blue);
    transition: transform 0.2s;

    img {
        width: 20px;
        border-radius: 50%;
    }

    &:hover {
        transform: scale(1.01);
    }
`;

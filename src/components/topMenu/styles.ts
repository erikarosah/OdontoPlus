import styled from 'styled-components';

export const Container = styled.div<{ openmenu: boolean }>`
    width: 100vw;   
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    position: fixed;
    z-index: 1;
    transition: top 0.5s ease-in;
    top: ${(props => props.openmenu ? '0' : '-100px')};;
    background-color: var(--var-blue);

    ul {
        width: 80%;
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 1rem;

        li {
            line-height: 2rem;
            font-size: 1.2rem;
            color: #FFF;

            &:nth-child(1) {
                color: #FFF;
                font-weight: bold;
            }
        }
    }
`;

export const CloseMenu = styled.div`
    align-self: flex-start;
    padding: 0.5rem;
    font-size: 1.4rem;
    cursor: pointer;
`;

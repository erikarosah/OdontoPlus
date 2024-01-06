import styled from 'styled-components';

export const Container = styled.div<{openmenu:boolean}>`
    width: 100vw;   
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    position: fixed;
    z-index: 1;
    transition: top 0.5s ease-in;
    top: ${(props => props.openmenu? '0' : '-100px')};;
    background-color: #F2F2F2;

    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        li {
            line-height: 2rem;
            font-size: 1.4rem;
            color: var(--var-text);

            transition: color 0.5s;

            &:hover{
                color: var(--var-blue)
            }
        }
    }
`;

export const CloseMenu = styled.div`
    font-size: 1.4rem;
    cursor: pointer;
`;

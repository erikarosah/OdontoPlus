import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    height: auto;
`;

export const Content = styled.div`
   max-height: 85vh;
   position: relative;

   p {
    position: absolute;
    bottom: 0;
    left: 2rem;
    z-index: 1;
    
    font-size: 50px;
    font-weight: bold;
    letter-spacing: 1px;
    
    color: var(--var-blue);

    &::before {
        content: "";
        height: 3px;
        width: 15%;
        display: inline-block;
        background-color: yellow;
        
        position: absolute;
        margin-top: -10px;
    }
}
`;

export const Banner = styled.img`
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    filter: contrast(55%);
`;
import styled from 'styled-components';

export const Container = styled.button`
   position: fixed;
   bottom: 30px;
   right: 30px;
   background: transparent;

   img {
    width: 40px;
    border-radius: 50%;
    animation: go-top 1s infinite alternate;

    @keyframes go-top {
        from {
        transform: translateY(0);
        }
        to {
        transform: translateY(20px);
        }
    }
    
}
`;

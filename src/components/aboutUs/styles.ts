import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    height: auto;
    padding: 1rem 0;

    background-color: #F0F8FF;
`;

export const Content = styled.main`
  display: flex;
  gap: 2.5rem;

  img:first-child {
    width: auto;
    max-width: 80vh;

    @media(max-width: 1024px) {
      display: none;
    }
  }

  @media(max-width: 1024px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const Image = styled.img`
  display: none;

  @media(max-width: 1024px) {
      display: flex;
    }
`;


export const About = styled.div`
  width: 50%;
  padding: 2.5rem;
  text-align: justify;

  p {
    font-size: 1.8rem;
    color: var(--var-text);
  }

  span {
    font-weight: 300;
    font-size: 1.8rem;
    line-height: 3rem;
    color: var(--var-text);
  
    @media(max-width: 428px) {
      font-size: 1.6rem;   
    }
  }

  @media(max-width: 1024px) {
    width: 90%;
  }
`;

export const Title = styled.h2`
  color: var(--var-blue);
  font-size: 3.5rem;
`;
import styled from 'styled-components';

export const Container = styled.section`
margin-top: 2rem;
  height: auto;
  padding: 1rem;

  background-color: #F0F8FF;

  @media(max-width: 428px) {
    width: 100%;
    padding: 0;
  }
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
      padding: 1rem 0;
    }
`;


export const About = styled.div`
  width: 50%;
  padding: 2.5rem;
  text-align: justify;

  p {
    width: 100%;
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

  @media(max-width: 428px) {
    padding: 2rem;
  }

  @media(max-width: 1024px) {
    width: 90%;
  }
`;

export const Title = styled.h2`
  color: var(--var-blue);
  font-size: 3.5rem;
`;
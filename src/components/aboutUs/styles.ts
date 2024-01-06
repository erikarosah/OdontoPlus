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

  img {
    width: auto;
    max-width: 80vh;
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
    font-weight: 200;
    font-size: 1.8rem;
    line-height: 3rem;
    color: var(--var-text);
  }
`;

export const Title = styled.h2`
  color: var(--var-blue);
  font-size: 3.5rem;
`;
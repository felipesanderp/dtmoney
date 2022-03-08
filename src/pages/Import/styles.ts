import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 736px;
  margin: -11rem auto;
  padding: 40px 20px;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 36px;
  line-height: 54px;
  color: #fff;
  text-align: center;
`;

export const ImportFileContainer = styled.section`
  background: #fff;
  margin-top: 40px;
  border-radius: 5px;
  padding: 64px;
`;

export const Footer = styled.section`
  margin-top: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    display: flex;
    align-items: center;
    font-size: 12px;
    line-height: 18px;
    color: #969cb3;
    img {
      margin-right: 5px;
    }
  }

  button {
    font-size: 1rem;
    background: var(--blue-light);
    color: #fff;
    border: 0;
    padding: 0 5rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: background-color 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
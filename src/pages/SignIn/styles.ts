import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  a {
    color: var(--blue);
    margin-top: 2rem;
    text-decoration: none;

    display: flex;
    align-items: center;

    transition: filter 2s;

    &:hover {
      filter: brightness(0.9);
      text-decoration: underline;
    }
    svg {
      margin-right: 1rem;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1120px;

  display: flex;
  justify-content: center;

  form {
    display: flex;
    align-items: center;
    flex-direction: column;

    width: 100%;
    max-width: 360px;

    h1 {
      color: var(--text-title);
      font-size: 2rem;
      margin-bottom: 2rem;
    }

    button[type="submit"] {
      width: 100%;
      padding: 0 1.5rem;
      height: 4rem;
      background: var(--green);
      color: #fff;
      border-radius: 0.25rem;
      border: 0;
      font-size: 1rem;
      font-weight: 600;
      margin-top: 1.5rem;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;
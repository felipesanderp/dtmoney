import styled from 'styled-components';

export const Container =styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  color: var(--text-title);

  svg {
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 2rem;
    font-weight: 500;
    line-height: 3rem;
  }
`;
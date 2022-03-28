import styled from 'styled-components'

export const Container = styled.header`
  background: var(--blue);
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .header-items {
    display: flex;
    align-items: center;
    justify-content: center;

    nav {
      margin-left: 2rem;

      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;
        & + a {
          margin-left: 32px;
        }
        &:hover {
          opacity: 0.6;
        }
      }
    }
  }

  button {
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    & + button {
      margin-left: 2rem;
    }
  }
`
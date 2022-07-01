import styled from 'styled-components'

export const Container = styled.div`
    width: 480px;
    height: 220px;
    display: flex;
    overflow: hidden;
    background: #fff;
    border-radius: 0.5rem;
    margin: 0.75rem 1.25rem;
`

export const Avatar = styled.div`
  flex: 2;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    margin: 0px;
    opacity: 1;
    transition: opacity 0.5s ease 0s;
    object-position: center center;
    object-fit: cover;
  }
`

export const Content = styled.div`
    flex: 3;
    position: relative;
    padding: 0.75rem;
    color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

 a {
      text-decoration: none;
      color: #333333;
    }

  h2 {
    color: #333333;
  }

  span {
    color: #333333;
  }

  strong {
    color: #333333;
  }
`
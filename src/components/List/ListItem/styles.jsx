import styled from 'styled-components'
export const Lists = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(25% - 30px);
  padding: 10px;
  border: 1px solid #ddd;
  align-items: center;

  h2 {
    font-size: 1.25rem;
    line-height: 1.5em;
  }

  img {
    max-width: 100%;
    width: 100%;
    height: 100%;
    &.no-img {
      background-color: #ddd;
    }
  }
  
  .img-box {
    width: 150px;
    height: 200px;
  }
`

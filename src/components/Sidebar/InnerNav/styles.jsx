import styled from 'styled-components'
export const InnerNavs = styled.nav`
  margin-top: 10px;
  margin-left: 10px;
  ul {
    display: flex;
    flex-direction: column;
  }
  li {
    & + li {
      margin-top: 5px;
    }
  }
`

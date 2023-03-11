import styled from 'styled-components'

export const SideNav = styled.nav`
  border-right: 1px solid #ddd;
  width: 250px;
  height: calc(100% - 100px);
  padding: 15px 10px;
  ul {
    display: flex;
    flex-direction: column;
  }
  li {
    & + li {
      margin-top: 15px;
    }
  }
`

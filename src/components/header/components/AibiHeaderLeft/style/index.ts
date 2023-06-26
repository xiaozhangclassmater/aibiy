
import styled from 'styled-components'
const AbiHeaderLeftWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  .logo{
    display: flex;
    font-size: 18px;
    font-weight: 800;
    align-items: center;
    user-select: none;
    cursor: ${props => props.theme.SmallHand};
    color: ${({ theme }) => theme.primaryColor};
    .text{
      margin-left: 5px;
    }
  }
`

export default AbiHeaderLeftWrapper
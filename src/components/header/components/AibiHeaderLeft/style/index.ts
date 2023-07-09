
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
  .back{
    display: flex;
    align-items: center;
    justify-content: center;
    .anticon{
      width: 15px !important;
      height: 15px !important;
    }
    .back-text{
      display: block;
    }
  }
`

export default AbiHeaderLeftWrapper
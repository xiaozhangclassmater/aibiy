import { styled } from "styled-components";

const SectionCategaryRgWapper = styled.div`
  transition: all .5s;
  .sectionCategaryRg-wapper{
    width: 100%;
    height: 100%;
    .card-enter {
      opacity: 1;
    }
    .card-enter-active {
      transition: opacity 0.6s ;
      z-index: 1;
    }
    .card-exit {
      opacity: 0;
    }
    .card-exit-active {
      opacity: 1;
      transition: opacity 800ms;
    }
  }

`
const ScRgSkeletonWapper = styled.div`
  margin-top: 15px;
  .sksleton-card-wapper{
    display: flex;
  }
`
export { ScRgSkeletonWapper, SectionCategaryRgWapper };


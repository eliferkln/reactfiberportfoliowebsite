import styled from 'styled-components';
import { media } from 'utils/media';
import { s1 } from 'utils/sharedStyled';

export const MyWrapper = styled.div`
  position: fixed;
  z-index: 20;
  bottom: 0;
  left: 0;
  mix-blend-mode: difference;
  color: #fff;
  transform-origin: bottom left;
  transform: rotate(-90deg) translateY(calc(100% + 16px)) translateX(15px);

  ${media.tabletPortrait} {
    transform: none;
    bottom: 560px;
    left: 400px;
  }
`;
export const HeadWrapper = styled.div`
flex-direction: row;
display:flex;

  position: relative;
  ${s1}
  }
`;

export const HeadButton = styled.div`

color:#fff;
background-color:#6beb3854;
border-radius: 6px;
padding:15px;
margin:10px;
width:180px;
height:55px;
text-align: center;
backdrop-filter: blur(2px);
display: inline-block;
  position: relative;
  ${s1}
  }
`;
export const MyLink = styled.span`
  display: inline-block;
  position: relative;
  ${s1}
`;

export const AuthorLink = styled.span`
  display: inline-block;
  font-weight: 600;
  position: relative;
  margin-right: 5px;
`;

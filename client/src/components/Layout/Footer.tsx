import styled from 'styled-components';
import logo from '../../images/logo_wh.png';

const StyledFooter = styled.footer`
  width: 100%;
  padding: 35px 80px;
  font-size: 0.875rem;
  line-height: 1.35em;
  color: #7b7b7b;
  background: #292929;
  .ft-hd {
    display: flex;
    margin-bottom: 15px;
    gap: 35px;
  }
  .ft-link {
    display: flex;
    gap: 35px;
    font-size: 0.9375rem;
    color: #bbb;
  }
`;
const LogoImage = styled.img`
  height: 22px;
  opacity: 0.4;
  margin-top: -2px;
`;

const LinkStyle = styled.a`
  color: #7b7b7b;
  text-decoration: none;
`;

function Footer() {
  const footerLink = document.querySelectorAll('.blank-link');
  footerLink?.forEach((footerLink) => {
    if (footerLink instanceof HTMLAnchorElement) {
      footerLink.href = '#';
    }
  });

  return (
    <StyledFooter>
      <div className="ft-hd">
        <LogoImage src={logo} alt="logo" />
        <ul className="ft-link">
          <li>
            <LinkStyle className="blank-link">스터디하자 소개</LinkStyle>
          </li>
          <li>
            <LinkStyle className="blank-link">개인정보보호</LinkStyle>
          </li>
          <li>
            <LinkStyle className="blank-link">서비스약관</LinkStyle>
          </li>
        </ul>
      </div>
      <p>경기 김포시 고촌읍 아라육로152번길 100</p>
      <p>customer@admin.com</p>
    </StyledFooter>
  );
}

export default Footer;

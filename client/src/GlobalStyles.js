import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset}
// 전역 스타일 추가
@font-face {
  font-family: "Pretendard-Bold";
  src: url("./fonts/Pretendard-Bold.ttf");
}

@font-face {
  font-family: "Pretendard-ExtraBold";
  src: url("./fonts/Pretendard-ExtraBold.ttf");
}


@font-face {
  font-family: "Pretendard-Light";
  src: url("./fonts/Pretendard-Light.ttf");
}

@font-face {
  font-family: "Pretendard-Medium";
  src: url("./fonts/Pretendard-Medium.ttf");
}

@font-face {
  font-family: "Pretendard-Regular";
  src: url("./fonts/Pretendard-Regular.ttf");
}

.app {
  font-family: "Pretendard-Bold";
}
`;

export default GlobalStyles;

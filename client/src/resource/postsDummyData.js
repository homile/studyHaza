const posts = [
  {
    num: 1,
    title: "제목입니다.",
    haveHeadCount: 1, // 구해진 인원
    totalHeadCount: 10, // 구할 총 인원
    devType: "frontend", // 모집 구분
    onOff: "on", // 진행방법
    devStack: ["React", "JS", "HTML"], // 기술 스택
    nickName: "chapchap",
    content: "게시물 전체내용",
    startDate: "2022.08.15", // 스터디 시작 일시
    dateCreated: "new Date()", // korea time
  },
  {
    num: 2,
    title: "제목입니다.",
    haveHeadCount: 1,
    totalHeadCount: 10, 
    devType: "frontend",
    onOff: "on", 
    devStack: ["JAVA", "Spring", "Express"], 
    nickName: "chapchap",
    content: "게시물 전체내용",
    startDate: "2022.08.15", 
    dateCreated: "new Date()", 
  },
];

export default posts;

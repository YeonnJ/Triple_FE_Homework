# [ 트리플 2022 공개채용 ] 프론트엔드 과제

<h3>😃 정연재의 Triple-HomeWork FE 저장소 😃</h3>

<img src="https://user-images.githubusercontent.com/89297158/177262375-5c9ee5a0-43e4-4ec2-91ba-4d5a8d11f13a.gif" width="800"/>

### 프로젝트 실행 방법

```bash
git clone https://github.com/YeonnJ/Triple_FE_Homework.git
npm install
npm run start
```

<br />

## 🔖 기술스택 및 주요 라이브러리 & 사용한 이유

<p float="left" >
  <img src="https://user-images.githubusercontent.com/43779313/135983684-6de2d329-481b-4f3a-b3f1-30e15db4b217.png" alt="React" height="100"/>
  <img src="https://user-images.githubusercontent.com/43779313/135983313-e320aee3-b618-460f-b422-8d14f8f5ddd4.png" alt="TypeScript" height="100"/>

  <img src="https://images.velog.io/images/uiseop/post/b50d8119-29ba-410d-8949-56b3d4b29c47/atom.png" alt="StyledComponents" height="100" />
</p>

- `React`

  - 가상DOM으로 인한 빠른 속도🏃‍♀️ - 변경이 필요한 최소한의 변경사항만 실제DOM에 반영해, 앱의 효율성과 속도 개선
    <br />

  - 컴포넌트 기반의 화면 구성 - 컴포넌트의 역할과 기능에 따라 따로 관리하기 용이 - 반복되는 부분을 공통적인 부분으로 분리하여 재사용성을 높여줌
    <br />

- `TypeScript`
  - 디버깅 과정에서 미리 오류를 발견하여 미래에 발생할 버그를 줄이고 예방이가능
  - 타입지정을 함으로써 좀 더 명확한 개발이 가능

<br />

- `Styled-Components`

  - CSS-in-JS는 Javascript 환경을 최대한 활용가능
    <br/>

  - JavaScript와 CSS 사이의 상수와 함수를 쉽게 공유 - React에서는 props를 활용한 조건부 스타일링이 가능
    <br />

  - 현재 사용중인 스타일만 DOM에 포함
    <br />

### 📝 Projects Board

 <img src="https://user-images.githubusercontent.com/89297158/177271811-eef3a0bc-faf2-42ac-a0aa-0a13c6f66e40.png" alt="TypeScript" />

#### [Triple_FE_Homework 칸반보드 바로가기](https://github.com/YeonnJ/Triple_FE_Homework/projects/1)

<br/>

## 📝 Git Flow

- **master**
  - 메인 브랜치
  - 배포용 브랜치
- **dev**
  - 최종 개발 브랜치
  - 각 기능 브랜치들이 하나로 병합되는 지점
- **feature**
  - 기능 개발 브랜치
  - 실제 브랜치명은 각 구현 기능명

<br />

## 📝 Commit Message

- Feat: 특정 기능을 하는 코드를 구현 했을 때
- Fix: 버그 픽스나 핫 픽스 이슈를 완료하였을 때
- Refactor: 리팩토링을 진행했을 때
- Docs: README.md와 같은 단순 문서 작업

</br>

## 📌 Trouble Shooting

### `.eslintrc.js 충돌 문제`

- 빌드 과정에서 eslint 플러그인(react/jsx-runtime) 충돌 문제 발생.
  <img src="https://user-images.githubusercontent.com/89297158/177355431-29d951c9-8b63-4e10-a026-df84f656fc96.png"/>

<br/>

- 해결책을 도출한 과정은 에러 문구에서 봤듯이 eslint react 쪽에서 문제가 있는 것 같았고, 리액트로 관련된 eslint 플러그인이 eslint-plugin-react가 존재하기 때문에 이를 설치함으로써 문제 해결 함
  <img src="https://user-images.githubusercontent.com/89297158/177355962-43caddd4-8639-4e5c-8078-0358280581f5.png"/>
  </br>

### 참고

- [Ease 애니메이션 차트 시트](https://easings.net/ko)
- [Ease 함수 자바스크립트 구현](https://spicyyoghurt.com/tools/easing-functions)
- [transition ease in-out 차이점](https://chinsun9.github.io/2021/06/18/transition-timing-function/)

</br>

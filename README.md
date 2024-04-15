# 1. 리액트 프로젝트 초기세팅

## 1.1 리액트 프로젝트 생성

- `npx create-react-app ./`
- `yarn create react-app ./`

## 1.2 파일 정리

- .gitignore 추가해줄 것 - 외부 api
  `.env`
- src 폴더 안에 test 파일들 삭제
- index.js 파일 정리
- index.css 파일 수정

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline-style: none;
}
ul,
li {
  list-style: none;
}
a {
  color: #000000;
  text-decoration: none;
}
img {
  vertical-align: middle;
  border: 0;
}
html {
  font-size: 10px;
}
body {
  font-family: "Pretendard-Regular", sans-serif;
  font-size: 1rem;
  line-height: 1.25;
  letter-spacing: -0.23px;
  word-break: keep-all;
  color: #000000;
}
```

## 1.3. React 개발 편의 도구 설치

- React 크롬 개발 도구 [DevTools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=ko)
- VSCode React Plugin (ES7+ React/Redux/React-Native snippets) 설치

## 1.4. normalize.css 설정(css초기화)

- `yarn add normalize.css`
  : package.json 에서 설치 확인 가능
- src/index.js 에서 index.css 위에 import
  : `import "normalize.css";` (alt+shift+o 자동정렬단축기)

## scss, emotion.js 설치

- npm의 경우 yarn 을 npm i 로 변경해서 설치
- `yarn add sass`
- `yarn add @emotion/react`
- `yarn add @emotion/styled`
  : package.json 에서 설치 확인 가능

## ESLint, prettier 설정

- .prettierrc.json 파일 생성

```json
{
  "singleQuote": false,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80, // 글자수 넘어가면 줄내림
  "arrowParens": "avoid",
  "endOfLine": "auto"
}
```

- ESLint 초기화 및 설정

  - `npm i eslint --dev` (npm 경우)
  - `npx eslint --init`
  - `yarn add eslint --dev` (yarn 경우)
  - `yarn eslint --init`

```txt
To check syntax and find problems 선택
JavaScript modules (import/export) 선택
React 선택
Does your project use TypeScript? No 선택
Where does your code run? Browser 선택
What format do you want your config file to be in? JavaScript 선택
Would you like to install them now? Yes 선택
Which package manager do you want to use? npm 선택
```

- ESLint 와 Prettier 를 연결하여 ESLint 설정

  - `npm i eslint-config-prettier --save-dev`
  - `yarn add eslint-config-prettier --save-dev`

: .eslintrc.js 생성되는데 .prettierrc.json 와 충돌 방지하기 위해 설정

- .eslintrc.js 에서
  : extends 변경

```js
extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier" // prettier 충돌방지
],
```

: rules 변경

```js
rules: {
  "react/react-in-jsx-scope": "off",
  "react/prop-types": "off",
  "no-unused-vars": "off",
},
```

- 바벨에 의한 경고 제외

  - `npm install @babel/plugin-proposal-private-property-in-object --dev`
  - `yarn add @babel/plugin-proposal-private-property-in-object --dev`
    : package.json 에서 설치 확인 가능

- App.js 초기화

```js
function App() {
  return (
    <div>
      <h1>리액트 베이직</h1>
    </div>
  );
}

export default App;
```

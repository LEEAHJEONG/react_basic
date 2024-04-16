# 3. useState()

## 3.1. staate

- 리액트에서는 state는 컴포넌트 내부에서 바뀔 수 있는 값을 의미한다.
- props는 상위 컴포넌트(부모)가 설정하는 값
- 컴포넌트 자신은 해당 props를 읽기 전용으로만 사용할 수 있다.
- props 를 변경하려면 부모 컴포넌트에서 변경해야 한다.
- 하위 컴포넌트에서 전달 받은 props 값은 직접 바꿀 수 없는데, state는 컴포넌트 자체적으로 지닌 값으로 컴포넌트 내부에서 값을 업데이트 할 수 있다.

### 3.1.1. useState()

- 리액트 16.8 이후 버전에서 사용 가능하다.
- 이전 버전에서는 Class state를 사용했다.
- Hooks 종류 중 하나가 useState이다.

#### 3.1.1.1. 배열구조분해할당

- 배열구조분해할당

```js
const array = [10, 20];
// const one = array[0];
// const two = array[1];

// 배열구조분해할당
const [one, two] = array;
console.log(one);
console.log(two);
```

#### 3.1.1.2. useState 사용

```js
import React, { useState } from "react";

const Main = () => {
  // useState 함수의 인수 또는 인자 (argument)에
  // 초기값 useState(초기값)
  // useState 함수를 호출하면 배열이 반환되는데
  // 배열의 첫 번째 요소는 현재 상태 [message]
  // 배열의 두 번째 요소는 상태를 바꿔주는 세터(setter)함수 setMessage

  // message = 초기값;
  // setMessage = () => {}

  const [message, setMessage] = useState("");

  const onClickEnter = () => {
    setMessage("안녕하세요???");
  };

  const onClickLeave = () => {
    setMessage("안녕히가세요!!!");
  };
  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1>{message}</h1>
    </div>
  );
};

export default Main;
```

#### 3.1.1.3. 한 컴포넌트에서 useState 여러번 사용하기

```js
import React, { useState } from "react";

const Main = () => {
  // 메세지 상태
  const [message, setMessage] = useState("");
  //메세지 컬러 상태
  const [color, setColor] = useState("black");

  const onClickEnter = () => {
    setMessage("안녕하세요???");
    setColor("red");
  };

  const onClickLeave = () => {
    setMessage("안녕히가세요!!!");
    setColor("blue");
  };
  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
    </div>
  );
};

export default Main;
```

## 3.2. state를 사용할 떄 주의사항

- state 값을 바꾸어야 할 때는 setState 혹은 useState를 통해 전달받은 세터함수를 사용해야 한다.
- 배열이나 객체를 업데이트 해야 할 때

```js
const array = [
  { id: 1, value: true },
  { id: 2, value: true },
  { id: 3, value: true },
  { id: 4, value: true },
  { id: 5, value: false },
  { id: 6, value: true },
];

let nextArray = array.concat({ id: 7 }); // 새 항목 추가
nextArray = nextArray.filter(item => item.id !== 2); // id가 2인 항목 제거
// id가 1인 항목에 value를 false로 변경 설정
nextArray = nextArray.map(item =>
  item.id === 1 ? { ...item, value: false } : item,
);

console.log(array);
console.log(nextArray);
```

## 3.3. 정리를 하자면

- props는 상위 컴포넌트가 설정
- state는 컴포넌트 자체적으로 지닌 값으로 컴포넌트 내부에서 값을 업데이트

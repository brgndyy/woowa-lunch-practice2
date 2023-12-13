# 점심 메뉴 추천

# 🚀 기능 요구 사항

> 기능 구현 완료시 기능 목록 옆에 '⭕️' 표시가 되어있습니다.

## 1. 점심 메뉴 추천 시작 메세지를 띄운다.

### 🔍 입, 출력 예시

```
점심 메뉴 추천을 시작합니다.
```

## 2. 코치의 이름을 입력받는다.

### 🔍 입, 출력 예시

```
코치의 이름을 입력해 주세요. (, 로 구분)
토미,제임스,포코
```

### ❗️ 예외사항 ❗️

1. 코치는 최대 2명, 5명까지 입력 받을수 있다.

2. 각 코치의 이름은 최소 2글자, 최대 4글자이다.

3. 코치 이름 중간에 공백이 들어가면 안된다.

<!-- ### ❗️ 알아두어야 할 점 ❗️ -->

## 3. 각 코치가 못먹는 음식을 입력 받는다.

### 🔍 입, 출력 예시

```
토미(이)가 못 먹는 메뉴를 입력해 주세요.
우동,스시

제임스(이)가 못 먹는 메뉴를 입력해 주세요.
뇨끼,월남쌈

포코(이)가 못 먹는 메뉴를 입력해 주세요.
마파두부,고추잡채
```

### ❗️ 예외사항 ❗️

1. 각 코치가 못먹는 음식은 최소 0개, 최대 2개이다.

### ❗️ 알아두어야 할 점 ❗️

1. "," 로 구분한다.

## 4. 각 코치에게 추천 음식을 추천해준다.

### 🔍 입, 출력 예시

```
메뉴 추천 결과입니다.
[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]
[ 카테고리 | 한식 | 한식 | 일식 | 중식 | 아시안 ]
[ 토미 | 쌈밥 | 김치찌개 | 미소시루 | 짜장면 | 팟타이 ]
[ 제임스 | 된장찌개 | 비빔밥 | 가츠동 | 토마토 달걀볶음 | 파인애플 볶음밥 ]
[ 포코 | 된장찌개 | 불고기 | 하이라이스 | 탕수육 | 나시고렝 ]

추천을 완료했습니다.
```

### ❗️ 알아두어야 할 점 ❗️

1. 월요일에 추천할 카테고리를 무작위로 정한다.
2. 그 후에 각 코치가 먹을 메뉴를 추천한다.
3. 화, 수, 목, 금에 관해서 1번, 2번 과정을 반복한다.

4. 한 주에 같은 카테고리는 최대 2회까지 가능하다.

5. 각 코치에게 한주에 중복되지 않은 메뉴를 추천해야한다.

---

## ❗️ 총체적인 예외사항 ❗️

1. 사용자가 잘못된 값을 입력한 경우 throw문을 사용해 예외를 발생시키고, "[ERROR]"로 시작하는 에러 메시지를 출력 후 **그 부분**부터 입력을 다시 받는다.

### 🔍 입, 출력 예시

# 🎯 프로그래밍 요구 사항

- <details>
    <summary> .nvmrc 에 노드 버전 기재</summary>

  `v18.17.1`
  </details>

- <details>
    <summary>eslint 룰 적용</summary>

  `npm install --save-dev eslint eslint-plugin-jsdoc@latest eslint-plugin-jest@latest eslint-plugin-prettier@latest eslint-config-prettier @babel/eslint-parser` 로 설치하고 .eslintrc.cjs 파일을 만들어서 룰 적용
  </details>

- <details>
    <summary> indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다</summary>

  eslint 에 `max-depth': ['error', 2]` 룰 추가
  </details>

- <details>
  <summary>JavaScript 코드 컨벤션을 지키면서 프로그래밍 한다</summary>

  `npm install --save-dev eslint-config-airbnb` 설치 후 .eslintrc.cjs 에서 `extends : ['airbnb']` 추가

- <details>
    <summary> 함수(또는 메서드)의 길이가 15라인을 넘어가지 않도록 구현한다.</summary>

  eslintrc.cjs에 `'max-lines-per-function': ['error', 15],` 룰 추가
  </details>

- <details>
    <summary> 사용자가 잘못된 값을 입력할 경우 throw문을 사용해 예외를 발생시킨다. 그런 다음, "[ERROR]"로 시작하는 에러 메시지를 출력하고 해당 부분부터 입력을 다시 받는다. </summary>

  `asyncFnHandlerWithError` 라는 유틸 함수 생성 후 각 입력 받는 함수마다 실행
  </details>

# ✏️ 과제 진행 요구 사항

- <details>
    <summary>기능을 구현하기 전 docs/README.md에 구현할 기능 목록을 정리해 추가한다.</summary>

  README.md 파일 작성 중
  </details>

# - 📂 폴더 구조

<details>
<summary>자세히 보기</summary>

```
// 여기에 폴더 구조 삽입
```

</details>

# 🔍 테스트 커버리지

jest의 커버리지 기능으로 테스트 실행 결과를 확인합니다.

```
npx jest --coverage
```

<details>
<summary>테스트 결과 보기</summary>

```
// 여기에 커버리지 삽입
```

</details>

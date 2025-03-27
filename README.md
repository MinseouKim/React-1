# 202130103 김민서

<<<<<<< HEAD
## 2025.03.27 4주차(실습 시작)

### 오늘의 학습 내용

1. 컴포넌트를 만들고 중첩하는 방법
2. 마크업과 스타일을 추가하는 방법
3. 데이터를 표시하는 방법
4. 조건과 리스트를 렌더링하는 방법

### Brain Stoming

- MyApp이라는 함수형 component를 생성
- 먼저 무엇부터 해야할지 생각해 보세요

### 3. JSX로 마크업 작성하기

1. 어떤 디렉토리에 파일을 만들지?
2. 파일 이름은 뭐라고 할지?
3. 함수는 어떻게 구상할지?

- 구현 해보기

### Component의 생성 및 nesting(중첩)

- export default와 export의 차이
  Named Exports
- 하나의 파일안에 여러개의 component가 있을때 사용(component의 정확한 이름을 명시 해야함)
  Default Exports

### 3. JSX로 마크업 작성하기

- JSX는 HTML보다 더욱 엄격한 문법을 적용
- JSX에서는 싱글 태그라도 닫아야 한다.(/br)
- <></> 빈 래퍼와 같이 공유되는 부모로 감싸야함

### 5. 데이터 표시하기

- 중괄호를 사용하면 코드에서 일부 변수를 삽입하여 사용자에게 표시할 수 있도록 자바스크립트로 "이스케이프 백" 할수 있습니다.<br>
- JSX 어트리뷰트에서 따옴표 대신 중괄호를 사용하여 “자바스크립트로 이스케이프(Escape Into JavaScript)” 할 수도 있습니다.

### 6. 조건부 랜더링

- React에서 조건문을 작성하는 데에는 특별한 문법이 필요 없습니다. 일반적인 자바스크립트 코드를 작성할 때 사용하는 것과 동일한 방법을 사용합니다.

## 2025.03.20 3주차

## React 의존성 관리

=======
## 2025.03.20 3주차

## React 의존성 관리
>>>>>>> 16a45a503fda738a4bd95ef955f74e647e4d1792
- src/ - 프로젝트 주요 코드가 위치하는 디렉토리
- src/App.js - 메인 component로 필요한 sub component를 모아서 관리, 출력을 위해서 index.js로 전달됨
- src/App.css - App.js에 적용되는 스타일을 정의하는 스타일 파일
- src/index.js - React 앱의 진입점으로 최종 랜더링 되는 곳
- src/index.css - 전역 스타일을 정의하는 스타일 파일
<<<<<<< HEAD

## 의존성 관리와 pakage.json

- pakage.json 패키지의 의존성을 관리하는 파일이다.

## node module의 재설치

1. node modules 폴더와 packge-lock.json 파일 삭제하기 (bash : rm -rf node modules pakage-lock.json)
2. npm 패키지의 임시 저장소인 cashe를 초기화 하기

- force 옵션으로 강제 삭제 (npm cacje clean --force)
  \*\* 일반적으로 캐시 정리x, 단 의존성 문제가 계속 된다면 실행하는 것이 좋다.

3. 패키지 재설치
   (npm install)

## 3장

- React는 component 단위로 개발하여 레고를 조립하듯이 앱을 완성
- React component가 어떻게 웹페이지로 바뀌는지 중점으로 보는 것이 좋다.

### 3.2

### Component를 사용한 유저 인터페이스 생성

- JSX는 React를 통해 대중화된 JavaScript 확장문법이다.

### 필요한 곳에 상호작용 기능 추가

- React component는 데이터를 수신
- 사용자의 입력을 받아 새로운 데이터를 component에 전달

### 5. full-stack App 개발을 도와주는 React Framewrork

- React로 전체 앱을 빌드하려면 Next.js 또는 Remix와 같은 full-stack React Framework을 사용하느 것이 좋습니다.

### 6. 모든 플랫폼에서 최고의 성능을 발휘하는 React

- 웹 앱과 네이티브 앱을 모두 구축할 수 있다.
- 웹의 본질
  - 서버에서 데이터를 가져오는 동안에도 HTML을 스트리밍을 시작할수 있다.
  - JavaScript 코드가 로드되기 전에 콘텐츠르르 점진적으로 채울수 있다.
  - 클라이언트 측에서는 표준 웹 API를 사용해서, 랜더링 도중에도 UI를 반응하도록 할 수 있습니다.

=======
## 의존성 관리와 pakage.json
- pakage.json 패키지의 의존성을 관리하는 파일이다.
## node module의 재설치
1. node modules 폴더와 packge-lock.json 파일 삭제하기 (bash : rm -rf node modules pakage-lock.json)
2. npm 패키지의 임시 저장소인 cashe를 초기화 하기
- force 옵션으로 강제 삭제 (npm cacje clean --force)
** 일반적으로 캐시 정리x, 단 의존성 문제가 계속 된다면 실행하는 것이 좋다.
3. 패키지 재설치
(npm install)

## 3장
- React는 component 단위로 개발하여 레고를 조립하듯이 앱을 완성
- React component가 어떻게 웹페이지로 바뀌는지 중점으로 보는 것이 좋다.
### 3.2
### Component를 사용한 유저 인터페이스 생성
- JSX는 React를 통해 대중화된 JavaScript 확장문법이다.
### 필요한 곳에 상호작용 기능 추가
- React component는 데이터를 수신
- 사용자의 입력을 받아 새로운 데이터를 component에 전달
### 5. full-stack App 개발을 도와주는 React Framewrork
- React로 전체 앱을 빌드하려면 Next.js 또는 Remix와 같은 full-stack React Framework을 사용하느 것이 좋습니다.
### 6. 모든 플랫폼에서 최고의 성능을 발휘하는 React
- 웹 앱과 네이티브 앱을 모두 구축할 수 있다.
- 웹의 본질
    - 서버에서 데이터를 가져오는 동안에도 HTML을 스트리밍을 시작할수 있다.
    - JavaScript 코드가 로드되기 전에 콘텐츠르르 점진적으로 채울수 있다.
    - 클라이언트 측에서는 표준 웹 API를 사용해서, 랜더링 도중에도 UI를 반응하도록 할 수 있습니다.
>>>>>>> 16a45a503fda738a4bd95ef955f74e647e4d1792
# 2025.03.13(2주차)

### Node.js 어디에 활용 되는가?

- 웹 서버 (Next.js,Express.js)-> REST API
- 실시간 애플리케이션 (Soket.io)-> 채팅 실시간 알림 스트리밍
- 서버리스(Serverless)환경 -> AWS Lambda 같은 FaaS

### node.js가 인기를 끄는 이유

- JavaScriipt 풀스택 개발 :프론트 엔드와 벡엔드를 같은 언어로 개발 가능

장점 : npm의 방대한 생태계를 활용가능
실시간 데이터 처리(WebSocket)가 강력함

버전 관리는 빠르면 1년에 한번 늦으면 1년에서 1년 반정도 걸린다고 한다.React도
2024년 12월 5일에 19.0.0출시되고 변경 없다

React 공식 사이트에서 기초로 사용
(컴퍼넌트를 많이 사용함 java의 클래스 처럼)
<<<<<<< HEAD
react는 codesandbox.io에서 이해를 도와줌,
=======
react는 codesandbox.io에서 이해를 도와줌, 
>>>>>>> 16a45a503fda738a4bd95ef955f74e647e4d1792

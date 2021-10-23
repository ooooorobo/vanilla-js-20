# Form Validator

클라이언트에서 폼의 유효성을 검사합니다. required, length, email, password match 검증을 구현합니다.

## 이 프로젝트에서 배우는 것

- 폼 UI를 구성하기
- 특정 상황에 에러 메시지를 표현하기
- 배열로 된 매개변수를 받는 함수 구현하기
- 정규 표현식을 사용해서 이메일의 패턴이 올바른지 검증하기 

## 이 프로젝트에서 배운 것

- `visibility hidden`과 `display none`의 차이
    - 둘 다 화면에 표시되지 않음
    - `visibility: hidden`: 요소가 영역을 차지함
        - `opacity: 0`으로 비슷한 효과를 낼 수 있음
    - `display: none`: 요소가 영역을 차지하지 않음
    - 둘 사이에 성능 이슈가 있었던 것 같아서 찾아보니 [스택 오버플로우](https://stackoverflow.com/questions/11757016/performance-differences-between-visibilityhidden-and-displaynone) 글을 찾을 수 있었다.
- js에서 element의 class 이름을 바꾸어 성공/취소와 같은 UI 요소를 변경할 수 있다.
- `event.preventDefault()`: html 요소에서 이벤트가 일어날 때 발생하는 기본 동작을 취소한다.
    - 예시: form 요소의 submit 이벤트는 입력된 input 필드의 값을 action 속성에 지정된 url로 전송하면서 페이지 이동이 일어난다.   
- `event.stopPropagation()`: 부모 요소로 이벤트가 전파되는 것을 막는다.
    - div 요소 하위의 button에서만 click 이벤트가 발생하기를 원할 경우 `stopPropagation()` 처리해 주어야 한다.
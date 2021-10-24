# My Landing Page

메뉴 사이드 바와 모달이 있는 간단한 웹 페이지 제작

## 이 프로젝트에서 배우는 것

- 사이드 바를 토글 버튼을 통해 표시하거나 숨기기
- 모달을 표시하고 닫기
- transition과 @keyframes animation을 통해 효과 주기

## 이 프로젝트에서 배운 것

- `@keyframe animation`의 사용 방법
    - 애니메이션이 적용될 요소의 className에 애니메이션 이름을 지정
    - `@keyframe [animation name]`을 만들고, from - to로 변경사항을 지정
    - 이 프로젝트에서 modal을 껐다 켜는 것을 `display: none`을 사용하여 구현했는데,
    그 이유는 animation이 요소가 생성될 때 실행되고, `display: none`을 사용하면
    DOM 트리에 요소를 아예 포함시키지 않기 때문이다.
    - 퍼센티지를 사용해 중간 단계를 지정할 수도 있다. [링크](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Animations/Using_CSS_animations)

# Movie Seat Booking

관람할 영화와 좌석을 선택하면 결제 예상 금액을 알려줍니다.

## 이 프로젝트에서 배우는 것

- 사용자의 선택에 따라 값을 다르게 표시합니다.
- 사용자가 선택한 내용을 localStorage에 저장하고, 페이지가 로드될 때 값을 가져와서 저장된 값으로 UI를 초기화합니다.

## 이 프로젝트에서 배운 것

- number 타입으로 바꿀 때 값 앞에 `+`만 붙여도 number 타입으로 바꿀 수 있다.
- 최초 실행 시 UI를 초기화하기 위해서, html에 삽입된 자바스크립트 파일의 전역에서 필요한 작업을 수행하면 된다.
- `element.classList.toggle(token)`을 사용해 클래스 이름을 넣고 뺄 수 있다. 선택/해제 등의 작업에서 사용하면 좋다.
- CSS의 `perspective` 속성을 사용해서 원근감을 줄 수 있다. 값을 주는 것은 투영점을 명시하는 것으로, 이 프로젝트에서는 기울어진 div 요소를 강조하기 위해 쓰였다.
    - 기울어진 요소가 있을 때, 그 요소 상위에 perspective 속성을 주지 않으면 기울어진 효과가 잘 나지 않았다. 

## 더 해보고 싶은 것

- [이 드리블](https://dribbble.com/shots/3628370-Movie-Seat-Booking) 을 참고한 디자인이라고 되어 있는데, 원래 디자인처럼 스크린을 휘게
할 수 있게 해볼 수 있을 것 같다.
    - Canvas 사용하기 / [three.js](https://threejs.org/) 사용하기 / [border-radius 트릭](https://stackoverflow.com/questions/45641830/creating-a-curved-div-using-only-css)
- 좌석 사이 이동 통로 위치를 CSS로 지정하는 방식인데, 어딘가에서 복도 위치를 입력을 받아서 지정하도록 할 수 있을 것 같다. 
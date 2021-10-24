# Hangman

행멘 게임 웹 사이트입니다.

## 이 프로젝트에서 배우는 것

- `keyDown` 이벤트로 입력된 키 처리하기
- SVG의 선과 원을 이용하여 그림 그리기
- 알림 메시지와 모달을 띄우기

## 이 프로젝트에서 배운 것

- SVG
    - Scalable Vector Graphic
    - 2차원 벡터 그래픽 이미지, XML로 작성됨
    - HTML이 텍스트로 인식
    - 일종의 캔버스
- 강의에서 `e.keyCode`를 사용했으나, deprecated 되었다고 함. [자세한 내용](https://devstephen.medium.com/keyboardevent-key-for-cross-browser-key-press-check-61dbad0a067a)
- `e.key`를 사용하기 위해서 문자를 ascii 코드로 바꾸어서 사용했다. `String.prototype.charCodeAt(index)` -> 문자열의 index에 위치한 문자를 ASCII 코드로 변환함 

# Custom Video Player

HTML5 Video 요소와 Video 요소에서 제공하는 [자바스크립트 API](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs)를 사용해 커스텀 비디오 플레이어를
만듭니다.

## 이 프로젝트에서 배우는 것

- 비디오 바깥에서 실행/일시정지/중지 기능 사용하기
- 비디오 진행도를 표시하기
- 비디오 실행 시간을 분과 초로 나누어 표시하기

## 이 프로젝트에서 배운 것

- 실행 아이콘을 일시정지 아이콘으로 바꾸기 위해 `play.className` 속성을 사용했는데, 그러면 일시정지 아이콘으로 대체되는 것이 아니라 `::before`에
아이콘이 새로 생성되어 두 개의 아이콘이 표시되었습니다. 이 경우 `innerHTML` 속성 자체를 변경해 주어서 아이콘을 변경했습니다.
    - `toggleClass`로도 구현이 가능하다고 합니다. [(출처)](https://stackoverflow.com/a/42011830)
        ```$(this).find('i').toggleClass('fa-folder fa-folder-open');```

## 더 해보고 싶은 것

- 음량 조절 기능을 추가하기 (range + 음소거)
    - 음소거 해제 시 직전에 설정했던 음량 값으로 돌아가야 함
- 호버 시 영상 제목 보여주기 - 유튜브처럼
- 구간 북마크 기능 -> 어떤 버튼을 누르면 현재 실행 시점에 핀이 생기고, 그 핀을 누르면 그 구간으로 이동
- 총 영상 길이 보여주기

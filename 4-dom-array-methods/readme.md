# DOM Array Methods

회원의 보유액을 관리할 수 있는 웹을 만듭니다.

## 이 프로젝트에서 배우는 것

- Array 메소드 사용하기
    - `Array.prototype.map()`
    - `Array.prototype.forEach()`
    - `Array.prototype.sort()`
    - `Array.prototype.filter()`
    - `Array.prototype.reduce()`

## 이 프로젝트에서 배운 것

- `Array.prototype.map(callback(item, index, arr))`
    - 각 요소에 대하여 callback 함수를 실행하고, 이 결과값이 담긴 배열을 반환한다.
    - 원래의 배열은 변하지 않는다.
- `Array.prototype.forEach(compare(a, b))`
- `Array.prototype.sort()`
    - compare 함수의 결과에 따라서 배열을 정렬한다. compare 함수는 truthy/falsy 값을 반환한다.
    - 값이 거짓이면 정렬을 수행한다.
    - 원래 배열 내에서 정렬이 이루어진다. 배열을 반환하지 않는다.
    - 정렬은 non-undefined 값에 대해서만 수행된다. undefined 값은 배열의 맨 뒤로 정렬된다.
- `Array.prototype.filter(callback(item, index, arr))`
    - 각 요소에 대하여 callback 함수를 실행하고, 이 결과값이 담긴 배열을 반환한다.
    - callback 함수는 truthy/falsy 값을 반환한다. 참인 값만 결과 배열에 담긴다. 
- `Array.prototype.reduce(reducer(previousValue, currentValue, previousIndex, currentIndex, arr), beginIndex)`
    - 각 요소에 대하여 reducer 함수를 실행하고, reducer 함수는 하나의 결과값을 반환한다. 반환된 값은 다음 요소에서의 reducer의 previousValue로 전달된다.
    -  beginIndex 값으로 reduce()를 실행할 시작 인덱스를 지정할 수도 있다.

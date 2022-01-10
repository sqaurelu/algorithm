/*
* Quick sort(빠른 정렬)
* -> 분할 정복법(divide and conquer) 사용
*   - 분할: 배열을 pivot을 기준으로 두 부분으로 나눈다.
*         pivot 보다 작은 값 & pivot 보다 큰 값
*   - 정복: 각 부분을 순환적(Quick sort)으로 정렬
*   - 합병(merge): X
*
* -> 재귀(recursion)
*
* -> 과정
*   - 배열을 pivot을 기준으로 두 부분으로 나눈다.
*       -> 데이터가 n개면 n - 1 번의 비교 연산 O(n)
*   - 각 부분을 순환적(Quick sort)으로 정렬
*
* -> pivot 선택
*   - 데이터의 첫번째 값 or  마지막 값
*   - 데이터의 첫번째 값, 가운데 값, 마지막 값 중에서 중간 값
*   - 랜덤하게 선택
*
* -> 시간 복잡도
*     worst case: O(n^2) -> 이미 정렬된 데이터(마지막 or 첫번째 원소를 pivot으로 선택)
*           n - 1 비교 + n - 2 비교 + .... + 1 비교
*     best case: O(nlogn) -> 항상 절반으로 분할되는 경우
*
* ref
* - https://www.youtube.com/watch?v=hq4dpyuX4Uw
* - https://velog.io/@young_mason/dd
*  */

function partition(arr, left, right) {
  const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  // 마지막 데이터를 pivot 으로 설정
  const pivot = arr[right];

  // pivot 보다 작은 값들 중 마지막 값
  let idx = left - 1;
  for (let i = left; i < right; i++) {
    // pivot 보다 크거나 같으면 pass
    if (arr[i] >= pivot) continue;
    idx += 1;
    // A[idx]와 A[i] 자리 변경
    swap(arr, idx, i);
  }

  // pivot 값이랑 pivot 보다 큰 값들 중 첫번째 값과 자리 변경
  idx += 1; // pivot 보다 큰 값들 중 첫번째 값 위치
  swap(arr, right, idx);

  return idx;
}

function quickSort(arr, left, right) {
  if (left < right) {
    const pivotIdx = partition(arr, left, right);

    quickSort(arr, left, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, right);

    return arr;
  }
}

let A = [2, 6, 5, 1, 4, 3];
console.log(quickSort(A, 0, A.length - 1));

/*
* Merge sort(병합 정렬)
* -> 분할 정복법(divide and conquer) 사용
*   - 분할: 해결하고자 하는 문제를 동일한 크기의 작은 문제들로 분할
*   - 정복: 각각의 작은 문제를 순환적으로 해결
*   - 합병(merge): 작은 문제의 해를 합하여 원래 문제의 해를 구함.
*
* -> 재귀(recursion)
*
* -> 과정
*   - 데이터가 저장된 배열을 절반으로 분할
*   - 각각을 재귀적으로 정렬 -> O(log(n))
*   - 정렬된 두 개의 배열을 합쳐 전체를 정렬 -> O(n)
*
* -> 시간 복잡도: O(nlog(n))
* */

function merge(left, right) { // 왼쪽, 오른쪽 배열 병합
  let mergedArr = [];
  let leftIdx = 0, rightIdx = 0;

  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] <= right[rightIdx]) {
      mergedArr.push(left[leftIdx]);
      leftIdx += 1;
    } else {
      mergedArr.push(right[rightIdx]);
      rightIdx += 1;
    }
  }

  for (let i = leftIdx; i < left.length; i++) mergedArr.push(left[i]);
  for (let i = rightIdx; i < right.length; i++) mergedArr.push(right[i]);

  return mergedArr;
}

function mergesort(arr) {
  if (arr.length <= 1) return arr; // 배열의 길이가 1일 때까지 분할

  const mid = Math.floor(arr.length / 2); // 중간 지점 계산
  const left = mergesort(arr.slice(0, mid)); // 왼쪽 정렬
  const right = mergesort(arr.slice(mid)); // 오른쪽 정렬

  return merge(left, right); // 병합
}
// https://app.codility.com/programmers/trainings/4/array_inversion_count/

function mergesort(arr) {
  if (arr.length <= 1) return [arr, 0];

  const mid = Math.floor(arr.length / 2);
  const [leftMerged, leftCnt] = mergesort(arr.slice(0, mid));
  const [rightMerged, rightCnt] = mergesort(arr.slice(mid));

  const [mergedArr, cnt] = merge(leftMerged, rightMerged);

  return [mergedArr, cnt + leftCnt + rightCnt];
}

function  merge(left, right) {
  let mergedArr = [];
  let leftIdx = 0, rightIdx = 0;
  let cnt = 0;

  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] <= right[rightIdx]) {
      mergedArr.push(left[leftIdx]);
      leftIdx += 1;
    } else {
      mergedArr.push(right[rightIdx]);
      rightIdx += 1;
      cnt += left.length - leftIdx;
    }
  }

  for (let i = leftIdx; i < left.length; i++) mergedArr.push(left[i]);
  for (let i = rightIdx; i < right.length; i++) { mergedArr.push(right[i]);}

  return [mergedArr, cnt];
}

/*
* 현재 원소보다 인덱스가 크면서, 크기는 작은 원소 찾기
* P, Q가 인덱스 -> P < Q && A[P] > A[Q]인 경우 카운팅
*
* merge sort를 이용한다.
* merge 과정에서 오른쪽 배열의 원소보다 왼쪽 배열의 원소가 더 큰 경우
* 왼쪽 배열의 크기 만큼 카운팅
* ex1) left = [3], right = [1] 이면 3 > 1이니까 1을 더해준다. => left = [3], right = [], mergedArr = [1]
* ex2) left = [3, 4], right = [1, 2]이면 7 > 1이니까 2를 더해준다. => left = [3, 4], right = [2], mergedArr = [1]
* 3 > 2니까 2를 추가로 더해준다. => left = [3, 4], right = [], mergedArr = [1, 2]
* */
function solution(A) {
  let ans = mergesort(A)[1];
  return ans < 1000000000 ? ans : -1;
}

console.log(solution([5, 4, 3, 2, 1]));
/*
* Heap sort(힙 정렬)
* - 최악의 경우 시간 복잡도 O(nlogn)
* - 병합 정렬과는 달리 추가 배열 불필요
* - 이진 힙(binary heap) 자료구조를 사용
*
* Heap
* -> 1. complete binary tree이면서
*   - binary tree: 각각의 노드가 최대 2명의 자식을 가질 수 있다.
*   - full binary tree: 모든 레벨에 노드들이 꽉 차있는 형태
*   - complete binary tree: 마지막 레벨을 제외하면 꽉 차있고,
*     마지막 레벨에는 가장 오른쪽부터 연속된 몇 개의 노드가 비어있을 수 있다.
*     full binary tree는 complete binary tree이기도 하다.
*
* -> 2. heap property를 만족해야 한다.
*   - max heap property: 부모는 자식보다 크거나 같다.
*   - min heap property: 부모는 자식보다 작거나 같다.
*
* 힙은 일차원 배열로 표현 가능(원래는 트리 구조)
* - 루트 노드 = A[1]
* - A[i]의 부모 = A[i / 2]
* - A[i]의 왼쪽 자식 = A[2 * i]
* - A[i]의 오른쪽 자식 = A[(2 * i) + 1]
*
* 아래 조건을 만족할 때 힙을 만들기 위한 연산 가능 = MAX, MIN HEAPIFY
* - 트리의 전체 모양은 complete binary tree
* - 왼쪽, 오른쪽 subtree는 그 자체로 heap
* - 유일하게 루트만 heap property를 만족 안함.
*
* -> MAX-HEAPIFY
*   1. 루트의 자식들 중 더 큰 값을 루트와 교환
*   2. 루트와 자리를 바꾼 subtree를 다시 heap이 되기 위해 연산한다.
*     - 1번으로 돌아가 반복
*     - 루트가 자신의 자식보다 더 큰 경우 or 리프 노드가 되는 경우 연산 종료
*
*   - 시간 복잡도: O(h) = O(logn)-> h = tree height
*
* -> heap sort 과정 (주어진 배열 데이터를 complete binary tree라 봄)
*   1. complete binary tree를 heap으로 바꾼다.(정렬할 배열을 힙으로 만들기) -> heapify 연산
*     - 리프 노드가 아닌 노드 중 첫번째첫 노드부터 시작
*     - 시간 복잡도: O(n) => 러프하게 계산하면 O(nlogn)
*   2. 힙에서 최대값(루트)을 가장 마지막 값과 바꾼다.
*   3. 힙의 크기가 1 줄어든 것으로 간주한다.
*   4. 루트 노드에 대해서 Heapify(1) 한다.
*   5. 2~4번을 반복한다.
*
* - 시간 복잡도: O(nlogn)
*
* */

const A = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];

// max heapify하면 [16, 14, 10, 8, 7, 9, 3, 2, 4, 1]

// 배열을 heap으로 바꾸기
const maxHeapify = (arr, curNode, heapSize) => {
  const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  };

  // rootNode의 자식이 없는 경우 리턴
  if (curNode * 2 > heapSize) return;
  const leftChildren = curNode * 2;
  const rightChildren = (curNode * 2) + 1;

  let maxNode = -1;
  if (heapSize < rightChildren || arr[leftChildren - 1] > arr[rightChildren - 1]) maxNode = leftChildren;
  else maxNode = rightChildren;

  if (arr[curNode - 1] >= arr[maxNode - 1]) return;
  swap(arr, curNode - 1, maxNode - 1);
  maxHeapify(arr, maxNode, heapSize);
}

const maxHeap = (arr) => {
  const heapSize = arr.length;

  for (let i = Math.floor(heapSize / 2); i > 0; i--) { // 리프 노드를 가진 맨 마지막 노드부터 루트 노드까지 heapify
    // do max heapify(A, i)
    maxHeapify(arr, i, heapSize);
  }
  return arr;
}

const heapSort = (arr) => { // O(nlogn)
  // build max heap
  maxHeap(arr); // O(n)

  const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  };

  let heapSize = arr.length;
  for (let i = heapSize; i > 1; i--) { // -> n - 1 times
    swap(arr, 0, i - 1); // 루트 노드와 맨 마지막 노드 변경
    heapSize -= 1;
    maxHeapify(arr, 1, heapSize); // 루트 노드에 대해 heapify -> O(logn)
  }

  return arr;
}

console.log(maxHeap(A));
console.log(heapSort(A));
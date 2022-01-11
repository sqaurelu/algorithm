/*
* Priority Queue
* - max priority queue
*   -> insert(x): 새로운 원소 x 삽입
*   -> extract_max(): 최대값을 삭제하고 반환
*   -> max heap을 이용하여 최대 우선순위 큐를 구현
*
* */

// O(logn)
const enqueue = (arr, key) => { // arr = heap
  const heapSize = arr.length + 1;
  // 맨 마지막에 원소 추가
  arr.push(key);

  const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  };

  // curNode가 전체 트리의 루트 노드가 되거나, curNode의 부모 노드가 더 클때까지 자리 변경
  let curNode = heapSize; // 처음에는 마지막으로 추가된 원소
  while (curNode > 1 && arr[Math.floor(curNode / 2) - 1] < arr[curNode - 1]) {
    swap(arr, curNode - 1, Math.floor(curNode / 2) - 1);
    curNode = Math.floor(curNode / 2);
  }

  return arr;
}

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

// O(logn)
const dequeue = (arr) => {
  // 데이터의 최대값은 루트노드 => 배열 첫번째 값
  // 마지막 노드와 루트 노드 교환 & 마지막 노드 반환
  let heapSize = arr.length;

  if (heapSize < 1) return;

  const max = arr[0];
  arr[0] = arr[heapSize - 1]; // 마지막 노드를 루트 노드로 설정
  heapSize -= 1;
  maxHeapify(arr, 1, heapSize); // 루트노드에 대해 heapify

  console.log(arr);
  return max;
}

let A = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1];
A = enqueue(A, 11);
console.log(A);
const max = dequeue(A);
console.log(max);


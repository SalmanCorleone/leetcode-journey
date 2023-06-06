class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

class LinkedList {
  constructor(arr) {
    this.head = makeLinkedListFromArray(arr);
  }

  print = () => {
    let node = this.head;
    let str = "";
    while (node) {
      str += node.val + (!!node.next ? " -> " : "");
      node = node.next;
    }
    console.log(str);
  };

  getArray = () => {
    let res = [];
    let node = this.head;
    while (node) {
      res = [...res, node.val];
      node = node.next;
    }
    return res;
  };
}

const makeLinkedListFromArray = (array) => {
  let head, ptr;
  for (let i = 0; i < array.length; i++) {
    let node = new ListNode(array[i]);
    if (!head) {
      head = node;
      ptr = node;
    }
    ptr.next = node;
    ptr = node;
  }
  return head;
};

let list = [1, 5, 3, 6, 7, 8];
let ll = new LinkedList(list);
ll.print();

import { ListNode } from "./list-node";

export function reverseLinkedList(list: ListNode | null): ListNode | null {
  var prev: ListNode | null = null;
  while (list != null) {
    prev = new ListNode(list.val, prev);
    list = list.next;
  }

  return prev;
}

export function reverseRec(list: ListNode | null): ListNode | null {
  if (list?.next == null) {
    return list;
  }

  var prev = reverseRec(list.next);
  var result = prev;

  return prev;
}

import { ListNode } from "./list-node";

export function mergedTwoSortedList(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  var result: ListNode = new ListNode();
  var node: ListNode = result;
  while (list1 != null || list2 != null) {
    if (list1 != null && list2 != null && list1.val < list2.val) {
      node.next = new ListNode(list1.val);
      list1 = list1.next;
    } else if (list1 != null && list2 != null && list1.val >= list2.val) {
      node.next = new ListNode(list2.val);
      list2 = list2.next;
    } else if (list1 != null && list2 == null) {
      node.next = new ListNode(list1.val);
      list1 = list1.next;
    } else if (list1 == null && list2 != null) {
      node.next = new ListNode(list2.val);
      list2 = list2.next;
    }
    node = node.next!;
  }
  return result.next;
}

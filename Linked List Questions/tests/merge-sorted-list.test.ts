import { expect, test, describe } from "@jest/globals";
import { mergedTwoSortedList } from "../merge-two-sorted-list";
import { ListNode } from "../list-node";

describe("test", () => {
  test("mergedTwoSortedList(list1, list2)).toStrictEqual(result)", () => {
    const list1: ListNode = new ListNode(1);
    list1.next = new ListNode(2);
    list1.next.next = new ListNode(3);
    const list2: ListNode = new ListNode(1);
    list2.next = new ListNode(2);
    const result: ListNode = new ListNode(1);
    result.next = new ListNode(1);
    result.next.next = new ListNode(2);
    result.next.next.next = new ListNode(2);
    result.next.next.next.next = new ListNode(3);
    expect(mergedTwoSortedList(list1, list2)).toStrictEqual(result);
  });
});

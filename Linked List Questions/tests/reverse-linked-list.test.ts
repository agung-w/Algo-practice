import { expect, test, describe } from "@jest/globals";
import { ListNode } from "../list-node";
import { reverseLinkedList, reverseRec } from "../reverse-linked-list";

describe("test", () => {
  const list: ListNode = new ListNode(1);
  list.next = new ListNode(2);
  list.next.next = new ListNode(3);
  list.next.next.next = new ListNode(4);
  list.next.next.next.next = new ListNode(5);
  const reversed: ListNode = new ListNode(5);
  reversed.next = new ListNode(4);
  reversed.next.next = new ListNode(3);
  reversed.next.next.next = new ListNode(2);
  reversed.next.next.next.next = new ListNode(1);
  test("reverseLinkedList(list)).toStrictEqual(reversed)", () => {
    expect(reverseLinkedList(list)).toStrictEqual(reversed);
  });
  test("reverseLinkedList(list)).toStrictEqual(reversed)", () => {
    expect(reverseRec(list)).toStrictEqual(reversed);
  });
});

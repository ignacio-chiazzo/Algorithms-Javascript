/*
Add Two Numbers
https://leetcode.com/problems/add-two-numbers/

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order 
and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

var ListNode = require('../utilsClasses/ListNode').ListNode;
 
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
  if(l1 === null)
    return (l2 === null) ? new ListNode(0) : l2;
  else if(l2 === null)
    return l1;  
  
  var elem = l1.val + l2.val;
  var number = new ListNode(elem % 10);
  var carry = (elem >= 10) ? 1 : 0;
  l1 = l1.next;
  l2 = l2.next;
  
  const head = number;
  while(l1 !== null || l2 !== null) {
    var l1elem = 0;
    var l2elem = 0;
    if(l1 !== null) {
      l1elem = l1.val;
      l1 = l1.next;
    }
    if(l2 !== null) {
      l2elem = l2.val;
      l2 = l2.next;
    }
    
    elem = l1elem + l2elem + carry;
    number.next = new ListNode((elem % 10));
    number = number.next;
    carry = (elem >= 10) ? 1 : 0;
  }
  if(carry === 1) {
    number.next = new ListNode(1);
    number = number.next;
  }
  return head;
};


var main = function() {
  const list1 = ListNode.linkenList([1,2,3,4]);
  const list2 = ListNode.linkenList([1,2,3,4]);
  console.log(addTwoNumbers(list1, list2));
}

main();
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
//You may assume the two numbers do not contain any leading zero, except the number 0 itself.
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8

const addTwoNumbers = function(l1, l2) {
    let answer = [], response = [];
    
    for (let i = 0; i < arguments.length; i++) {
        retrieveLinks(arguments[i]);
    }
    
    function retrieveLinks (list, arr) {
        let array = arr || [];
        
        array.push(list.val);
        
        if (list && list.next === null) { 
            let red = array.reverse().join(''); 
            answer.push(red); //all links retrieved and won't recurse further
        } else {
            retrieveLinks(list.next, array); //recursive algorithm to continue extracting until null is found
        }
    }

    function createList(node) {
        
        var x = response.splice(0, 1)[0];
        
        node.val = x;
        node.next = { val: '', next: ''};

        if (response.length === 0) {
            node.next = null;
            return node; //exits recursive sub-loop
        }

        node.next = createList({}); //creates final null
        
        return node;
    }
    
    response = answer
                .map(item => parseInt(item))
                .reduce( (pre, curr) => (pre + curr), 0)
                .toString()
                .split('')
                .reverse()
                .map(item => parseInt(item));

    let nodeList = createList({});
    
    return nodeList;
};

const l1 = { val: 2, next: {val: 3, next: {val: 4, next: null }}};
const l2 = { val: 5, next: {val: 6, next: {val: 2, next: null }}};

console.log(addTwoNumbers(l1, l2));
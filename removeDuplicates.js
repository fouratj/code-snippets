// Remove duplicates from sorted list

// 164 / 164 test cases passed.
// Status: Accepted
// Runtime: 139 ms

let node = new ListNode(1);
node.next = new ListNode(1);
node.next.next = new ListNode(2);

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function buildNode (arr) {    
    let node = new ListNode(arr.shift());
    
    if (arr.length)
        node.next = buildNode(arr);
    
    return node;
}

var deleteDuplicates = function(head) {
    if (!head && typeof head === 'object') return null;

    let array = [];
        
    while (head && typeof head === "object") {
        array.push(head.val);
        head = head.next;
    }
    
    array = array.filter( (item, index, arr) => (index == arr.indexOf(item)));
    
    return buildNode(array);
};

console.log(deleteDuplicates(node));
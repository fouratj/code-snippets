
var addTwoNumbers = function(l1, l2) {
    let answer = [], response = [];
    
    for (let i = 0; i < arguments.length; i++) {
        retrieveLinks(arguments[i]);
    }
    
    function retrieveLinks (list, arr) {
        let array = arr || [];
        
        array.push(list.val);
        
        if (list && list.next === null) {
            let red = array.reverse().join('');
            answer.push(red);
        } else {
            retrieveLinks(list.next, array);    
        }
    }
    
    function createList(node) {
        console.log(response, response.length)
        var x = response.splice(0, 1)[0];
        
        node.val = x;
        node.next = { val: '', next: ''};
        
        
        if (response.length === 0) {
            node.next = null;
            return node;
        }
        
        node.next = createList({});
        
        return node
    
        
        
            
    }
    
    answer = answer.map(item => parseInt(item));
    response = answer.reduce( (pre, curr) => (pre + curr), 0)
    response = response.toString().split('').reverse().map(item => parseInt(item));
    let nodeList = createList({})
    console.log(nodeList)
    
    return nodeList;
};


var l1 = { val: 2, next: {val: 3, next: {val: 4, next: null}}};
var l2 = { val: 5, next: {val: 6, next: {val: 2, next: null}}};
addTwoNumbers(l1, l2);
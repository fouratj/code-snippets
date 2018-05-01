// Codility
// Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite 
// restaurants represented by strings.

// You need to help them find out their common interest with the least list index sum. 
// If there is a choice tie between answers, output all of them with no order requirement. 
// You could assume there always exists an answer.

// 133 / 133 test cases passed.
// Status: Accepted
// Runtime: 292 ms

var findRestaurant = function(list1, list2) {
    var myobject = {}, answers = [];
    
    list1.forEach( (item, index) => { //creates hash
        myobject[item] = { index: index, inBothLists: false}; 
    });
    
    list2.forEach( (item, index) => {
        if (myobject[item]) { //updates hash only for matching restaurants from list1
            myobject[item]["index"] += index; //updates index
            myobject[item]["inBothLists"] = true; //sets to true so those with false can be removed;
        }  
    });
    
    for (let o in myobject) {
        if (myobject[o]["inBothLists"]) {
            if (answers.length === 0) answers[0] = o + '-' + myobject[o];
            myobject[o] = myobject[o]["index"];
        } else {
            delete myobject[o];
        }
    }
    
    for (let o in myobject) {
        if ((myobject[o] < parseInt(answers[0].split('-')[1])) ) {
            answers[0] = (o + '-' + myobject[o]);
        } else if (myobject[o] === parseInt(answers[0].split('-')[1]) && o !== answers[0].split('-')[0] ) {
            answers.push(o + '-' + myobject[o])
        }
    }
    
    
    return answers.map(item => (item.split('-')[0]));
}

var list1 = ["Shogun","Tapioca Express","Burger King","KFC"];
var list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"];

console.log(findRestaurant( list1, list2))
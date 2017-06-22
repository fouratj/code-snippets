var nextGreaterElement = function(findNums, nums) {
    
    let answer = [];
    
    while (findNums > 0) {
        let curr = findNums.shift();
        console.log(curr);
        let trigger = false;
        
        for (let i = 0; i < nums.length; i++) {
            console.log(nums.length)
            if (curr > nums[i]) {
                answer.push(nums[i]);
                trigger = true;
                break;
            }
        }
        
        if (trigger) {
            answer.push(-1);
        }
    }
    
    return answer;
};

nextGreaterElement([4,1,2],[1,3,4,2]);
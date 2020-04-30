// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

const moveZeros = function(nums) {
    for (let i = nums.length - 1; i >= 0; i--) {
        if(nums[i] === 0) {
            let temp = nums.splice(i, 1);
            nums.push(temp[0]);
        }
    }
    return nums;
};

// test
moveZeros([false,1,0,1,2,0,1,3,'a']) // should return [false,1,1,2,1,3,'a',0,0]
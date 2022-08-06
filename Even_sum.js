// declare function


let aray = [];

function even_add(num) {

    for (let i = 0; i < num.length; i++) {
        let index = i;
        let array_num = num[index];


        if (array_num % 2 == 0) {
            console.log(i, array_num);
            aray.push(array_num);
        }

    }
    return aray;
}


// called function
let nums = [32, 13, 34, 21, 57, 35, 23, 78];
even_add(nums);

console.log(aray);



var sum = 0;

function array_sum(array_elements) {
    console.log(array_elements.length);
    for (let i = 0; i < array_elements.length; i++) {
        let index = i;
        let array_num = array_elements[i];
        sum = sum + array_num;
        console.log(index, array_num, sum);
    }

    return sum;

}

console.log('Even number array sum: ', array_sum(aray));




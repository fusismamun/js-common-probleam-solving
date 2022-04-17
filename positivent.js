let numbers = [10, 20, 30, 40, 50, -20, -30, 50];

function positveValue (numbers){
    for(i=0; i<numbers.length; i++){
        if(numbers[i]== -0){
            break;
        }
    }

}
let check = positveValue(numbers);
console.log(check);
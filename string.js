function bestFriend(names){
    let largest = names[0].length;
    let ans = names[0];
    for (let i = 1; i < names.length; i++) {
        let element = names[i].length;
        if (element > largest){
            ans = names[i];
            largest = ans;

        }
    
    }
    return largest;
}
let names = ['murshed mondol', 'angona ahmed', 'sohan', 'rakib', 'abidur rahman', 'sumiya nijhum', 'abdullah al mamun'];
let largestName = bestFriend(names);
console.log(largestName);

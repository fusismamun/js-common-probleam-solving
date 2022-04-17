function bookPrint(first, second , third){
    const firstBook = 100;
    const secondBook = 200;
    const thirdBook = 300;
    //pages calculate 
    const fisrtBookQuantity = first * firstBook;
    const secondBookQuantity = second * secondBook;
    const thirdBookQuantity = third * thirdBook;
    // Totall paper 
    const totalPages = fisrtBookQuantity + secondBookQuantity + thirdBookQuantity;
    return totalPages;
}

let paperRequirtment = bookPrint( 1, 1, 1);
console.log(paperRequirtment);
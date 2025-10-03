function sort(drinks) {
    return drinks.sort((a, b) => a.price - b.price);
}

const drinks = [
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 },
    { name: "soda", price: 30}
];

console.log(sort(drinks));
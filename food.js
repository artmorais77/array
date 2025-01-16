const foods = [
    { name: "banana", category: "fruta" },
    { name: "Alface", category: "verdura" },
    { name: "maça", category: "fruta" },
    { name: "uva", category: "fruta" },
    { name: "repolho", category: "verdura" },
]

const foodCategory = foods.reduce((acc, item) => {
    if (!acc[item.category]) {
        acc[item.category] = []
    }
    acc[item.category].push(item.name)
    return acc
}, {})

console.log(foodCategory)


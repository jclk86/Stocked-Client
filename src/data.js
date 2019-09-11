const inventory = [
  {
    userId: 1,
    itemId: 2,
    image:
      "https://images.pexels.com/photos/1937743/pexels-photo-1937743.jpeg?cs=srgb&dl=bright-citrus-citrus-fruit-1937743.jpg&fm=jpg",
    name: "Orange",
    description: "This is an orange",
    quantity: 0,
    date: new Date(),
    tag: 1,
    unit: 1,
    cost: 3.99
  },
  {
    userId: 1,
    itemId: 4,
    image:
      "https://images.pexels.com/photos/2487443/pexels-photo-2487443.jpeg?cs=srgb&dl=abundance-apples-delicious-2487443.jpg&fm=jpg",
    name: "Apple",
    description: "Fuji apples",
    quantity: 20,
    date: new Date(),
    tag: 2,
    unit: 7,
    cost: 1.99
  },
  {
    userId: 1,
    itemId: 13,
    image:
      "https://images.pexels.com/photos/1755785/pexels-photo-1755785.jpeg?cs=srgb&dl=appetizer-baked-bakery-1755785.jpg&fm=jpg",
    name: "Bread",
    description: "loaves of bread",
    quantity: 10,
    date: new Date(),
    tag: 3,
    unit: 6,
    cost: 3.99
  },
  {
    userId: 1,
    itemId: 3,
    image:
      "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?cs=srgb&dl=cherry-tomatoes-close-up-colors-1327838.jpg&fm=jpg",
    name: "Tomatoes",
    description: "assorted tomatoes",
    quantity: 100,
    date: new Date(),
    tag: 4,
    unit: 5,
    cost: 1.44
  },
  {
    userId: 1,
    itemId: 22,
    image:
      "https://images.pexels.com/photos/39565/fork-eat-metal-fork-dine-39565.jpeg?cs=srgb&dl=close-up-fork-macro-39565.jpg&fm=jpg",
    name: "Forks",
    description: "metal forks",
    quantity: 30,
    date: new Date(),
    tag: 5,
    unit: 3,
    cost: 0.97
  },
  {
    userId: 1,
    itemId: 33,
    image:
      "https://images.pexels.com/photos/161025/tomatoes-ketchup-sad-food-161025.jpeg?cs=srgb&dl=ketchup-sauce-tomatoes-161025.jpg&fm=jpg",
    name: "Ketchup",
    description: "heinz ketchup bottles",
    quantity: 10,
    date: new Date(),
    tag: 6,
    unit: 2,
    cost: 10.99
  },
  {
    userId: 55,
    itemId: 23,
    image:
      "https://images.pexels.com/photos/161025/tomatoes-ketchup-sad-food-161025.jpeg?cs=srgb&dl=ketchup-sauce-tomatoes-161025.jpg&fm=jpg",
    name: "Ketch",
    description: "heinz ketchup bottles",
    quantity: 10,
    date: new Date(),
    tag: 6,
    unit: 1,
    cost: 2.23
  }
];

const tags = [
  { name: "proteins" },
  { name: "beverages" },
  { name: "condiments" },
  { name: "dairy" },
  { name: "dishware" },
  { name: "utensils" },
  { name: "spices" },
  { name: "fruits" },
  { name: "grains" }
];

const units = [
  { name: "lb(s)" },
  { name: "oz" },
  { name: "grams" },
  { name: "gallon(s)" },
  { name: "qt" },
  { name: "pint(s)" },
  { name: "cup(s)" },
  { name: "misc" }
];

export { inventory, tags, units };

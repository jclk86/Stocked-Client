const inventory = [
  {
    userId: 1,
    itemId: 2,
    image:
      "https://images.pexels.com/photos/1937743/pexels-photo-1937743.jpeg?cs=srgb&dl=bright-citrus-citrus-fruit-1937743.jpg&fm=jpg",
    name: "Orange",
    description: "This is an orange",
    quantity: 1,
    date: new Date(),
    tag: 1
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
    tag: 2
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
    tag: 3
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
    tag: 4
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
    tag: 5
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
    tag: 6
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
    tag: 6
  }
];

const tags = [
  { name: "Fruits", tagId: 1 },
  { name: "Utensils", tagId: 2 },
  { name: "Dairy", tagId: 3 },
  { name: "Meats", tagId: 4 },
  { name: "Sauces", tagId: 5 },
  { name: "Herbs & Spices", tagId: 6 },
  { name: "Beverages", tagId: 7 },
  { name: "Detergent", tagId: 8 },
  { name: "Cookware", tagId: 9 },
  { name: "Vegetables", tagId: 10 }
];

export { inventory, tags };

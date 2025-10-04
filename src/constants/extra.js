


import imagePath from './imagePath';
export const vegetarianItems = [
  'Berry Blast Acai Bowl',
  'Juicy Lucy salad',
  'Mushroom Stroganoff',
  'Margherita Pizza',
  'Vegetarian Pasta',
  'Sushi Roll Combo', // only if veg rolls included
  'Veggie Burger',
  'Veggie Pizza',
  'Vegetable Stir Fry',
  'Veggie Wrap',
  'Pasta Alfredo',
  'Grilled Prawns', // ❌ remove if not veg
  'Vegetable Curry',
  'Penne Arrabbiata',
  'Pasta Carbonara', // ❌ remove if you don’t want egg/bacon
];

export const productDescriptions = {
  'Berry Blast Acai Bowl':
    'A chilled acai blend topped with tropical fruits and crunchy granola for a refreshing boost.',
  "Grilled Chicken 'n veggies":
    'Tender grilled chicken breast paired with roasted seasonal vegetables and herbs.',
  'Juicy Lucy salad':
    'A garden-fresh salad with cucumbers, tomatoes, and leafy greens tossed in a zesty dressing.',
  'Mushroom Stroganoff':
    'Savory mushrooms in a creamy stroganoff sauce served over warm pasta.',
  'Margherita Pizza':
    'Classic pizza with fresh mozzarella, basil leaves, and tangy tomato sauce on a thin crust.',
  'Chicken Caesar Wrap':
    'Crisp romaine, grilled chicken, and Caesar dressing wrapped in a soft tortilla.',
  'Beef Burger Deluxe':
    'Juicy beef patty stacked with cheese, lettuce, tomato, and house-made sauce.',
  'Vegetarian Pasta':
    'Pasta tossed with sautéed vegetables, garlic, and a drizzle of olive oil.',
  'Thai Green Curry':
    'Aromatic curry cooked with coconut milk, fresh vegetables, and Thai herbs.',
  'Sushi Roll Combo':
    'An assortment of fresh sushi rolls with fish, avocado, and cucumber.',
  'BBQ Ribs Platter':
    'Slow-smoked ribs glazed with tangy barbecue sauce, served with sides.',
  'Fish & Chips':
    'Crispy battered fish fillets paired with golden fries and tartar sauce.',
  'Chicken Tikka Masala':
    'Marinated chicken simmered in a creamy spiced tomato curry.',
  'Greek Gyros':
    'Grilled meat wrapped in pita bread with onions, tomatoes, and tzatziki.',
  'Taco Supreme':
    'Soft tacos filled with seasoned meat, lettuce, cheese, and salsa.',
  'Pad Thai Noodles':
    'Stir-fried noodles with tamarind sauce, shrimp, tofu, and crushed peanuts.',
  'Butter Chicken':
    'Rich and buttery chicken curry in a velvety tomato-based sauce.',
  'Lamb Kebab':
    'Charcoal-grilled lamb skewers marinated with Mediterranean spices.',
  'Seafood Paella':
    'Spanish saffron rice cooked with shrimp, mussels, and clams.',
  'Chicken Quesadilla':
    'Cheesy quesadilla stuffed with seasoned chicken and grilled to perfection.',
  'Penne Arrabbiata':
    'Spicy tomato-based pasta with garlic, chilies, and fresh herbs.',
  'Beef Stir Fry':
    'Beef strips stir-fried with vegetables in a savory soy glaze.',
  'Salmon Teriyaki':
    'Grilled salmon coated with a sweet teriyaki glaze.',
  'Veggie Burger':
    'A plant-based burger topped with lettuce, tomato, and vegan mayo.',
  'Chicken Wings':
    'Crispy wings tossed in spicy, sweet, or tangy sauces.',
  'Pork Chops':
    'Juicy pork chops grilled with garlic butter and herbs.',
  'Shrimp Scampi':
    'Shrimp sautéed in garlic butter sauce served over pasta.',
  'Turkey Sandwich':
    'Sliced turkey with lettuce, tomato, and mayo on soft bread.',
  'Chicken Parmesan':
    'Breaded chicken breast baked with marinara sauce and melted cheese.',
  'Beef Tacos':
    'Soft tortillas filled with seasoned ground beef and fresh toppings.',
  'Veggie Pizza':
    'Pizza topped with mushrooms, onions, peppers, and olives.',
  'Chicken Fajitas':
    'Sizzling strips of chicken with onions and peppers, served with tortillas.',
  'Pasta Carbonara':
    'Classic Roman pasta made with bacon, parmesan, and egg sauce.',
  'Grilled Salmon':
    'Fresh salmon fillet grilled with lemon and olive oil.',
  'Chicken Curry':
    'Traditional chicken curry simmered in onions, tomatoes, and spices.',
  'Beef Burritos':
    'Large tortillas stuffed with beef, beans, and rice.',
  'Vegetable Stir Fry':
    'Colorful vegetables stir-fried with garlic and soy sauce.',
  'Chicken Satay':
    'Skewered chicken grilled and served with peanut sauce.',
  'Pork Tenderloin':
    'Roasted pork medallions with a sweet apple glaze.',
  'Fish Curry':
    'Fish cooked in a coconut curry sauce with spices.',
  'Chicken Biryani':
    'Fragrant basmati rice layered with spiced chicken and herbs.',
  'Beef Steak':
    'Tender beef steak grilled to your liking with garlic butter.',
  'Veggie Wrap':
    'Soft tortilla wrap with fresh vegetables, hummus, and avocado.',
  'Chicken Shawarma':
    'Spiced chicken wrapped in pita bread with garlic sauce.',
  'Pasta Alfredo':
    'Creamy fettuccine alfredo made with parmesan and butter.',
  'Grilled Prawns':
    'Char-grilled prawns seasoned with lemon and herbs.',
  'Chicken Korma':
    'Mild chicken curry made with cashews and cream.',
  'Beef Noodles':
    'Savory noodles stir-fried with beef and vegetables.',
  'Vegetable Curry':
    'Mixed vegetables simmered in spiced curry sauce.',
  'Chicken Teriyaki':
    'Grilled chicken glazed with sweet teriyaki sauce.',
  'Pork Ribs':
    'Fall-off-the-bone pork ribs with smoky barbecue sauce.',
  'Fish Tacos':
    'Soft tacos with crispy fish, cabbage slaw, and lime crema.',
};

const generateProductData = () => {
  const foodNames = [
    'Berry Blast Acai Bowl',
    "Grilled Chicken 'n veggies",
    'Juicy Lucy salad',
    'Mushroom Stroganoff',
    'Margherita Pizza',
    'Chicken Caesar Wrap',
    'Beef Burger Deluxe',
    'Vegetarian Pasta',
    'Thai Green Curry',
    'Sushi Roll Combo',
    'BBQ Ribs Platter',
    'Fish & Chips',
    'Chicken Tikka Masala',
    'Greek Gyros',
    'Taco Supreme',
    'Pad Thai Noodles',
    'Butter Chicken',
    'Lamb Kebab',
    'Seafood Paella',
    'Chicken Quesadilla',
    'Penne Arrabbiata',
    'Beef Stir Fry',
    'Salmon Teriyaki',
    'Veggie Burger',
    'Chicken Wings',
    'Pork Chops',
    'Shrimp Scampi',
    'Turkey Sandwich',
    'Chicken Parmesan',
    'Beef Tacos',
    'Veggie Pizza',
    'Chicken Fajitas',
    'Pasta Carbonara',
    'Grilled Salmon',
    'Chicken Curry',
    'Beef Burritos',
    'Vegetable Stir Fry',
    'Chicken Satay',
    'Pork Tenderloin',
    'Fish Curry',
    'Chicken Biryani',
    'Beef Steak',
    'Veggie Wrap',
    'Chicken Shawarma',
    'Pasta Alfredo',
    'Grilled Prawns',
    'Chicken Korma',
    'Beef Noodles',
    'Vegetable Curry',
    'Chicken Teriyaki',
    'Pork Ribs',
    'Fish Tacos',
  ];

  const taglineOptions = [
    'Customer favorite!',
    'Chef’s special.',
    'Limited time offer.',
    'Made with organic ingredients.',
    'A must-try dish!',
  ];

  const products = [];

  for (let i = 1; i <= 100; i++) {
    const nameIndex = (i - 1) % foodNames.length;
    const productName =
      foodNames[nameIndex] +
      (Math.floor((i - 1) / foodNames.length) > 0
        ? ` ${Math.floor((i - 1) / foodNames.length) + 1}`
        : '');

    // Price formula (index-based)
    const price = `$${(10 + (i % 15) * 2.5).toFixed(2)}`;

    // Stock logic (every 6th item out of stock)
    const isInStock = i % 6 !== 0;

    // Deterministic image cycle
    const imageCycle = [imagePath?.burger, imagePath?.chicken, imagePath?.Pizza1];
    const image = imageCycle[i % imageCycle.length];

    // Description with optional tagline
    const extraLine = taglineOptions[i % taglineOptions.length];
    const description = `${productDescriptions[productName]} ${extraLine}`;
const isVegetarian = (item) => vegetarianItems.includes(item);

    products.push({
      id: i.toString(),
      name: productName,
      price,
      image,
      inStock: isInStock,
      description,
      isVeg: isVegetarian(productName),
    });
  }

  return products;
};

export const productListData = generateProductData();

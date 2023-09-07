// Controlling Modal Window - Viewing and Exiting - jQuery
$('.productCard').on("click", function () {
    $('.modalWindow').css('display', 'block');
})

$('#closeModal').on("click", function () {
    $('.modalWindow').css('display', 'none');
})

// Initializing Global Variables
let productName = "";
let productFirstWord = "";
let productPrice = "";
let cartTotal = 0;
let productPriceList = [['Celebration', 45], ['Chocolate', 45], ['Fruit', 30],
['Double', 10], ['Croissants', 12], ['Cupcakes', 22], ['Macarons', 15], ['Sorbet', 6],
['Rocky', 6], ['The', 6], ['Ice', 6], ['Banana', 8], ['Sundae', 8]
];
let productDescriptions = [
    ['Celebration', "At David's Sueets, we specialize in creating custom birthday cakes that are tailored to each customer's unique preferences and tastes. Our talented pastry chefs use only the finest ingredients to create cakes that are not only delicious but also visually stunning, with intricate designs and personal touches that make each cake truly one-of-a-kind. From classic vanilla or chocolate cakes to more exotic flavors like red velvet or strawberry, we offer a wide range of options to suit any taste. So whether you're celebrating a child's first birthday or a milestone anniversary, our custom birthday cakes are the perfect way to make your special day even sweeter."],
    ['Chocolate', "Chocolate cake is the ultimate indulgence, with its rich, decadent flavor and moist texture that melts in your mouth. At David's Sueets, we specialize in creating chocolate cakes that are simply irresistible, with a focus on using only the finest-quality ingredients. Our talented pastry chefs combine premium chocolate with other high-quality ingredients like fresh cream, butter, and free-range eggs to create cakes that are both delicious and visually stunning. Whether you prefer a classic chocolate layer cake or something more unique, like a chocolate lava cake or flourless chocolate cake, we offer a wide range of options to satisfy any chocolate lover's cravings. So if you're looking for a chocolate cake that will truly impress, look no further than David's Sueets."],
    ['Fruit', "Fruit cake is a delicious and versatile dessert that's perfect for any occasion. At David's Sueets, we specialize in creating fruit cakes that are both delicious and visually stunning, with a focus on using only the freshest, highest-quality ingredients. Our talented pastry chefs combine a variety of fresh fruits with other premium ingredients like pure vanilla extract and freshly grated nutmeg to create cakes that are bursting with flavor. Whether you prefer a classic fruit cake studded with dried fruits and nuts or something more unique, like a fresh fruit-topped cake or a berry-filled sponge cake, we offer a wide range of options to suit any taste. So if you're looking for a fruit cake that's both beautiful and delicious, look no further than David's Sueets."],
    ['Double', "Double fudge brownies are the ultimate indulgence, with their rich, chocolatey flavor and dense, fudgy texture. At David's Sueets, we specialize in creating double fudge brownies that are simply irresistible, with a focus on using only the finest-quality ingredients. Our pastry chefs use premium cocoa powder and dark chocolate chips to create brownies that are both intensely chocolatey and perfectly balanced in sweetness. Whether you prefer your brownies topped with a dusting of powdered sugar or a rich chocolate ganache, we offer a variety of options to satisfy your sweet tooth. So if you're looking for a decadent treat that will satisfy your chocolate cravings, try our double fudge brownies today."],
    ['Croissants', "Croissants are a beloved pastry that originated in France and are enjoyed around the world for their light, flaky texture and buttery, slightly sweet flavor. At David's Sueets, we specialize in creating croissants that are made in the traditional French style, with a focus on using high-quality, all-natural ingredients. Our pastry chefs use premium butter and flour to create croissants that are perfectly layered and flaky, with a delicate, buttery flavor that melts in your mouth. Whether you prefer a classic butter croissant or something more unique, like a chocolate-filled croissant or an almond croissant, we offer a wide range of options to suit any taste. So if you're looking for an authentic French pastry that's both delicious and indulgent, try our croissants today."],
    ['Cupcakes', "Cupcakes are a beloved dessert that are perfect for any occasion, from birthdays and weddings to office parties and family gatherings. At David's Sueets, we specialize in creating cupcakes that are both delicious and visually stunning, with a focus on using high-quality, all-natural ingredients. Our pastry chefs use premium flour, sugar, and free-range eggs to create cupcakes that are light, fluffy, and perfectly moist, with a delicate crumb and a subtle, sweet flavor. Whether you prefer a classic vanilla or chocolate cupcake or something more unique, like a red velvet or lemon cupcake, we offer a wide range of options to suit any taste. We also offer a variety of frosting options, from buttercream to cream cheese frosting, and can customize your cupcakes with decorations and toppings that match your event or occasion. So if you're looking for delicious and beautiful cupcakes that will impress your guests, try our cupcakes today."],
    ['Macarons', "Macarons are a delicate and delicious French pastry that are loved around the world for their crisp outer shell and soft, chewy interior. At David's Sueets, we specialize in creating macarons that are made in the traditional French style, with a focus on using only the finest-quality ingredients. Our pastry chefs use premium almond flour, pure cane sugar, and free-range eggs to create macarons that are light and airy, with a delicate almond flavor and a smooth, silky filling. We offer a wide range of macaron flavors, from classic vanilla and chocolate to more unique and exotic flavors like lavender, matcha, and raspberry. Whether you're looking for a special treat for yourself or a gift for someone else, our macarons are the perfect choice. With their beautiful colors and elegant presentation, they're sure to impress even the most discerning palate. So if you're looking for macarons that are both delicious and beautiful, try David's Sueets today."],
    ['Sorbet', "Sorbet is a refreshing and light dessert that is perfect for hot summer days or as a palate cleanser between courses. At David's Sueets, we specialize in creating sorbet that is made with only the freshest and highest-quality ingredients. Our sorbet is made from real fruit, which gives it a bright and intense flavor that is both sweet and tangy. We offer a wide range of sorbet flavors, from classic favorites like strawberry and raspberry to more unique and exotic flavors like lychee, mango, and passionfruit. Our sorbet is also vegan and gluten-free, making it a perfect dessert option for anyone with dietary restrictions. So whether you're looking for a light and refreshing dessert or a palette cleanser to enjoy between courses, our sorbet is the perfect choice."],
    ['Rocky', "Rocky road ice cream is a classic American flavor that has been enjoyed for generations. At David's Sueets, we specialize in creating rocky road ice cream that is made with only the highest-quality ingredients. Our ice cream is rich, creamy, and decadent, with a deep chocolate flavor that is perfectly balanced by the sweetness of the marshmallows and the crunch of the almonds. We use only real cocoa powder and vanilla extract in our recipe, which gives our ice cream a deep, intense flavor that is hard to resist. Whether you prefer your rocky road ice cream in a cone or a cup, it's the perfect choice for anyone who loves chocolate and wants a dessert that is both indulgent and satisfying. So if you're looking for a classic American treat that will satisfy your sweet tooth, try David's Sueets' rocky road ice cream today."],
    ['The', "At David's Sueets, we offer a wide range of ice cream cups that you can customize with your favorite toppings. Our ice cream is made with only the freshest and highest-quality ingredients, which makes it the perfect base for all kinds of delicious toppings. Whether you prefer something classic like hot fudge, caramel sauce, or rainbow sprinkles, or something more unique like fresh fruit, nuts, or cookie dough, we have the perfect topping for you. We also offer a variety of sauces and syrups, like strawberry sauce, chocolate sauce, and butterscotch syrup, that you can drizzle over your ice cream to create a truly decadent dessert. And if you're looking for something truly special, try our signature ice cream cup, which features a scoop of your favorite ice cream topped with whipped cream, crushed cookies, and a cherry on top. With so many delicious toppings to choose from, you can create a custom ice cream cup that is perfect for your taste buds and your mood."],
    ['Ice', "At David's Sueets, we love serving our ice cream in a freshly made waffle bowl cone. Our waffle cones are made with a special blend of flours and sugars, which gives them a sweet and crispy texture that perfectly complements our creamy ice cream. Each waffle cone is handcrafted and baked fresh in-house, so you can enjoy the warm, fragrant aroma of freshly baked cones as soon as you step into our shop. And with our wide selection of ice cream flavors, from classic favorites like vanilla and chocolate to more unique and adventurous flavors like lavender honey and maple bacon, you'll always find the perfect combination to satisfy your sweet tooth. So if you're looking for a delicious and satisfying dessert that is sure to please, try our ice cream in a freshly made waffle bowl cone today."],
    ['Banana', "Looking for a classic dessert that never goes out of style? Try a banana split at David's Sueets! Our banana splits are made with fresh, ripe bananas, which we split down the middle and place in a long dish. Then we add three scoops of our delicious ice cream - choose from classic flavors like chocolate, vanilla, and strawberry, or mix it up with more unique flavors like mint chocolate chip or cookies and cream. We top off the ice cream with whipped cream and a drizzle of hot fudge, caramel sauce, or your favorite topping. And to finish it off, we sprinkle chopped nuts and a cherry on top. The result is a dessert that is sweet, creamy, and perfectly balanced, with the perfect combination of flavors and textures. So if you're looking for a dessert that is sure to please everyone at the table, try a banana split at David's Sueets!"],
    ['Sundae', "Indulge in a classic treat with a sundae from David's Sueets! Our sundaes start with a generous scoop of our creamy, delicious ice cream, which you can customize with your favorite toppings. Choose from classic options like hot fudge, caramel sauce, whipped cream, and nuts, or go for something more unique like fresh fruit, gummy bears, or cookie dough. We also have a variety of sauces and syrups, like strawberry sauce, chocolate sauce, and butterscotch syrup, that you can drizzle over your ice cream to create a truly decadent dessert. Whatever you choose, you can rest assured that our ice cream is made with only the freshest and highest-quality ingredients, so you can enjoy a truly delicious treat. So come on in and create your own sundae at David's Sueets!"]
];

function productNameL(productName) {
    let tempArray = productName.split(" ");
    return tempArray[0]
}

function grabProductPrice(productPrice) {
    let tempArray = productPrice.split(" ");
    return tempArray[tempArray.length - 1]
}


$('.productCard').on("click", function () {
    productName = $(this).find('h3').text();
    productFirstWord = productNameL(productName);
    productPrice = $(this).find('p').text();
})

// Changing Modal Window information based on product card clicked.
$('.productCard').on("click", function () {
    let productLower = productNameL(productName);
    let productPriceTag = grabProductPrice(productPrice);

    console.log(productPriceTag);

    $('.modalProductName').text($(this).find('h3').text());
    $('.modalInformation > .modalPrice').text("Price:" + " " + productPriceTag);

    $('.modalPicture').attr('src', $(this).find('.productPicture').attr('src'));

    let productDescription = "";

    for (let r = 0; r < productDescriptions.length; r++) {
        for (let c = 0; c < productDescriptions[0].length; c++) {
            if (productLower === productDescriptions[r][c]) {
                productDescription = productDescriptions[r][c + 1];
            }
            else {
                continue
            }
        }
    }

    $('.modalProductDescription').text(productDescription);
})

// Resetting information if user exits modal window. 
$("#closeModal").on("click", function () {
    productName = "";
    productFirstWord = "";
    productPrice = "";
})
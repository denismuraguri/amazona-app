import bcrypt from 'bcryptjs';

//defining data as an object
const data = {
    users: [
        {
            name: 'Denis',
            email:'denismuragurim@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'John',
            email: 'user@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
        
    ],
    
    //defining products array
    products:[
        //create a product object
        {
            //set information about the object
            _id: '1',
            name: "Nike Slim Shirt",
            category:'Shirts',
            images:'/images/p1.jpg',
            price:'120',
            countInStock: 10,
            brand:'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            //set information about the object
            _id: '2',
            name: "Adidas Fit Shirt",
            category:'Shirts',
            images:'/images/p2.jpg',
            price:'100',
            countInStock: 8,
            brand:'Adidas',
            rating: 4.0,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            //set information about the object
            _id: '3',
            name: "Lacoste Free Shirt",
            category:'Shirts',
            images:'/images/p3.jpg',
            price:'220',
            countInStock: 0,
            brand:'Lacoste',
            rating: 4.8,
            numReviews: 17,
            description: 'high quality product',
        },
        {
            //set information about the object
            _id: '4',
            name: "Nike Slim Pants",
            category:'Pants',
            images:'/images/p4.jpg',
            price:'78',
            countInStock: 34,
            brand:'Nike',
            rating: 4.5,
            numReviews: 14,
            description: 'high quality product',
        },
        {
            //set information about the object
            _id: '5',
            name: "Puma Slim Shirt",
            category:'Shirts',
            images:'/images/p5.jpg',
            price:'65',
            countInStock: 94,
            brand:'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            //set information about the object
            _id: '6',
            name: "Adidas Fit Pant",
            category:'Pant',
            images:'/images/p6.jpg',
            price:'139',
            countInStock: 34,
            brand:'Adidas',
            rating: 4.9,
            numReviews: 17,
            description: 'high quality product',
        },
    ]
}

export default data;
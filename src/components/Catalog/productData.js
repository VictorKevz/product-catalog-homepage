import uuid from 'react-uuid';
import s21 from "../../assets/images/catalog/s21.png";
import iphone13 from "../../assets/images/catalog/iphone13.png";
import pixel6 from "../../assets/images/catalog/pixel6.png";
import macbookPro from "../../assets/images/catalog/macbookPro.png";
import dellXPS from "../../assets/images/catalog/dellXPS.png";
import hp from "../../assets/images/catalog/hp.png";
import airpods from "../../assets/images/catalog/airpods.png";
import logitech from "../../assets/images/catalog/logitech.png";
import anker from "../../assets/images/catalog/anker.png";
import cart from "../../assets/images/catalog/cart.svg"

const products = [
    // Smartphones
    {
        id: uuid(),
        name: "Galaxy S21",
        category: "Smartphones",
        price: 799,
        available: false,
        description: "Samsung Galaxy S21 with 128GB storage and 8GB RAM.",
        imgSrc: s21,
        icon:cart
    },
    {
        id: uuid(),
        name: "iPhone 13",
        category: "Smartphones",
        price: 999,
        available: true,
        description: "Apple iPhone 13 with 128GB storage and A15 Bionic chip.",
        imgSrc: iphone13,
        icon:cart
    },
    {
        id: uuid(),
        name: "Pixel 6",
        category: "Smartphones",
        price: 599,
        available: true,
        description: "Google Pixel 6 with 128GB storage and Google Tensor chip.",
        imgSrc: pixel6,
        icon:cart
    },
    // Computers
    {
        id: uuid(),
        name: "MacBook Pro",
        category: "Computers",
        price: 1999,
        available: false,
        description: "Apple MacBook Pro 14-inch with M1 Pro chip and 16GB RAM.",
        imgSrc: macbookPro,
        icon:cart
    },
    {
        id: uuid(),
        name: "Dell XPS 13",
        category: "Computers",
        price: 1299,
        available: true,
        description: "Dell XPS 13 with 11th Gen Intel Core i7 and 512GB SSD.",
        imgSrc: dellXPS,
        icon:cart
    },
    {
        id: uuid(),
        name: "HP Spectre x360",
        category: "Computers",
        price: 1199,
        available: false,
        description: "HP Spectre x360 with Intel Core i7 and 16GB RAM.",
        imgSrc: hp,
        icon:cart
    },
    // Accessories
    {
        id: uuid(),
        name: "AirPods Pro",
        category: "Accessories",
        price: 249,
        available: true,
        description: "Apple AirPods Pro with active noise cancellation.",
        imgSrc: airpods,
        icon:cart
    },
    {
        id: uuid(),
        name: "Logitech MX Master 3",
        category: "Accessories",
        price: 99,
        available: false,
        description: "Logitech MX Master 3 wireless mouse with advanced tracking.",
        imgSrc: logitech,
        icon:cart
    },
    {
        id: uuid(),
        name: "Anker PowerCore",
        category: "Accessories",
        price: 39,
        available: true,
        description: "Anker PowerCore portable charger with 10000mAh.",
        imgSrc: anker,
        icon:cart
    }
];

export default products;
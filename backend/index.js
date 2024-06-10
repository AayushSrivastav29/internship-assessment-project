const express = require('express');
const path = require('path');
const cors = require('cors'); 
const app = express();
const port = 8000;


// Mock data for clothing items
const clothes = [
    { id: 1, name: 'Men Tshirt', price: 400, image: "https://assets.ajio.com/medias/sys_master/root/20230703/YxKm/64a2f7b8eebac147fc48ac73/-473Wx593H-466325670-purple-MODEL2.jpg" },
    { id: 2, name: 'Men Tshirt', price: 200, image: "https://m.media-amazon.com/images/I/71DD2xmCLTL._AC_UY350_.jpg" },
    { id: 3, name: 'Men Tshirt', price: 500, image: "https://m.media-amazon.com/images/I/71GITfTSeRL._AC_UY1100_.jpg" },
    { id: 4, name: 'Men shirt', price: 700, image: "https://spykar.com/cdn/shop/files/Q6OXsPY8F-8905566097841_1.webp?v=1717408313" },
    { id: 5, name: 'Men shirt', price: 800, image: "https://m.media-amazon.com/images/I/71EZZ1usYnL._AC_UY1100_.jpg" },
    { id: 6, name: 'Men shirt', price: 1000, image: "https://www.tistabene.com/cdn/shop/products/mainimage1610537684.jpg?v=1694074737" },
    { id: 7, name: 'Men jeans', price: 1200, image: "https://m.media-amazon.com/images/I/411Fl7xFAYL._AC_UY1100_.jpg" },
    { id: 8, name: 'Men pants', price: 1400, image: "https://images.meesho.com/images/products/142481028/0hhnj_512.webp" },
    { id: 9, name: 'Men pants', price: 1500, image: "https://i.etsystatic.com/23998705/r/il/98026f/4112948623/il_570xN.4112948623_p0xv.jpg" },
    { id: 10, name: 'Men pants', price: 1000, image: "https://m.media-amazon.com/images/I/81mZpld698L._AC_UY1000_DpWeblab_.jpg" },

    { id: 11, name: 'women dress', price: 1000, image: "https://www.jiomart.com/images/product/original/rvsgxpbyxj/fabflee-women-red-printed-chiffon-a-line-dress-red-product-images-rvsgxpbyxj-4-202209202137.jpg?im=Resize=(500,630)" },
    { id: 12, name: 'women dress', price: 1200, image: "https://m.media-amazon.com/images/I/61dLQzMtGWL._AC_UY1100_.jpg" },    
    { id: 13, name: 'women jeans', price: 1400, image: "https://rukminim2.flixcart.com/image/850/1000/kvr01ow0/jean/v/l/u/30-womenjeans-33-perfect-fashion-original-imag8h352hkeuzpk.jpeg?q=90&crop=false" },
    { id: 14, name: 'women pants', price: 1000, image: "https://m.media-amazon.com/images/I/81mZpld698L._AC_UY1000_DpWeblab_.jpg" },
    { id: 15, name: 'women jeans', price: 2400, image: "https://images.meesho.com/images/products/347399574/1luux_512.webp" },
    { id: 16, name: 'women top', price: 340, image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/top/f/n/a/xxl-nm-201-white-etima-original-imagq9gn5g4jkyvv.jpeg?q=90&crop=false" },
    { id: 17, name: 'women top', price: 540, image: "https://m.media-amazon.com/images/I/71eZJ1UkKfL._AC_UY1100_.jpg" },


    { id: 18, name: 'kids', price: 760, image:  "https://image.made-in-china.com/202f0j00FWNVTjnrlJYL/China-Wholesale-Children-S-Kids-Wear-Baby-Children-Clothes-New-Design-Wedding-Fashion-Girl-Dress.jpg" },
    { id: 19, name: 'kids', price: 830, image:  "https://m.media-amazon.com/images/I/81XgTDbeZOL._SL1500_.jpg" },
    { id: 20, name: 'kids', price: 950, image:  "https://5.imimg.com/data5/ANDROID/Default/2022/8/KK/WD/QH/32127998/prod-20220808-1410475823490100275466527-jpg.jpg" },
    { id: 21, name: 'kids', price: 725, image:  "https://rukminim2.flixcart.com/image/850/1000/k0plpjk0/kids-apparel-combo/t/z/g/5-6-years-9330-22-ltp-kids-wear-original-imafkefzu6adujxc.jpeg?q=20&crop=false" },

];



app.use(cors());

// Search route
app.get('/search', (req, res) => {
    const query = req.query.query.trim().toLowerCase();
    const filteredClothes = clothes.filter(item => item.name.trim().toLowerCase().includes(query));
    res.json(filteredClothes);
});


// Route to fetch all clothes
app.get('/clothes', (req, res) => {
    res.json(clothes);
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

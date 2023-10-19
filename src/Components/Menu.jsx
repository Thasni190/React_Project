import React from 'react'
import { useState } from 'react';

function Menu() {
    const menuItems = [
        {
            name: "Caesar Salad",
            category: "Appetizers",
            description: "Fresh lettuce with Caesar dressing",
            price: 8.99,
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
        },
        {
            name: "Spaghetti Bolognese",
            category: "Main Courses",
            description: "Classic Italian pasta with meat sauce",
            price: 12.99,
            image:"https://images.pexels.com/photos/6287525/pexels-photo-6287525.jpeg?cs=srgb&dl=pexels-klaus-nielsen-6287525.jpg&fm=jpg"
        },
        {
            name: "Cheesecake",
            category: "Desserts",
            description: "Creamy cheesecake with a raspberry topping",
            price: 7.49,
            image: "https://media.istockphoto.com/id/1167344045/photo/cheesecake-slice-new-york-style-classical-cheese-cake.jpg?s=612x612&w=0&k=20&c=y3eh7cFEefAYxB_5Ow2n1OJZML_PqFOdnB5Z9nvXdgw="
        },
        {
            name: "Margarita",
            category: "Drinks",
            description: "Classic margarita cocktail with lime and tequila",
            price: 9.99,
            image: "https://thumbs.dreamstime.com/b/margarita-cocktails-outdoors-cocktail-cactus-stem-glass-second-blurred-background-fresh-whole-sliced-limes-to-44337159.jpg"
        },
        {
            name: "Garlic Bread",
            category: "Appetizers",
            description: "Toasted garlic bread with herbs",
            price: 4.99,
            image:"https://t4.ftcdn.net/jpg/01/26/00/29/360_F_126002965_6ZQqQS8zazLyJE73C6HgEPoxMxpmct1Z.jpg"
        },
        {
            name: "Chicken Wings",
            category: "Appetizers",
            description: "Crispy chicken wings with your choice of sauce",
            price: 10.99,
            image:"https://img.freepik.com/free-photo/grilled-buffalo-chicken-wings-rustic-wood-plate-generated-by-ai_188544-26049.jpg?w=2000"
        },
        {
            name: "Lasagna",
            category: "Main Courses",
            description: "Layers of pasta, meat, and cheese baked to perfection",
            price: 14.99,
            image: "https://media.istockphoto.com/id/535851351/photo/lasagna-on-a-square-white-plate.jpg?s=612x612&w=0&k=20&c=Rg1K7z4NlWhy2qexaym_GJ0khcJFSJUJgToTN2cRspM="
        },
        {
            name: "Tiramisu",
            category: "Desserts",
            description: "Classic Italian dessert with coffee and mascarpone",
            price: 7.99,
            image: "https://media.istockphoto.com/id/1248489319/photo/tiramisu-cake-with-mint.jpg?s=612x612&w=0&k=20&c=bE6ntOpTO7S8T_Rr39cnNkV_252VUB8-vymkN9WsQRQ="
        },
        {
            name: "New York Cheesecake",
            category: "Desserts",
            description: "A slice of creamy New York-style cheesecake",
            price: 8.99,
            image: "https://img.taste.com.au/O8JC4F3Q/taste/2016/11/new-york-cheesecake-40742-1.jpeg"
        },
        {
            name: "Mojito",
            category: "Drinks",
            description: "Refreshing mojito cocktail with mint and lime",
            price: 7.99,
            image: "https://images.unsplash.com/photo-1551782450-3939704166fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9qaXRvfGVufDB8fDB8fHww&w=1000&q=80"
        },
        {
            name: "Spinach Artichoke Dip",
            category: "Appetizers",
            description: "Creamy spinach and artichoke dip served with tortilla chips",
            price: 9.99,
            image: "https://s23209.pcdn.co/wp-content/uploads/2022/08/220602_DD_Spinach-Artichoke-Dip_140-1.jpg"
        },
        {
            name: "Mai Tai",
            category: "Drinks",
            description: "Tropical Mai Tai cocktail with rum and fruit juices",
            price: 10.99,
            image: "https://media.istockphoto.com/id/545372152/photo/homemade-mai-tai-cocktail.jpg?s=1024x1024&w=is&k=20&c=qLD6q1l7--Ts5cP4IRy1oymbypWMroUTXg0rfWJafUY="
        },
        {
            name: "Filet Mignon",
            category: "Main Courses",
            description: "Tender filet mignon steak cooked to perfection",
            price: 22.99,
            image: "https://hips.hearstapps.com/hmg-prod/images/delish-filet-mignon-horizontal-1541189043.jpeg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*"
        }
    ];
    const [selectedCategory, setSelectedCategory] = useState('Show All');

 function filterItems(category){
        if (category === 'Show All') {
          return menuItems;
        } else {
          return menuItems.filter(item => item.category === category);
        }
      };
      

     function handleFilter(category){
    setSelectedCategory(category);
  };

  const filteredItems = filterItems(selectedCategory);

  // function showall(){
  //   setSelectedCategory(menuItems)
  // }
  return (
    <div>
        <header className='menu_header'>
        <h1>Our Delicious Menu</h1>
        <div id="filters">
          <button onClick={() => handleFilter('Show All')}>Show All</button>
          {/* <button onClick={showall}>ShowAll</button> */}
          <button onClick={() => handleFilter('Appetizers')}>Appetizers</button>
          <button onClick={() => handleFilter('Main Courses')}>Main Courses</button>
          <button onClick={() => handleFilter('Desserts')}>Desserts</button>
          <button onClick={() => handleFilter('Drinks')}>Drinks</button>
        </div>
      </header>
      <main className="menu-items">
        {filteredItems.map((item, index) => (
          <div key={index} >
            <h2>{item.name}</h2>
            <img src={item.image} alt={item.name} width="200" />
            <p>{item.description}</p>
            <p>Price: {item.price}</p>
          </div>
        ))}
      </main>
      
    </div>
  )
}

export default Menu

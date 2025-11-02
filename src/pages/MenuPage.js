import React from 'react';
import MenuHighlightsDropdown from '../components/MenuHighlightsDropdown';

function MenuPage() {
  const fullMenu = {
    appetizers: [
      {
        name: "Greek Salad",
        price: "$12.99",
        description: "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        image: "/images/greek-salad.jpg"
      },
      {
        name: "Bruschetta",
        price: "$8.99",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        image: "/images/bruchetta.svg"
      },
      {
        name: "Hummus & Pita",
        price: "$10.99",
        description: "Creamy hummus served with warm pita bread and fresh vegetables.",
        image: "/images/greek-salad.jpg"
      }
    ],
    mains: [
      {
        name: "Grilled Fish",
        price: "$18.99",
        description: "Fresh catch of the day, grilled to perfection with Mediterranean herbs and lemon.",
        image: "/images/greek-salad.jpg"
      },
      {
        name: "Lamb Souvlaki",
        price: "$22.99",
        description: "Tender lamb skewers marinated in olive oil, lemon, and herbs, served with rice and vegetables.",
        image: "/images/greek-salad.jpg"
      },
      {
        name: "Mediterranean Pasta",
        price: "$16.99",
        description: "Fresh pasta with sun-dried tomatoes, olives, feta cheese, and basil.",
        image: "/images/greek-salad.jpg"
      }
    ],
    desserts: [
      {
        name: "Lemon Dessert",
        price: "$6.99",
        description: "A zesty lemon cake with creamy frosting.",
        image: "/images/lemon-dessert.jpg"
      },
      {
        name: "Baklava",
        price: "$7.99",
        description: "Traditional Greek pastry with honey and nuts.",
        image: "/images/lemon-dessert.jpg"
      }
    ]
  };

  return (
    <main id="main-content" className="menu-page" role="main" aria-labelledby="menu-page-title">
      <div className="container">
        <h1 id="menu-page-title">Our Complete Menu</h1>
        
        <MenuHighlightsDropdown />
      </div>
    </main>
  );
}

export default MenuPage;
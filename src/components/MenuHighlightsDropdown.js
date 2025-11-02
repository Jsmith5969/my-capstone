import React, { useState } from 'react';
import '../styles/dropdown-menu.css';

function MenuHighlightsDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All Menu Items');

  const menuCategories = {
    'All Menu Items': [
      {
        name: 'Greek Salad',
        description: 'Fresh greens, feta cheese, olives, and our signature dressing.',
        price: '$12.99',
        image: '/images/greek-salad.jpg',
        category: 'Salads'
      },
      {
        name: 'Bruschetta',
        description: 'Toasted bread topped with tomatoes, basil, and balsamic glaze.',
        price: '$8.99',
        image: '/images/bruchetta.svg',
        category: 'Appetizers'
      },
      {
        name: 'Lemon Dessert',
        description: 'A zesty lemon cake with creamy frosting.',
        price: '$6.99',
        image: '/images/lemon-dessert.jpg',
        category: 'Desserts'
      }
    ],
    'Appetizers': [
      {
        name: 'Bruschetta',
        description: 'Toasted bread topped with tomatoes, basil, and balsamic glaze.',
        price: '$8.99',
        image: '/images/bruchetta.svg',
        category: 'Appetizers'
      }
    ],
    'Salads': [
      {
        name: 'Greek Salad',
        description: 'Fresh greens, feta cheese, olives, and our signature dressing.',
        price: '$12.99',
        image: '/images/greek-salad.jpg',
        category: 'Salads'
      }
    ],
    'Desserts': [
      {
        name: 'Lemon Dessert',
        description: 'A zesty lemon cake with creamy frosting.',
        price: '$6.99',
        image: '/images/lemon-dessert.jpg',
        category: 'Desserts'
      }
    ]
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectCategory = (category) => {
    setSelectedCategory(category);
    setIsOpen(false);
  };

  const currentItems = menuCategories[selectedCategory] || [];

  return (
    <section className="menu-highlights-dropdown" aria-labelledby="menu-highlights-dropdown-title">
      <h2 id="menu-highlights-dropdown-title">Menu Highlights</h2>
      
      {/* Dropdown Selector */}
      <div className="menu-dropdown-container">
        <button 
          className="dropdown-header" 
          onClick={toggleDropdown}
          aria-expanded={isOpen}
          aria-haspopup="true"
          aria-label="On Click"
          id="menu-category-button"
        >
          <span className="selected-category">{selectedCategory}</span>
          <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`} aria-hidden="true">▼</span>
        </button>
        
        {isOpen && (
          <ul className="dropdown-menu" role="menu" aria-labelledby="menu-category-button">
            {Object.keys(menuCategories).map((category) => (
              <li key={category} role="none">
                <button
                  role="menuitem"
                  className={`dropdown-option ${category === selectedCategory ? 'selected' : ''}`}
                  onClick={() => selectCategory(category)}
                  aria-current={category === selectedCategory ? 'true' : undefined}
                  aria-label="On Click"
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Menu Items Display */}
      <div className="menu-items" role="list" aria-label={`Menu items in ${selectedCategory}`}>
        {currentItems.map((item, index) => (
          <article key={index} className="menu-item" role="listitem">
            <img src={item.image} alt={`${item.name} - ${item.description}`} />
            <div className="item-content">
              <h3>{item.name}</h3>
              <p className="description">{item.description}</p>
              <p className="price" aria-label={`Price: ${item.price}`}>{item.price}</p>
              {item.category !== selectedCategory && selectedCategory === 'All Menu Items' && (
                <span className="category-tag" aria-label={`Category: ${item.category}`}>{item.category}</span>
              )}
            </div>
          </article>
        ))}
      </div>

      {currentItems.length === 0 && (
        <p className="no-items" role="status">No items available in this category.</p>
      )}
    </section>
  );
}

export default MenuHighlightsDropdown;
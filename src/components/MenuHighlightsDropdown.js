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
    <section className="menu-highlights-dropdown">
      <h2>Menu Highlights</h2>
      
      {/* Dropdown Selector */}
      <div className="menu-dropdown-container">
        <button 
          className="dropdown-header" 
          onClick={toggleDropdown}
          aria-expanded={isOpen}
          aria-label="Select menu category"
        >
          <span className="selected-category">{selectedCategory}</span>
          <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`} aria-hidden="true">▼</span>
        </button>
        
        {isOpen && (
          <div className="dropdown-menu" role="menu">
            {Object.keys(menuCategories).map((category) => (
              <button
                key={category}
                role="menuitem"
                className={`dropdown-option ${category === selectedCategory ? 'selected' : ''}`}
                onClick={() => selectCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Menu Items Display */}
      <div className="menu-items">
        {currentItems.map((item, index) => (
          <article key={index} className="menu-item">
            <img src={item.image} alt={item.name} />
            <div className="item-content">
              <h3>{item.name}</h3>
              <p className="description">{item.description}</p>
              <p className="price">{item.price}</p>
              {item.category !== selectedCategory && selectedCategory === 'All Menu Items' && (
                <span className="category-tag">{item.category}</span>
              )}
            </div>
          </article>
        ))}
      </div>

      {currentItems.length === 0 && (
        <p className="no-items">No items available in this category.</p>
      )}
    </section>
  );
}

export default MenuHighlightsDropdown;
import React from 'react';

function MenuHighlights() {
  return (
    <section className="menu-highlights" aria-labelledby="menu-highlights-title">
      <h2 id="menu-highlights-title">Menu Highlights</h2>
      <div className="menu-items" role="list">
        <article className="menu-item" role="listitem">
          <img src="/images/greek-salad.jpg" alt="Fresh Greek salad with feta cheese and olives" />
          <h3>Greek Salad</h3>
          <p>Fresh greens, feta cheese, olives, and our signature dressing.</p>
          <p className="price" aria-label="Price: $12.99">$12.99</p>
        </article>
        <article className="menu-item" role="listitem">
          <img src="/images/bruchetta.svg" alt="Bruschetta on toasted bread" />
          <h3>Bruschetta</h3>
          <p>Toasted bread topped with tomatoes, basil, and balsamic glaze.</p>
          <p className="price" aria-label="Price: $8.99">$8.99</p>
        </article>
        <article className="menu-item" role="listitem">
          <img src="/images/lemon-dessert.jpg" alt="Slice of lemon dessert cake" />
          <h3>Lemon Dessert</h3>
          <p>A zesty lemon cake with creamy frosting.</p>
          <p className="price" aria-label="Price: $6.99">$6.99</p>
        </article>
      </div>
    </section>
  );
}

export default MenuHighlights;
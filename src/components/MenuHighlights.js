import React from 'react';

function MenuHighlights() {
  return (
    <section className="menu-highlights">
      <h2>Menu Highlights</h2>
      <div className="menu-items">
        <article className="menu-item">
          <img src="/images/greek-salad.jpg" alt="Greek Salad" />
          <h3>Greek Salad</h3>
          <p>Fresh greens, feta cheese, olives, and our signature dressing.</p>
          <p className="price">$12.99</p>
        </article>
        <article className="menu-item">
          <img src="/images/bruchetta.svg" alt="Bruschetta" />
          <h3>Bruschetta</h3>
          <p>Toasted bread topped with tomatoes, basil, and balsamic glaze.</p>
          <p className="price">$8.99</p>
        </article>
        <article className="menu-item">
          <img src="/images/lemon-dessert.jpg" alt="Lemon Dessert" />
          <h3>Lemon Dessert</h3>
          <p>A zesty lemon cake with creamy frosting.</p>
          <p className="price">$6.99</p>
        </article>
      </div>
    </section>
  );
}

export default MenuHighlights;
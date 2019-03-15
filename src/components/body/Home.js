import React from 'react';
import movie from '../../assets/hero.mp4';
const Home = () => {
  return (
    <section id="home">
      <div class="container">
        <video controls>
          <source src={movie} type="video/mp4" />
        </video>
        <div class="hero-text">
          <h1>Experience The World of Robotics</h1>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi.
          </p>
          <button class="btnContact">
            <i class="fas fa-user-check" /> CONTACT US
          </button>
        </div>
      </div>
    </section>
  );
};
export default Home;

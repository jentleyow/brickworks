import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import { Pagination, Navigation } from 'swiper/dist/js/swiper.esm';
import Program from './Program';
import onedayprogram1 from '../../assets/1dayprogram1.png';
import onedayprogram2 from '../../assets/1dayprogram2.png';
import onedayprogram3 from '../../assets/1dayprogram3.png';
import onedayprogram4 from '../../assets/1dayprogram4.png';
import onedayprogram5 from '../../assets/1dayprogram5.png';
import onedayprogram6 from '../../assets/1dayprogram6.png';
import onedayprogram7 from '../../assets/1dayprogram7.png';
import twodayprogram1 from '../../assets/2dayprogram1.jpg';
import twodayprogram2 from '../../assets/2dayprogram2.png';
import twodayprogram3 from '../../assets/2dayprogram3.png';
import twodayprogram4 from '../../assets/2dayprogram4.jpg';
import twodayprogram5 from '../../assets/2dayprogram5.png';
class Programs extends Component {
  render() {
    const params = {
      modules: [Pagination, Navigation],
      slidesPerView: 1,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    };

    return (
      <section id="programs">
        <div class="container">
          <h1 class="title">Our Programs</h1>
          <div class="programs">
            <h1>1 DAY CAMP PROGRAMS</h1>
            <br />
            <p>
              Children learn to BUILD BOT in 3 hours before lunch break, then
              they PROGRAM their BOTS in 3 hours after lunch break.
              <br />
              Students are exposed to building and programming their ROBOTS for
              FUN missions. <br />
              <strong>Difference between 1 and 2 day camps: </strong>
              Children Code the whole day on the 2nd Day.
            </p>
            <div class="content">
              <Program
                src={onedayprogram1}
                description="Students build and program robots to RACE!"
              />
              <Program
                src={onedayprogram2}
                description="Students build and program robots to shoot POKEMON!"
              />
              <Program
                src={onedayprogram3}
                description="Students build and program robots to RACE!"
              />
              <Program
                src={onedayprogram4}
                description="Students build and program robots to RACE!"
              />
            </div>
            <div class="content">
              <Program src={onedayprogram5} />
              <Program src={onedayprogram6} />
              <Program src={onedayprogram7} />
            </div>
          </div>
          <div class="programs">
            <h1>2 DAY CAMP PROGRAMS</h1>
            <br />
            <p>
              Students are exposed to real-life problems: They have to build and
              CODE ROBOTS their creativity to solve challenges and missions.
            </p>
            <div class="content">
              <div class="col">
                <Program
                  src={twodayprogram1}
                  title="ROBOT GALAXY"
                  description="Students have to build and CODE robots to protect their Territory and get rid of enemy attacks. Spurs imagination and triggers intense joy! 
Lots of programming challenges to occupy the young minds. 
"
                />
              </div>
              <div class="col">
                <Program
                  src={twodayprogram2}
                  title="SPACE ADVENTURE"
                  description="Children build and CODE bots to complete SPACE missions! Roll
                  out their space ships, launch their space craft, transport
                  space robots etc Lots of coding for students of all ages"
                />
                <Program
                  src={twodayprogram3}
                  title="CHANGI CHALLENGE"
                  description="In this 2 day class: children learn about coding robots that
                  are being utilized at Terminal 4 at Changi Airport: Robots
                  pulling wheelchairs, bots delivering food and luggage trolley
                  etc. Makes them realize how things work at the world’s Number
                  1 robot!"
                />
              </div>
              <div class="col">
                <Program
                  src={twodayprogram4}
                  title="CHINESE CHESS CHALLENGE"
                  description="Children have to capture Chinese chess pieces by programming their Robots to do so.
Non-chinese students participate too! 
Challenging and fun at the same time!
"
                />
                <Program
                  src={twodayprogram5}
                  title="BYE BYE BICYCLES"
                  description="Children are exposed to the problems of Shared-Bikes being thrown all over the city!
How do we solve these problems? Here, children learn to build and program robots to ‘pick-up’ thrown bikes and gather them in a common space for the companies to pick them up!
Learning values whilst programming!
"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Programs;

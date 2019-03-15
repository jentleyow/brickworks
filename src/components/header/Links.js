import React from 'react';
import $ from 'jquery';
class Links extends React.Component {
  render() {
    $(document).ready(function() {
      let toggleDropDown = false; // prevent slidetoggle
      let activeId = 'link1';
      $('#link1').addClass('active');
      $('.menu-toggle').click(function() {
        $('nav').toggleClass('active');
        $('.menu-toggle').toggleClass('menu-bar');
        $('.menu-toggle').toggleClass('menu-cross');
      });
      $('.link2').mouseover(function() {
        $('.link2').toggleClass('active');
        $('.dropdown').toggleClass('active');
      });
      $('.link2').mouseout(function() {
        $('.link2').toggleClass('active');
        $('.dropdown').toggleClass('active');
      });

      $('.links a').click(function(event) {
        $('#' + activeId).removeClass('active');
        $('#' + event.target.id).toggleClass('active');
        activeId = event.target.id;
      });
    });
    return (
      <div class="links">
        <a id="link1">Home</a>
        <div class="link2">
          <a id="link2">
            Programs &nbsp;
            <i class="fas fa-caret-down" />
          </a>
          <div class="dropdown">
            <a id="link3">Camp Programs</a>
            <a id="link4">Birthday Parties</a>
          </div>
        </div>

        <a id="link3">Trainer</a>
        <a id="link4">Testimonials</a>
        <a id="link5">Gallery</a>
        <a id="link6">Contact Us</a>
      </div>
    );
  }
}
export default Links;

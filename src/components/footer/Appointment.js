import React from 'react';
const Appointment = () => {
  return (
    <section id="appointment">
      <div class="container">
        <div class="content">
          <div class="appointmentText">
            <h1 class="title">
              <i class="fas fa-robot" />
              &nbsp; Contact Us
            </h1>
            <p>Ask us anything ... we won't get a robot to reply you ...</p>
          </div>
          <form>
            <div class="nameEmailContainer">
              <input type="text" class="text" placeholder="Name" />
              <input type="email" class="text" placeholder="Email" />
            </div>
            <textarea class="text" placeholder="Message" />
            <button class="btnBookAppointment">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Appointment;

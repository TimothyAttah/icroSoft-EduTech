import React from 'react';

const Events = () => {
  return (
    <div class='col-lg-4 grouped_col'>
      <div class='grouped_title'>Upcoming Events</div>
      <div class='events'>
        <div class='event d-flex flex-row align-items-start justify-content-start'>
          <div>
            <div class='event_date d-flex flex-column align-items-center justify-content-center'>
              <div class='event_day'>20</div>
              <div class='event_month'>April</div>
            </div>
          </div>
          <div class='event_body'>
            <div class='event_title'>
              <a href='#'>New Marketing Course Release</a>
            </div>
            <div class='event_subtitle'>Location: Online Platform</div>
          </div>
        </div>

        <div class='event d-flex flex-row align-items-start justify-content-start'>
          <div>
            <div class='event_date d-flex flex-column align-items-center justify-content-center'>
              <div class='event_day'>23</div>
              <div class='event_month'>April</div>
            </div>
          </div>
          <div class='event_body'>
            <div class='event_title'>
              <a href='#'>Students Art Workshop</a>
            </div>
            <div class='event_subtitle'>Location: Online Platform</div>
          </div>
        </div>

        <div class='event d-flex flex-row align-items-start justify-content-start'>
          <div>
            <div class='event_date d-flex flex-column align-items-center justify-content-center'>
              <div class='event_day'>25</div>
              <div class='event_month'>April</div>
            </div>
          </div>
          <div class='event_body'>
            <div class='event_title'>
              <a href='#'>Launch Party for a new Platform</a>
            </div>
            <div class='event_subtitle'>Location: Online Platform</div>
          </div>
        </div>

        <div class='event d-flex flex-row align-items-start justify-content-start'>
          <div>
            <div class='event_date d-flex flex-column align-items-center justify-content-center'>
              <div class='event_day'>27</div>
              <div class='event_month'>April</div>
            </div>
          </div>
          <div class='event_body'>
            <div class='event_title'>
              <a href='#'>New Marketing Course</a>
            </div>
            <div class='event_subtitle'>Location: Online Platform</div>
          </div>
        </div>

        <div class='event d-flex flex-row align-items-start justify-content-start'>
          <div>
            <div class='event_date d-flex flex-column align-items-center justify-content-center'>
              <div class='event_day'>29</div>
              <div class='event_month'>April</div>
            </div>
          </div>
          <div class='event_body'>
            <div class='event_title'>
              <a href='#'>New Marketing Course</a>
            </div>
            <div class='event_subtitle'>Location: Online Platform</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;

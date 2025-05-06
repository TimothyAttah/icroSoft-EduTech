import React from 'react';

const Courses = () => {
  return (
    <div className='courses'>
      <div className='container'>
        <div class='row'>
          <div class='col-lg-10 offset-lg-1'>
            <div class='section_title text-center'>
              <h2>Choose your course</h2>
            </div>
            <div class='section_subtitle'>
              Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut
              euismod pellentesque imperdiet. Cras laoreet gravida lectus, at
              viverra lorem venenatis in. Aenean id varius quam. Nullam bibendum
              interdum dui, ac tempor lorem convallis ut
            </div>
          </div>
          <div class='row featured_row'>
            <div class='col-lg-6 featured_col'>
              <div class='featured_content'>
                <div class='featured_header d-flex flex-row align-items-center justify-content-start'>
                  <div class='featured_tag'>
                    <a href='#'>Featured</a>
                  </div>
                  <div class='featured_price ml-auto'>
                    Price: <span>$35</span>
                  </div>
                </div>
                <div class='featured_title'>
                  <h3>
                    <a href='courses.html'>Online Literature Course</a>
                  </h3>
                </div>
                <div class='featured_text'>
                  Maecenas rutrum viverra sapien sed fermentum. Morbi tempor
                  odio eget lacus tempus pulvinar. Donec vehicula efficitur
                  nibh, in pretium nulla interdum lacus vehicula efficitur nibh,
                  in pretiumvehicula efficitur nibh, in pretium tempus non.
                </div>
                <div class='featured_footer d-flex align-items-center justify-content-start'>
                  {/* <div class='featured_author_image'>
                    <img src='/images/featured_author.jpg' alt='' />
                  </div>
                  <div class='featured_author_name'>
                    By <a href='#'>James S. Morrison</a>
                  </div>
                  <div class='featured_sales ml-auto'>
                    <span>352</span> Sales
                  </div> */}
                </div>
              </div>
            </div>
            <div class='col-lg-6 featured_col'>
              <div
                class='featured_background'
                style={{backgroundImage: 'url(/images/featured.jpg)'}}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;

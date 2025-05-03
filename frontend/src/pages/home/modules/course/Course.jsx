import React from 'react'
import styled from 'styled-components';

export const ProgramContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
  margin-top: 200px;

  @media screen and (max-width: 900px) {
    margin-top: -80px;
  }
`;

const Course = () => {
	return (
    <ProgramContainer>
      <div className='courses'>
        <div className='container'>
          {/* <div className="row">
				<div className="col-lg-10 offset-lg-1">
					<div className="section_title text-center"><h2>Choose your course</h2></div>
					<div className="section_subtitle">Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod pellentesque imperdiet. Cras laoreet gravida lectus, at viverra lorem venenatis in. Aenean id varius quam. Nullam bibendum interdum dui, ac tempor lorem convallis ut</div>
				</div>
			</div> */}
          {/* <div className="row">
				<div className="col">
					<div className="course_search">
						<form action="#" className="course_search_form d-flex flex-md-row flex-column align-items-start justify-content-between">
							<div><input type="text" className="course_input" placeholder="Course" required="required" /></div>
							<div><input type="text" className="course_input" placeholder="Level" required="required"/></div>
							<button className="course_button"><span>search course</span><span className="button_arrow"><i className="fa fa-angle-right" aria-hidden="true"></i></span></button>
						</form>
					</div>
				</div>
			</div> */}
          <div className='row'>
            <div className='col'>
              <div className='courses_slider_container'>
                <div className='owl-carousel owl-theme courses_slider'>
                  <div className='owl-item'>
                    <div className='course'>
                      <div className='course_image'>
                        <img src='/images/course_1.jpg' alt='' />
                      </div>
                      <div className='course_body'>
                        <div className='course_header d-flex flex-row align-items-center justify-content-start'>
                          <div className='course_tag'>
                            <a href='#'>Featured</a>
                          </div>
                          <div className='course_price ml-auto'>
                            Price: <span>$35</span>
                          </div>
                        </div>
                        <div className='course_title'>
                          <h3>
                            <a href='courses.html'>Online Literature Course</a>
                          </h3>
                        </div>
                        <div className='course_text'>
                          Maecenas rutrum viverra sapien sed ferm entum. Morbi
                          tempor odio eget lacus tempus pulvinar.
                        </div>
                        <div className='course_footer d-flex align-items-center justify-content-start'>
                          <div className='course_author_image'>
                            <img
                              src='/images/featured_author.jpg'
                              alt='https://unsplash.com/@anthonytran'
                            />
                          </div>
                          <div className='course_author_name'>
                            By <a href='#'>James S. Morrison</a>
                          </div>
                          <div className='course_sales ml-auto'>
                            <span>352</span> Sales
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='owl-item'>
                    <div className='course'>
                      <div className='course_image'>
                        <img src='/images/course_2.jpg' alt='' />
                      </div>
                      <div className='course_body'>
                        <div className='course_header d-flex flex-row align-items-center justify-content-start'>
                          <div className='course_tag'>
                            <a href='#'>New</a>
                          </div>
                          <div className='course_price ml-auto'>
                            Price: <span>$35</span>
                          </div>
                        </div>
                        <div className='course_title'>
                          <h3>
                            <a href='courses.html'>Social Media Course</a>
                          </h3>
                        </div>
                        <div className='course_text'>
                          Maecenas rutrum viverra sapien sed ferm entum. Morbi
                          tempor odio eget lacus tempus pulvinar.
                        </div>
                        <div className='course_footer d-flex align-items-center justify-content-start'>
                          <div className='course_author_image'>
                            <img src='/images/course_author_2.jpg' alt='' />
                          </div>
                          <div className='course_author_name'>
                            By <a href='#'>Mark Smith</a>
                          </div>
                          <div className='course_sales ml-auto'>
                            <span>352</span> Sales
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='owl-item'>
                    <div className='course'>
                      <div className='course_image'>
                        <img
                          src='/images/course_3.jpg'
                          alt='https://unsplash.com/@annademy'
                        />
                      </div>
                      <div className='course_body'>
                        <div className='course_header d-flex flex-row align-items-center justify-content-start'>
                          <div className='course_tag'>
                            <a href='#'>Featured</a>
                          </div>
                          <div className='course_price ml-auto'>
                            Price: <span>$35</span>
                          </div>
                        </div>
                        <div className='course_title'>
                          <h3>
                            <a href='courses.html'>Marketing Course</a>
                          </h3>
                        </div>
                        <div className='course_text'>
                          Maecenas rutrum viverra sapien sed ferm entum. Morbi
                          tempor odio eget lacus tempus pulvinar.
                        </div>
                        <div className='course_footer d-flex align-items-center justify-content-start'>
                          <div className='course_author_image'>
                            <img src='/images/course_author_3.jpg' alt='' />
                          </div>
                          <div className='course_author_name'>
                            By <a href='#'>Julia Williams</a>
                          </div>
                          <div className='course_sales ml-auto'>
                            <span>352</span> Sales
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='courses_slider_nav courses_slider_prev trans_200'>
                  <i className='fa fa-angle-left' aria-hidden='true'></i>
                </div>
                <div className='courses_slider_nav courses_slider_next trans_200'>
                  <i className='fa fa-angle-right' aria-hidden='true'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProgramContainer>
  );
}

export default Course

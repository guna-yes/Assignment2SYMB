import React from "react";

const Footer = function Footer() {
  return (
    <div id="footer" className="jumbotron mt-5">
      <div
        id="colophon"
        className="site-footer dark footer section"
        role="contentinfo"
      >
        <div id="footer-widgets" className="footer-widgets widgets-area">
          <div className="container">
            <div class="row">
              <div className="footer-sidebar footer-1 col-xs-12 com-sm-6 col-md-6">
                <div id="text-4" className="widget widget_text">
                  <h4 class="widget-title">About Us</h4>
                  <div className="textwidget">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type.
                    </p>
                  </div>
                </div>
                <div id="text-5" className="widget widget_text">
                  {" "}
                  <div className="textwidget">
                    <div className="phn-num">
                      <h3>
                        <i className="fa fa-phone"></i> +91 8919845645
                      </h3>

                      <p>
                        <i className="fa fa-envelope-o"></i>{" "}
                        symbtechnologies@support.com
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-sidebar footer-2 col-xs-12 com-sm-6 col-md-6  text-center">
                <h4 className="widget-title">Social</h4>
                <div className=" align-self-center ">
                  <div className="">
                    <a
                      className="btn btn-social-icon btn-google"
                      href="http://google.com/+"
                    >
                      <i className="fa fa-google-plus"></i>
                    </a>
                    <a
                      className="btn btn-social-icon btn-facebook"
                      href="http://www.facebook.com/profile.php?id="
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a
                      className="btn btn-social-icon btn-linkedin"
                      href="http://www.linkedin.com/in/"
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                    <a
                      className="btn btn-social-icon btn-twitter"
                      href="http://twitter.com/"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-social-icon btn-google"
                      href="http://youtube.com/"
                    >
                      <i className="fa fa-youtube"></i>
                    </a>
                    <a className="btn btn-social-icon" href="mailto:">
                      <i className="fa fa-envelope-o"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div class="footer-sidebar footer-4 col-xs-12 com-sm-6 col-md-4"></div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p>
            SYMB TECHNOLOGIES @2021. All rights reserved.
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

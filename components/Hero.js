
function Hero() {
  return (
    <>
    <div className="profile">
        {/* <img
          src="/images/peter-vanosdall-uZVtAixV8c8-unsplash.jpg"
          alt=""
          className="profile-cover"
        /> */}
        <div className="profile-social-links">
            <a href="https://www.facebook.com/ignourcpatna">discor</a>
            <a href="https://www.facebook.com/ignourcpatna">Insta</a>
            <a href="https://twitter.com/ignourcpatna">twitter</a>
            <a href="https://www.youtube.com/IGNOURCPatna05">YT</a>

          </div>

        <div className="profile-info">
          <div className="profile-item">
            <h3>Welcome to IGNOU BCA Club</h3>
          </div>
        </div>
        <div className="profile-menu">
          <div className="rolling-notice">
            <span>Notice:</span>{" "}
            <marquee behavior="" direction="left">
              <a href="#">
                This is not official website of IGNOU. This is created and managed by students for student community.</a>
              {/* <a href="#">Fresh Admission for January 2022 Session - Last Date: 5th March 2022</a> &nbsp; | &nbsp;
              <a href="#">The Schedule of Live Teleconference Sessions of Gyan Darshan Channel for March 2022 27 February, 2022</a> */}
            </marquee>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;

import React, {Suspense, useContext} from "react";
import {LinkedInEmbed} from "react-social-media-embed";
import "./twitter.scss";
import Loading from "../loading/Loading";
import {TwitterTimelineEmbed} from "react-twitter-embed";
import {twitterDetails} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import linkedinLogo from "../../assets/images/linkedin-logo.png";

const renderLoader = () => <Loading />;
const cantDisplayError =
  "<div className='centerContent'><h2>Can't load? Check privacy protection settings</h2></div>";

function timeOut() {
  setTimeout(function () {
    if (!document.getElementById("twitter").innerHTML.includes("iframe")) {
      document.getElementById("twitter").innerHTML = cantDisplayError;
    }
  }, 10000);
}
var widthScreen = window.screen.width;
var heightScreen = window.screen.height;

export default function Twitter() {
  const {isDark} = useContext(StyleContext);

  if (!twitterDetails.display) {
    return null;
  }
  if (!twitterDetails.userName) {
    console.error("Twitter username for twitter section is missing");
  }
  if (twitterDetails.userName) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="tw-main-div" id="twitter">
          <img
            style={{
              padding: "1rem",
              width: 180,
              height: 70
            }}
            src={linkedinLogo}
            alt="linkedin"
          />
          <div className="centerContent">
            <LinkedInEmbed
              url="https://www.linkedin.com/embed/feed/update/urn:li:share:6859841319351783424"
              postUrl="https://www.linkedin.com/posts/kwickpos_dreamteam-team-grateful-activity-6859841319808962560-CWqW?utm_source=linkedin_share&utm_medium=member_desktop_web"
              width={widthScreen / 2.1}
              height={heightScreen / 2}
            />
          </div>
        </div>
      </Suspense>
    );
  } else {
    return null;
  }
}

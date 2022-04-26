import React, {useContext} from "react";
import "./SplashScreen.css";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import {greeting, splashScreen} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import TypeWriterEffect from "react-typewriter-effect";

export default function SplashScreen() {
  const {isDark} = useContext(StyleContext);
  return (
    <div className={isDark ? "dark-mode splash-container" : "splash-container"}>
      <div className="splash-animation-container">
        {/* <DisplayLottie animationData={splashScreen.animation} /> */}
        {/* <div className="splash-title-container">
          <span className="splash-title">&lt;</span>
          <span className="splash-title">div</span>
          <span className="splash-title">&gt;</span>
        </div>
        <div className="splash-title-container">
          <span className="splash-title"> &lt;</span>
          <span className="splash-title">{greeting.username}</span>
          <span className="splash-title">/&gt;</span>
        </div>
        <div className="splash-title-container">
          <span className="splash-title"> &lt;/</span>
          <span className="splash-title">div</span>
          <span className="splash-title">&gt;</span>
        </div> */}
        <TypeWriterEffect
          textStyle={{
            fontFamily: "SpaceGrotesk",
            paddingTop: 20,
            paddingBottom: 20,
            color: "white"
          }}
          startDelay={100}
          cursorColor="white"
          hideCursorAfterText={true}
          text="<div>"
          typeSpeed={200}
        />
        <TypeWriterEffect
          textStyle={{
            fontFamily: "SpaceGrotesk",
            paddingTop: 20,
            paddingBottom: 20,
            color: "white"
          }}
          startDelay={1500}
          cursorColor="white"
          hideCursorAfterText={true}
          text={`<${greeting.username}/>`}
          typeSpeed={100}
        />
        <TypeWriterEffect
          textStyle={{
            fontFamily: "SpaceGrotesk",
            paddingTop: 20,
            paddingBottom: 20,
            color: "white"
          }}
          startDelay={3500}
          cursorColor="white"
          text="</div>"
          typeSpeed={200}
        />
      </div>
    </div>
  );
}

import React from "react";
import "../css/widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__SearchIcon" />
        <input placeholder="Search" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's Happening</h2>

        <TwitterTweetEmbed tweetId={"1396446576483000323"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="irsyadime"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://facebook.com/irsyadmusyaffasyaffa"}
          options={{ text: "#reactjs is awesome", via: "irsyadmusyaffasyaffa" }}
        />
      </div>
    </div>
  );
}

export default Widgets;

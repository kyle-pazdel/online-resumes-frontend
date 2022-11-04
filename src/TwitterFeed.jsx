import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";

export function TwitterFeed(props) {
  return (
    <div>
      <TwitterTimelineEmbed sourceType="profile" screenName="Actualize" options={{ height: 500 }} />
    </div>
  );
}

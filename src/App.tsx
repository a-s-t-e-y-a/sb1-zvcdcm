import React from 'react';
import YouTubeGraph from './components/YouTubeGraph';

const data = {
  "subject": "youtube",
  "depth": 4,
  "topics": {
    "level_1": [
      "videos",
      "content creators",
      "live streaming",
      "monetization",
      "algorithm"
    ],
    "level_2": {
      "videos": [
        "vlogs",
        "tutorials",
        "gaming",
        "shorts",
        "music videos"
      ],
      "content creators": [
        "YouTubers",
        "influencers",
        "channels",
        "collaborations",
        "fan base"
      ],
      "live streaming": [
        "game streams",
        "Q&A sessions",
        "events",
        "super chats",
        "donations"
      ],
      "monetization": [
        "ads",
        "sponsorships",
        "memberships",
        "merchandise",
        "affiliate marketing"
      ],
      "algorithm": [
        "recommendations",
        "SEO",
        "watch time",
        "click-through rate",
        "engagement"
      ]
    },
    "level_3": {
      "vlogs": [
        "daily life",
        "travel",
        "challenges",
        "family",
        "lifestyle"
      ],
      "tutorials": [
        "DIY",
        "coding",
        "art",
        "makeup",
        "fitness"
      ],
      "gaming": [
        "walkthroughs",
        "let's plays",
        "eSports",
        "reviews",
        "game updates"
      ],
      "shorts": [
        "viral trends",
        "funny clips",
        "music snippets",
        "reaction videos",
        "behind-the-scenes"
      ],
      "music videos": [
        "official releases",
        "covers",
        "lyric videos",
        "remixes",
        "concert recordings"
      ],
      "YouTubers": [
        "PewDiePie",
        "MrBeast",
        "Emma Chamberlain",
        "Marques Brownlee",
        "Lilly Singh"
      ],
      "influencers": [
        "beauty gurus",
        "tech reviewers",
        "fitness trainers",
        "comedians",
        "travel vloggers"
      ],
      "channels": [
        "niche content",
        "brand channels",
        "educational",
        "entertainment",
        "news"
      ],
      "collaborations": [
        "guest appearances",
        "crossover videos",
        "brand deals",
        "group projects",
        "challenges"
      ],
      "fan base": [
        "subscribers",
        "community",
        "fan art",
        "meetups",
        "feedback"
      ],
      "game streams": [
        "Twitch crossovers",
        "multiplayer sessions",
        "stream highlights",
        "reaction streams",
        "subscriber games"
      ],
      "Q&A sessions": [
        "Ask Me Anything",
        "personal stories",
        "audience polls",
        "live interactions",
        "celebrity guests"
      ],
      "events": [
        "product launches",
        "webinars",
        "concerts",
        "charity events",
        "announcements"
      ],
      "super chats": [
        "top donors",
        "custom messages",
        "highlighted chats",
        "audience support",
        "revenue streams"
      ],
      "donations": [
        "Patreon",
        "PayPal links",
        "merch sales",
        "crowdfunding",
        "charity drives"
      ],
      "ads": [
        "Google AdSense",
        "skippable ads",
        "non-skippable ads",
        "bumpers",
        "ad targeting"
      ],
      "sponsorships": [
        "brand integrations",
        "product placements",
        "shoutouts",
        "review deals",
        "long-term partners"
      ],
      "memberships": [
        "exclusive perks",
        "badges",
        "emojis",
        "member-only videos",
        "community posts"
      ],
      "merchandise": [
        "t-shirts",
        "hats",
        "custom mugs",
        "stickers",
        "plushies"
      ],
      "affiliate marketing": [
        "Amazon links",
        "referral codes",
        "partner programs",
        "sales commissions",
        "product reviews"
      ],
      "recommendations": [
        "personalized feeds",
        "trending",
        "subscriptions",
        "up next",
        "history-based"
      ],
      "SEO": [
        "keywords",
        "tags",
        "titles",
        "descriptions",
        "thumbnails"
      ],
      "watch time": [
        "session duration",
        "binge-watching",
        "viewer retention",
        "video length",
        "replays"
      ],
      "click-through rate": [
        "thumbnail quality",
        "titles",
        "impressions",
        "viewer intent",
        "competition"
      ],
      "engagement": [
        "likes",
        "comments",
        "shares",
        "subscriptions",
        "community tab"
      ]
    },
    "level_4": {
      "daily life": [
        "morning routines",
        "work vlogs",
        "weekend activities",
        "home projects",
        "family time"
      ],
      "travel": [
        "backpacking",
        "luxury travel",
        "road trips",
        "destination guides",
        "cultural experiences"
      ],
      "challenges": [
        "24-hour challenges",
        "food challenges",
        "pranks",
        "trivia games",
        "collab challenges"
      ],
      "family": [
        "parenting",
        "sibling interactions",
        "family trips",
        "celebrations",
        "home dynamics"
      ],
      "lifestyle": [
        "minimalism",
        "home decor",
        "fitness routines",
        "fashion",
        "wellness"
      ],
      "DIY": [
        "home improvement",
        "crafts",
        "recycling projects",
        "tech builds",
        "repairs"
      ],
      "coding": [
        "JavaScript tutorials",
        "web development",
        "app building",
        "game development",
        "AI coding"
      ],
      "art": [
        "painting",
        "digital art",
        "sketching",
        "sculpting",
        "animation"
      ],
      "makeup": [
        "tutorials",
        "reviews",
        "celebrity looks",
        "creative makeup",
        "skincare"
      ],
      "fitness": [
        "workouts",
        "nutrition tips",
        "progress tracking",
        "home fitness",
        "yoga"
      ],
      "viral trends": [
        "dance challenges",
        "memes",
        "reactions",
        "remixes",
        "collaborations"
      ],
      "reaction videos": [
        "movie trailers",
        "music videos",
        "funny clips",
        "fan edits",
        "viral moments"
      ],
      "covers": [
        "acoustic",
        "instrumental",
        "pop songs",
        "classic hits",
        "collaborative covers"
      ],
      "eSports": [
        "tournaments",
        "teams",
        "commentary",
        "pro players",
        "spectator stats"
      ],
      "fan art": [
        "drawings",
        "animations",
        "tribute videos",
        "digital edits",
        "collaborative projects"
      ]
    }
  }
};

function App() {
  return (
    <div className="w-full h-screen">
      <YouTubeGraph data={data} />
    </div>
  );
}

export default App;
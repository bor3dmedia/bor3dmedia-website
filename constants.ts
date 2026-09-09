import { MonitorPlay, Lightbulb, BarChart3, Layers, Zap, Globe, Users, TrendingUp, Video, Share2, Image, Repeat, ShieldCheck, Sparkles } from "lucide-react";

export const NAVIGATION_LINKS = [
  { name: "Services", href: "#services" },
  { name: "Why Us", href: "#why-us" },
  { name: "Process", href: "#process" },
];

export const CONTACT_EMAIL = "hello@boredmedia.com";

export const SERVICE_OPTIONS = [
  "Long-form video editing",
  "Short-form content",
  "Thumbnails",
  "Full content pipeline",
  "Not sure yet",
];

export const PROBLEMS = [
  {
    number: "01",
    title: "Focus",
    description: "Every hour spent editing, planning, or managing is an hour not spent creating. That trade shouldn't exist.",
    gradient: "from-amber-400 via-orange-500 to-yellow-400",
  },
  {
    number: "02",
    title: "Consistency",
    description: "A channel isn't just videos. It's uploads, thumbnails, formats, and strategy, all needing to hit the same bar, every time.",
    gradient: "from-indigo-500 via-violet-600 to-blue-700",
  },
  {
    number: "03",
    title: "Scalability",
    description: "Growing a channel shouldn't mean hiring an editor, then a thumbnail designer, then a strategist. It should mean one team, scaling with you.",
    gradient: "from-rose-500 via-red-500 to-orange-600",
  },
];

export const PILLARS = [
  {
    icon: ShieldCheck,
    title: "Reliability",
    tagline: "Show up. Every time.",
    points: [
      "24-hour internal review — we flag issues before you do",
      "Structured workflow with clear milestones on every project",
      "Dedicated editor on your account — no random handoffs",
      "Async-first comms: always updated, never left waiting",
    ],
  },
  {
    icon: Sparkles,
    title: "Quality",
    tagline: "Every frame is intentional.",
    points: [
      "2 rounds of revision included on every deliverable",
      "Platform-native editing — paced for YouTube, Reels, TikTok",
      "Storytelling-first: strong opening, flow, reason to watch",
      "Visual consistency across all content — same look, always",
    ],
  },
  {
    icon: TrendingUp,
    title: "Scalability",
    tagline: "Start with one. Scale to ten.",
    points: [
      "Flexible volume — 1 video a week or 10+, no friction",
      "No hiring, no onboarding — productive from day one",
      "Consistent output whether you send 2 briefs or 20",
      "We grow with your channel as your audience grows",
    ],
  },
];

export const CLIENT_LOGOS = [
  { name: "Ali Abdaal", url: "https://storage.googleapis.com/bored_tourist_media/Images_Brands/ali%20abdaal.jpg", link: "https://www.youtube.com/@aliabdaal" },
  { name: "Chuff", url: "https://storage.googleapis.com/bored_tourist_media/Images_Brands/chuff.jpg", link: "https://www.youtube.com/@Chuffsters" },
  { name: "Futcrunch", url: "https://storage.googleapis.com/bored_tourist_media/Images_Brands/futcrunch.jpg", link: "https://www.youtube.com/@Futcrunch" },
  { name: "Harrison", url: "https://storage.googleapis.com/bored_tourist_media/Images_Brands/harrison.jpg", link: "https://www.youtube.com/@HarrisonNevel" },
  { name: "Jessers", url: "https://storage.googleapis.com/bored_tourist_media/Images_Brands/jessers.webp", link: "https://www.youtube.com/@Jesser" },
  { name: "Revolut", url: "https://storage.googleapis.com/bored_tourist_media/Images_Brands/revolut%20circle.webp", link: "https://www.revolut.com" },
  { name: "Seek Discomfort", url: "https://storage.googleapis.com/bored_tourist_media/Images_Brands/seek%20discomfort.webp", link: "https://www.youtube.com/@YesTheory" },
  { name: "Surfshark", url: "https://storage.googleapis.com/bored_tourist_media/Images_Brands/surfshark.webp", link: "https://surfshark.com" },
  { name: "The Marketing Friends", url: "https://storage.googleapis.com/bored_tourist_media/Images_Brands/the%20marketing%20friends.jpeg", link: "https://www.themarketingfriends.com/" },
  { name: "Trip", url: "https://storage.googleapis.com/bored_tourist_media/Images_Brands/trip.png", link: "https://www.tryp.com" },
  { name: "Creator Golf Club", url: "/golfclub.png", link: "https://www.creatorgolfclub.com/" },
];

export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Creator Golf Club",
    category: "Own Brand",
    views: "Viral",
    image: "https://picsum.photos/id/338/1080/1920",
    video: "https://storage.googleapis.com/bored_tourist_media/videos_off/IMG_3114_3.mp4",
    client: "Creator Golf Club",
    stat: "A brand created by the biggest golf creators in the world.",
    link: "https://www.creatorgolfclub.com",
    results: [
      { value: "+50M", label: "Combined subscribers" },
      { value: "+8M", label: "Views" },
      { value: "#1", label: "Golf on YouTube" },
    ]
  },
  {
    id: 2,
    title: "Yes Theory",
    category: "Seek Discomfort",
    views: "10M Subscribers",
    image: "https://picsum.photos/id/870/1080/1920",
    video: "https://storage.googleapis.com/bored_tourist_media/videos_off/yestheory.mp4",
    client: "Yes Theory",
    stat: "Content produced for Seek Discomfort, the Yes Theory brand.",
    link: "https://www.youtube.com/@YesTheory",
    results: [
      { value: "+10M", label: "Subscribers" },
      { value: "+4B", label: "Total views" },
      { value: "+300M", label: "Impressions" },
    ]
  },
  {
    id: 3,
    title: "Ali Abdaal",
    category: "Education & Business",
    views: "6M Subscribers",
    image: "https://storage.googleapis.com/bored_tourist_media/Images_Brands/ali%20abdaal.jpg",
    video: "https://storage.googleapis.com/bored_tourist_media/videos_off/ali.mp4",
    client: "Ali Abdaal",
    stat: "Entrepreneur with multiple businesses, NYT best-seller and the biggest productivity creator in the world.",
    link: "https://www.youtube.com/@aliabdaal",
    results: [
      { value: "+6M", label: "Subscribers" },
      { value: "+500M", label: "Views" },
      { value: "+15M", label: "Impressions/month" },
    ]
  },
  {
    id: 4,
    title: "Chuffsters",
    category: "Entertainment",
    views: "1M Subscribers",
    image: "https://storage.googleapis.com/bored_tourist_media/Images_Brands/chuff.jpg",
    video: "https://storage.googleapis.com/bored_tourist_media/videos_off/chuff.mp4",
    client: "Chuffsters",
    stat: "Content production for all 4 Chuffsters channels.",
    link: "https://www.youtube.com/@Chuffsters",
    results: [
      { value: "+100M", label: "Views generated" },
      { value: "4", label: "Channels managed" },
      { value: "+1M", label: "Subscribers" },
    ]
  }
];

export const SERVICES_DATA = [
  {
    id: "01",
    title: "Long-Form Video Editing",
    description: "YouTube, vlogs, podcasts, interviews — fully edited start to finish, brand-consistent and ready to publish.",
    icon: Video,
    gradient: "from-amber-400 via-orange-500 to-fuchsia-600",
  },
  {
    id: "02",
    title: "Short-Form Content",
    description: "Reels, TikToks, YouTube Shorts. Cut for maximum retention and paced for the platform algorithm.",
    icon: Share2,
    gradient: "from-blue-500 via-violet-500 to-emerald-400",
  },
  {
    id: "03",
    title: "Thumbnails",
    description: "Click-worthy thumbnail design that turns impressions into views. Tested visually before delivery.",
    icon: Image,
    gradient: "from-pink-500 via-rose-500 to-emerald-500",
  },
  {
    id: "04",
    title: "Full Content Pipeline",
    description: "From brief to final file — we manage the entire workflow so you never have to chase a deadline again.",
    icon: Repeat,
    gradient: "from-red-500 via-orange-500 to-blue-600",
  },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Ideation",
    description: "We align on angles, references and direction, so every video starts with a clear reason to exist."
  },
  {
    number: "02",
    title: "Packaging",
    description: "Titles and thumbnails designed to earn the click before a single frame is edited."
  },
  {
    number: "03",
    title: "Editing",
    description: "We produce a first cut, run an internal review, and deliver for your feedback within 24 hours."
  },
  {
    number: "04",
    title: "Deliver",
    description: "After revisions, the final file is exported in exactly the format you need — ready to publish immediately."
  }
];
/* Shared portfolio content for every concept. Client screens are Dhruvi's own work, anonymised.
   Stories are told in "beats": one line of text plus one visual each. Pin and hotspot x/y are fractions of the image. */
window.DD = {
  name: "Dhruvi Dhamecha",
  first: "Dhruvi",
  role: "Product designer",
  city: "Montreal",
  email: "dhruvidhamecha2003@gmail.com",
  intro: [
    "Hey.",
    "I'm Dhruvi.",
    "Product designer in Montreal, turning messy problems into calm, simple screens.",
    "I've moved around my whole life, so I learned to listen first.",
    "Then I make complicated things feel simple."
  ],
  about: "I'm a product designer in Montreal. Moving around my whole life taught me to listen before I design anything. I did my Bachelor of Design at Concordia, and for the past year I've been the only product designer at Citylogix: field apps, dashboards, admin tools and AI features, from first sketch to handoff.",
  traits: ["Bubbly", "Energetic", "Creative", "A good listener", "Understanding"],
  offscreen: [["🎨", "Painting and drawing"], ["✈️", "Travelling"], ["🎧", "Music, always"], ["🥐", "Learning French"]],
  funfact: "I've moved so many times that I've lived in more cultures than I can count on one hand.",
  timeline: [
    ["2021", "Moved to Canada. Started a Bachelor of Design at Concordia University."],
    ["Student years", "Posters, events and brand work for student associations. UX/UI, web and graphic design, with UX/UI as the focus."],
    ["Bombardier", "8 months as a design intern."],
    ["Theatre nonprofit", "Designed for a Montreal theatre nonprofit that works with people who are blind or visually impaired."],
    ["Artist Armor", "A small startup with no design at all. I created everything from scratch."],
    ["Now", "Sole product designer at Citylogix. 1 year and counting."]
  ],
  facts: [
    ["Based in", "Montreal, Canada"],
    ["Studied", "Bachelor of Design, Concordia University"],
    ["Now", "Sole product designer at Citylogix"],
    ["Before", "Bombardier, a theatre nonprofit, Artist Armor"],
    ["Friends say", "Bubbly, energetic, creative"],
    ["Off screen", "Painting, travel, music, learning French"]
  ],
  note: "Client work is under NDA. Logos, client names and people's names have been removed or replaced.",

  projects: [
    {
      id: "patrol",
      title: "Patrol",
      kicker: "Road patrol app, web review and audit report",
      line: "A phone on the dashboard turns a road patrol into a record.",
      year: "2026",
      platform: "iOS, Android, web, PDF",
      role: "Sole designer, 0 to 1",
      status: "Shipped · iOS and Android",
      color: "#1d6fe0",
      tint: "#e6efff",
      cover: "patrol-tablet-home",
      thumbs: ["patrol-tablet-recording", "patrol-mobile-synced", "patrol-web-flagged", "report-overview"],
      tldr: {
        problem: "Clients only saw their roads once a year, when they booked a scan. Everything in between was done by hand.",
        did: "Designed a brand-new patrol app: pre-drive checks, phone positioning, recording with a Bluetooth remote, then the web review tool and the audit report.",
        result: "Shipped on iOS and Android. Client crews now patrol, flag defects and raise work orders themselves, between scans."
      },
      beats: [
        { type: "line", kicker: "The gap", line: "Roads change every week. The scan happens once a year.", sub: "In between, crews spotted potholes and wrote them down by hand. A competitor already had a phone app. We needed ours, from zero." },
        { type: "people", kicker: "Who it's for", line: "Three people. Three very different days.", items: [
          ["The patroller", "Driving at dawn. One glance, one tap, sun glare, no signal."],
          ["The supervisor", "At a desk with the map open. What was covered? What was flagged?"],
          ["The auditor", "Never opens the app. Needs a clean, dated record."]
        ] },
        { type: "flow", kicker: "The flow, wireframed", line: "Recording isn't one screen. It's four moments.", cols: 2, hard: 3, steps: [
          { src: "wf-patrol-check", t: "Check before you drive", d: "Camera, GPS, remote and storage check themselves. The app only speaks up when something's wrong." },
          { src: "wf-patrol-level", t: "Position the phone", d: "A bubble level and a horizon line. It turns green when the camera is straight." },
          { src: "wf-patrol-rec", t: "Record", d: "Big targets for a bumpy road. Numbers only, nothing to read while driving." },
          { src: "wf-patrol-remote", t: "The remote button", d: "Tap to flag, hold to talk. A beep and a small pill confirm it, so eyes stay on the road." }
        ] },
        { type: "compare", kicker: "Wireframe to shipped", line: "Same screen. Drag to ship it.", frame: "land",
          a: { src: "wf-patrol-rec", label: "Wireframe" }, b: { src: "patrol-tablet-recording", label: "Shipped" } },
        { type: "proto", kicker: "Try it", line: "Start a patrol. Tap the glowing spot.", frame: "land", screens: [
          { src: "patrol-tablet-home", hot: { x: .43, y: .60, w: .43, h: .30 }, say: "One big action. Connection status first, because the camera and the remote depend on it." },
          { src: "patrol-tablet-recording", hot: { x: .465, y: .77, w: .09, h: .19 }, say: "Recording. A dark screen while driving, so it doesn't blind anyone. Tap stop." },
          { src: "patrol-tablet-summary", hot: { x: .51, y: .81, w: .20, h: .13 }, say: "Saved on the phone, sync pending. Honest about what reached the cloud." }
        ] },
        { type: "choice", kicker: "What I cut", line: "Less app. More road.", items: [
          { t: "Sorting flags into 4 categories on the phone", d: "Planned for mobile, then cut. It made the app heavy. Sorting moved to the web, at a desk.", cut: true },
          { t: "One tap to flag, hold to talk", d: "The fastest thing a driver can do safely.", cut: false },
          { t: "AI does the first sort", d: "People confirm it later on the web.", cut: false }
        ] },
        { type: "pins", kicker: "At the desk", line: "AI flags it. A person confirms it.", src: "patrol-web-item", frame: "desktop", pins: [
          { x: .17, y: .29, t: "Nothing slips through", d: "Needs categorization and Categorized are separate piles." },
          { x: .28, y: .675, t: "Unsure? It says so", d: "Low-confidence tags get a Needs Review badge." },
          { x: .5, y: .43, t: "Pick the best frame", d: "Every flag keeps its frame sequence, not one blurry photo." },
          { x: .5, y: .69, t: "Mark it up", d: "Circle, arrow and label the defect for the repair crew." },
          { x: .5, y: .83, t: "Hear the patroller", d: "Their voice note travels with the image." }
        ] },
        { type: "strip", kicker: "The record", line: "One click to the report an auditor actually wants.", shots: [
          { src: "report-cover", frame: "doc", cap: "Cover" },
          { src: "report-overview", frame: "doc", cap: "Route, conditions, timings" },
          { src: "report-tables", frame: "doc", cap: "Work orders and inspections raised" }
        ] },
        { type: "stamps", kicker: "Where it is now", line: "Live, and in crews' hands.", items: [
          ["0 → 1", "A brand-new product. No previous version to lean on."],
          ["iOS + Android", "Published on both stores."],
          ["3 surfaces", "Phone app, web review tool and PDF audit report."]
        ] }
      ],
      learned: [
        "Design for the worst moment of the job, not the demo.",
        "When eyes must stay on the road, sound is part of the UI.",
        "Cutting a feature can be the design."
      ]
    },

    {
      id: "dashboards",
      title: "Dashboards",
      kicker: "The first dashboard, then a V2 with more to say",
      line: "From a table of everything to a page that's yours.",
      year: "2025 to 2026",
      platform: "Web",
      role: "Sole designer, two versions",
      status: "V1 shipped · V2 in development",
      color: "#0f9d6b",
      tint: "#e3f6ee",
      cover: "dash-v2-top",
      thumbs: ["dash-v1", "dash-filter-line", "widget-library", "gauges"],
      tldr: {
        problem: "There was no dashboard at all. The homepage was one giant table of asset inventory.",
        did: "Designed V1, a no-code widget builder. Then V2: a fresher look and the new widgets clients kept asking for.",
        result: "V1 shipped. V2 is in development, and it's the first step toward a personal dashboard homepage."
      },
      beats: [
        { type: "line", kicker: "The start", line: "The homepage was a table. Thousands of rows. No answers.", sub: "There was no dashboard. V1 had to start from zero." },
        { type: "pins", kicker: "Version 1", line: "Build any chart without writing a query.", src: "dash-filter-line", frame: "desktop", pins: [
          { x: .5, y: .09, t: "Data, filters, style", d: "Three tabs, in the order people think." },
          { x: .2, y: .37, t: "Pick a colour, see it live", d: "The preview updates as you change things." },
          { x: .7, y: .45, t: "Live preview", d: "What you see is exactly what lands on the dashboard." },
          { x: .7, y: .87, t: "Reads like a sentence", d: "“Show count of work orders grouped by closing date.”" }
        ] },
        { type: "stamps", kicker: "Why a V2", line: "Design ages fast. And clients wanted more.", items: [
          ["4 widgets", "Bar, pie, line and KPI. All V1 had."],
          ["+ Gauges", "One value against a target."],
          ["+ Calendar", "What's due, and when."],
          ["+ Tables, maps", "Requested by clients, again and again."]
        ] },
        { type: "compare", kicker: "Before and after", line: "Drag to see what changed.", frame: "desktop",
          a: { src: "dash-v1", label: "Version 1" }, b: { src: "dash-v2-top", label: "Version 2" } },
        { type: "pins", kicker: "Version 2", line: "The dashboard tells you where to look.", src: "dash-v2-top", frame: "desktop", pins: [
          { x: .2, y: .2, t: "A daily brief", d: "Three things worth a look today, in plain words." },
          { x: .37, y: .267, t: "Explain, don't just state", d: "Every insight links to the data behind it." },
          { x: .566, y: .16, t: "Status in words", d: "Healthy, Watch or At risk, not just a number." },
          { x: .83, y: .207, t: "Every number has a target", d: "So 65 means something." },
          { x: .2, y: .45, t: "Ask the dashboard", d: "Suggested questions, or type your own." }
        ] },
        { type: "strip", kicker: "Exploration", line: "One value against a target, five ways, before choosing.", shots: [
          { src: "gauges", frame: "doc", cap: "Arc, ring, bar, segments and dial" },
          { src: "widget-library", frame: "desktop", cap: "Private, public and system widgets" }
        ] },
        { type: "flow", kicker: "Where it's going", line: "Next, the homepage becomes your dashboard.", cols: 3, hard: 2, hardLabel: "The vision", steps: [
          { t: "Today", d: "A table of asset inventory as the first thing you see." },
          { t: "V2 widgets", d: "Gauges, calendars, tables and maps, ready to arrange." },
          { t: "Your home", d: "Open the app and see what matters to you, first." }
        ] }
      ],
      learned: [
        "Flexible isn't the same as clear.",
        "Clients already tell you what they need. Read the requests.",
        "Ship the building blocks first. Then the vision."
      ]
    },

    {
      id: "access",
      title: "Roles & Access",
      kicker: "Permissions, departments and an AI role helper",
      line: "Describe the job. Get the permissions.",
      year: "2026",
      platform: "Web admin",
      role: "Sole designer",
      status: "Shipped · AI helper was my idea",
      color: "#7a4dde",
      tint: "#efe9fd",
      cover: "rbac-ai-role",
      thumbs: ["rbac-permissions-c", "rbac-departments-c"],
      tldr: {
        problem: "Nothing was gated. A crew member could open admin settings and change things, and often nobody could tell who did it.",
        did: "Designed roles and permissions by module and department, and a plain-language AI helper that fills in a new role for you.",
        result: "Shipped. Every client's data is gated by role now, and the AI helper (my idea) is live and working well."
      },
      beats: [
        { type: "chat", kicker: "Before", line: "Messages like this kept coming in.", msgs: [
          { from: "Client director", t: "Someone changed our asset settings overnight. Who did this?" },
          { from: "Us", t: "Looking into it… honestly, anyone with a login can edit that page.", me: true },
          { from: "Client director", t: "Anyone? Even the field crew?" }
        ] },
        { type: "line", kicker: "The goal", line: "Everyone gets the access their job needs. Nothing more.", sub: "Each client's admin sets up the roles themselves, so the setup had to be easy, not just safe." },
        { type: "pins", kicker: "The grid", line: "Complete, but exhausting.", src: "rbac-permissions-c", frame: "desktop", pins: [
          { x: .352, y: .182, t: "One module at a time", d: "Tabs keep the grid to a size you can read." },
          { x: .572, y: .27, t: "Internal vs consultant", d: "Two colour-coded groups of roles." },
          { x: .793, y: .429, t: "Show only what you need", d: "Hide the roles you're not editing." },
          { x: .474, y: .668, t: "Rows are actions", d: "Create, read, update, delete, import, export, transfer." }
        ] },
        { type: "compare", kicker: "My idea", line: "Write the role like you'd explain it to a coworker.", frame: "desktop",
          a: { src: "wf-access-ai", label: "Wireframe" }, b: { src: "rbac-ai-role", label: "Shipped" } },
        { type: "pins", kicker: "AI assist", line: "AI fills the grid. The admin decides.", src: "rbac-ai-role", frame: "desktop", pins: [
          { x: .5, y: .21, t: "Plain words in", d: "“Seasonal contractor: views assets, no deletes, no budgets.”" },
          { x: .86, y: .16, t: "AI fills the grid", d: "Permissions are pre-filled from the description." },
          { x: .62, y: .73, t: "Review every toggle", d: "The full detail stays visible. Nothing is hidden." },
          { x: .925, y: .94, t: "You decide", d: "Nothing is saved until the admin hits Create." }
        ] },
        { type: "pins", kicker: "Structure", line: "Departments carry the defaults.", src: "rbac-departments-c", frame: "desktop", pins: [
          { x: .134, y: .355, t: "Departments", d: "Public Works, Facilities, IT, Parks." },
          { x: .42, y: .332, t: "Modules per department", d: "Turn on what this team actually uses." },
          { x: .631, y: .447, t: "People inherit it", d: "Add someone and they start with sensible access." },
          { x: .961, y: .772, t: "Optional supervisor", d: "One switch, one person." }
        ] },
        { type: "stamps", kicker: "Where it is now", line: "Live for every client.", items: [
          ["Shipped", "Roles, permissions and departments."],
          ["My idea", "Describe a role, and AI fills the permissions."],
          ["Self-serve", "Each client's admin sets it up, no support ticket needed."]
        ] }
      ],
      learned: [
        "Put AI at the blank-page moment.",
        "For sensitive settings, keep every detail visible even when AI fills it in.",
        "Permissions are invisible until they're missing."
      ]
    },

    {
      id: "forkcast",
      title: "Forkcast",
      kicker: "Self-initiated app concept for indecisive eaters",
      line: "For everyone who's ever said “idk, you pick.”",
      year: "2026",
      platform: "Mobile app concept",
      role: "Solo: research, UX and UI",
      status: "Self-initiated concept",
      color: "#ff5b37",
      tint: "#fff1ec",
      cover: "fk3-cover",
      thumbs: ["fk3-home", "fk3-picks", "fk3-stamp"],
      tldr: {
        problem: "Picking dinner takes longer than eating it, especially in a group chat.",
        did: "Designed an app that learns your taste in ten seconds, forecasts tonight's dinner, and narrows it down to three picks. Still stuck? Spin the wheel or let friends vote.",
        result: "Every path ends in one answer. Trying a new cuisine earns a stamp in your taste passport."
      },
      beats: [
        { type: "chat", kicker: "The problem", line: "Every evening, the same conversation.", msgs: [
          { from: "Leo", t: "what do you want to eat?" },
          { from: "You", t: "idk, anything", me: true },
          { from: "Leo", t: "pizza?" },
          { from: "You", t: "hmm… not pizza", me: true },
          { from: "Leo", t: "ok so what then 😭" }
        ] },
        { type: "line", kicker: "The idea", line: "A weather forecast, but for dinner.", sub: "Food apps show you hundreds of places, which makes deciding harder. Forkcast reads your mood and gives you a forecast and just three picks." },
        { type: "flow", kicker: "How it works", line: "From “idk” to dinner, four ways out.", cols: 4, steps: [
          { t: "🍜 Learn your taste", d: "Tap the foods you love once. Ten seconds, no forms." },
          { t: "🌤️ Get a forecast", d: "Pick a mood. Forkcast predicts what you'll want tonight." },
          { t: "🎡 Still stuck?", d: "Spin a wheel between your three, or send them to friends to vote." },
          { t: "🛂 Collect stamps", d: "Rate dinner in one tap. New cuisines earn a passport stamp." }
        ] },
        { type: "strip", kicker: "First open", line: "Ten seconds to learn your taste.", shots: [
          { src: "fk3-welcome", frame: "phone", cap: "One promise: three picks, one dinner" },
          { src: "fk3-taste", frame: "phone", cap: "Tap what you love. Skip what you don't." }
        ] },
        { type: "proto", kicker: "Try it: dinner for one", line: "Decide dinner in four taps.", frame: "phone", screens: [
          { src: "fk3-home", hot: { x: .056, y: .615, w: .887, h: .071 }, say: "Tonight's forecast says noodles. Pick a mood or two, then tap Forecast my dinner." },
          { src: "fk3-picks", hot: { x: .056, y: .228, w: .887, h: .118 }, say: "Three picks, ranked by match. Tap the top one to see why." },
          { src: "fk3-detail", hot: { x: .364, y: .882, w: .579, h: .071 }, say: "Every pick explains itself in your words. Tap This one!" },
          { src: "fk3-match", hot: { x: .056, y: .845, w: .887, h: .071 }, say: "Decided. Where to go, how far, and a stamp if it's new to you." }
        ] },
        { type: "strip", kicker: "Still stuck?", line: "Let the wheel decide.", shots: [
          { src: "fk3-spin", frame: "phone", cap: "It only spins between your three. One free spin." },
          { src: "fk3-spun", frame: "phone", cap: "The answer, plus a nudge to try something new" }
        ] },
        { type: "proto", kicker: "Try it: dinner with friends", line: "End the group chat in two minutes.", frame: "phone", screens: [
          { src: "fk3-group", hot: { x: .056, y: .877, w: .887, h: .071 }, say: "Pick who's eating. Your three picks go to everyone. Tap Send to 3 friends." },
          { src: "fk3-vote", hot: { x: .056, y: .877, w: .887, h: .071 }, say: "Votes land live, with a timer so it can't drag on. Tap End vote now." },
          { src: "fk3-winner", hot: { x: .056, y: .877, w: .887, h: .071 }, say: "One winner, a podium, and a table booked for four." }
        ] },
        { type: "strip", kicker: "After dinner", line: "One tap makes tomorrow smarter.", shots: [
          { src: "fk3-rate", frame: "phone", cap: "Rate it in one tap. It tunes the next forecast." },
          { src: "fk3-stamp", frame: "phone", cap: "A new cuisine unlocks a stamp" },
          { src: "fk3-passport", frame: "phone", cap: "The taste passport, inspired by a life of moving around" }
        ] },
        { type: "strip", kicker: "Wireframes first", line: "Structure before flavour.", shots: [
          { src: "fk3-w1", frame: "phone", cap: "Home: forecast, moods, limits, one button" },
          { src: "fk3-w2", frame: "phone", cap: "Picks: three cards and two ways out" },
          { src: "fk3-w3", frame: "phone", cap: "Vote: live bars and a timer" }
        ] },
        { type: "choice", kicker: "Game design", line: "Reward curiosity. Never eating more.", items: [
          { t: "Streaks for trying new things", d: "The streak counts new dishes, not meals.", cut: false },
          { t: "Taste passport stamps", d: "One stamp per cuisine.", cut: false },
          { t: "Calorie counter", d: "Guilt isn't a game.", cut: true },
          { t: "Public leaderboard", d: "Dinner isn't a competition.", cut: true }
        ] }
      ],
      learned: [
        "Fewer options make decisions easier. Three beats thirty.",
        "Every path needs an ending. Indecision loves loops.",
        "Fun is a design decision, not a coat of paint."
      ]
    }
  ]
};
window.DD.byId = Object.fromEntries(window.DD.projects.map(p => [p.id, p]));
window.DD.dims = {"budget-planner": [2400, 1350], "dash-filter-line": [2400, 1934], "dash-filter": [2400, 1524], "dash-v1": [2400, 1582], "dash-v2-top": [2400, 1582], "dash-v2": [2400, 2730], "gauges": [2160, 3723], "map-measure": [2400, 1350], "map-pano": [2400, 1363], "patrol-mobile-collection": [605, 1308], "patrol-mobile-home": [603, 1308], "patrol-mobile-notsynced": [605, 1308], "patrol-mobile-synced": [403, 871], "patrol-tablet-gps": [1311, 603], "patrol-tablet-home": [1326, 603], "patrol-tablet-recording": [1311, 603], "patrol-tablet-summary": [1311, 603], "patrol-web-flagged": [2400, 1350], "patrol-web-item-b": [1920, 1080], "patrol-web-item": [2400, 1350], "patrol-web-segments": [2400, 1350], "rbac-ai-role": [2400, 1782], "rbac-departments": [2400, 1350], "rbac-permissions": [2400, 1350], "report-cover": [1224, 1584], "report-overview": [1224, 1584], "report-tables": [1224, 1584], "sensor-console": [2400, 1350], "wf-access-ai": [2400, 1782], "wf-patrol-check": [1311, 603], "wf-patrol-level": [1311, 603], "wf-patrol-rec": [1311, 603], "wf-patrol-remote": [1311, 603], "widget-library": [2400, 1730], "rbac-permissions-c": [1960, 848], "rbac-departments-c": [1930, 874], "fk3-welcome": [780, 1688], "fk3-stamp": [780, 1688], "fk3-spin": [780, 1688], "fk3-taste": [780, 1688], "fk3-match": [780, 1688], "fk3-home": [780, 1688], "fk3-winner": [780, 1688], "fk3-picks": [780, 1688], "fk3-cover": [1600, 1000], "fk3-rate": [780, 1688], "fk3-vote": [780, 1688], "fk3-spun": [780, 1688], "fk3-group": [780, 1688], "fk3-w3": [780, 1688], "fk3-w1": [780, 1688], "fk3-detail": [780, 1688], "fk3-w2": [780, 1688], "fk3-passport": [780, 1688]};
window.DD.img = id => "assets/" + id + ".webp";

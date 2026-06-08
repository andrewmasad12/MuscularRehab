export const businessConfig = {
  name: 'Masad Motion',
  tagline: 'Move Better. Understand Why.',
  subheading: 'Mobility • Recovery • Performance',
  location: 'Phoenix Metro',
  phone: '(480) 555-0198',
  email: 'hello@masadmotion.com',
  bookingUrl: 'https://calendar.google.com/calendar/u/0?cid=YW5kcmV3Lm1hc2FkMTJAZ21haWwuY29t',
  consultationUrl: 'https://calendar.google.com/calendar/u/0?cid=YW5kcmV3Lm1hc2FkMTJAZ21haWwuY29t',
  bookingPlatform: 'Google Calendar',
  appointmentScheduleUrl: 'https://calendar.google.com/calendar/u/0?cid=YW5kcmV3Lm1hc2FkMTJAZ21haWwuY29t',
  publicCalendarEmbedUrl:
    'https://calendar.google.com/calendar/embed?src=andrew.masad12%40gmail.com&ctz=America%2FPhoenix&mode=WEEK&showTitle=0&showPrint=0&showTabs=1&showCalendars=0',
  bookingNote:
    'Choose the session that fits your goal, review the live availability window, and reserve time for focused movement and recovery work.',
  bookingFlow: {
    title: 'Schedule a Masad Motion session',
    body:
      'Pick the session that matches your goal. Each booking is built around mobility, recovery, and a clearer understanding of how your body moves.',
    steps: ['Choose session', 'Pick an open time', 'Confirm booking'],
    timeZone: 'America/Phoenix',
    timeZoneOffset: '-07:00',
    bookingWindowDays: 21,
    slotIntervalMinutes: 30,
    minimumNoticeHours: 12,
    availability: [
      { day: 1, start: '09:00', end: '17:00' },
      { day: 2, start: '09:00', end: '17:00' },
      { day: 3, start: '09:00', end: '17:00' },
      { day: 4, start: '09:00', end: '17:00' },
      { day: 5, start: '09:00', end: '15:00' },
      { day: 6, start: '10:00', end: '14:00' },
    ],
    sessions: [
      {
        id: 'assisted-stretch',
        name: 'Assisted Stretch Session',
        duration: '60 min',
        durationMinutes: 60,
        price: 'From $95',
        description: 'A focused mobility and assisted stretch session for stiffness, recovery, and movement quality.',
      },
      {
        id: 'movement-assessment',
        name: 'Movement Assessment',
        duration: '45 min',
        durationMinutes: 45,
        price: 'From $75',
        description: 'A posture, range, and movement screen with practical mobility recommendations.',
      },
      {
        id: 'mobile-recovery',
        name: 'Mobile Recovery Session',
        duration: '60-90 min',
        durationMinutes: 90,
        price: 'Custom',
        description: 'On-site recovery for homes, teams, events, offices, and private training spaces.',
      },
    ],
  },
  instagramUrl: 'https://instagram.com/masadmotion',
  socials: [
    { label: 'Instagram', url: 'https://instagram.com/masadmotion' },
    { label: 'TikTok', url: 'https://tiktok.com/@masadmotion' },
    { label: 'YouTube', url: 'https://youtube.com/@masadmotion' },
  ],
  seo: {
    title: 'Masad Motion | Mobility, Recovery & Performance in Phoenix',
    description:
      'Premium assisted stretch therapy, movement assessment, mobility education, and recovery support for active adults and athletes in the Phoenix Metro area.',
    keywords:
      'Masad Motion, mobility Phoenix, recovery Phoenix, performance mobility, movement assessment, assisted stretch therapy Phoenix, mobility education, sports recovery Phoenix',
  },
  hero: {
    headline: 'Move Better. Understand Why.',
    subheadline: 'Mobility • Recovery • Performance',
    eyebrow: 'Personal movement science + assisted recovery',
    proofPoints: ['1:1 mobility sessions', 'Movement assessments', 'Recovery strategy'],
  },
  about: {
    eyebrow: 'About Masad Motion',
    title: 'A personal approach to movement that makes sense.',
    body:
      'Masad Motion blends assisted stretching, movement assessment, and recovery strategy into focused sessions built around how your body actually moves. The work is calm, precise, and collaborative, with practical education you can use between appointments.',
    brandExplanation:
      'Masad Motion is built for people who want more than a stretch. The goal is to help you move with more confidence, recover with intention, and understand the why behind what you feel.',
    stats: [
      { value: '60 min', label: 'Focused sessions' },
      { value: '1:1', label: 'Hands-on coaching' },
      { value: '3 step', label: 'Assess, restore, reinforce' },
    ],
  },
  founder: {
    eyebrow: 'Founder',
    title: 'Meet Andrew Masad',
    credentials: ["Bachelor's degree in Kinesiology", '4th Degree Black Belt', 'Certified Stretch Practitioner'],
    question: 'Why do people move the way they do?',
    body:
      'Through martial arts, kinesiology, mobility work, and working with hundreds of clients, I developed a movement-first approach focused on helping people understand their body, not just stretch it.',
    goal:
      'My goal is to help clients move better, recover intelligently, and understand the why behind what they feel.',
  },
  services: [
    {
      title: 'Assisted Stretch Therapy',
      description: 'Guided table-based stretching to help you move through available range with more ease.',
    },
    {
      title: 'Mobility Optimization',
      description: 'Targeted mobility work paired with breathing, control, and simple take-home drills.',
    },
    {
      title: 'Sports Recovery',
      description: 'Recovery-focused sessions for active weeks, heavy training blocks, and event preparation.',
    },
    {
      title: 'Posture & Movement Assessments',
      description: 'A clear look at positions, movement habits, and restrictions that may affect performance.',
    },
    {
      title: 'PNF Stretching',
      description: 'Contract-relax techniques used thoughtfully to support flexibility and active control.',
    },
    {
      title: 'Athletic Recovery Sessions',
      description: 'A premium reset for athletes who want better tissue readiness and movement quality.',
    },
    {
      title: 'Mobile Recovery Sessions',
      description: 'On-site recovery for homes, offices, teams, events, and private training facilities.',
    },
  ],
  howItWorks: [
    {
      step: '01',
      title: 'Assess movement',
      description: 'We look at range of motion, control, breathing, and movement patterns before choosing the work.',
    },
    {
      step: '02',
      title: 'Restore mobility',
      description: 'Assisted stretch techniques and mobility drills are used to create a calmer, more useful range.',
    },
    {
      step: '03',
      title: 'Reinforce with activation and control',
      description: 'You leave with simple cues and activation work to help the session carry into daily movement.',
    },
  ],
  benefits: [
    'Improve day-to-day movement confidence',
    'Support recovery between training sessions',
    'Reduce the feeling of stiffness after long workdays',
    'Build awareness of posture and movement habits',
    'Create a practical mobility plan you can repeat',
    'Feel more prepared for sport, lifting, travel, and life',
  ],
  philosophy: {
    title: 'Mobility is not just flexibility.',
    body:
      'Range of motion matters most when you can access it, control it, and trust it. Our work combines passive support with active reinforcement so mobility feels useful, not random.',
    principles: ['Assess before you stretch', 'Create range with intention', 'Own the motion you gain'],
  },
  transformations: [
    {
      area: 'Golf Mobility',
      before: 'Limited backswing rotation',
      after: 'Improved thoracic rotation and smoother swing mechanics',
    },
    {
      area: 'Desk Worker Recovery',
      before: 'Neck and shoulder stiffness',
      after: 'Improved movement comfort and reduced daily tension',
    },
    {
      area: 'Lower Body Mobility',
      before: 'Restricted squat depth and hip stiffness',
      after: 'Improved hip control and easier movement patterns',
    },
  ],
  testimonials: [
    {
      quote:
        'The session felt precise, not random. I understood what was limiting my movement and what to do about it.',
      name: 'Maya R.',
      role: 'Runner',
    },
    {
      quote:
        'Masad Motion helped me feel ready for training again without overselling anything. Calm, smart, and effective.',
      name: 'Jordan T.',
      role: 'Strength athlete',
    },
    {
      quote:
        'The mobile recovery session was exactly what our team needed after a long weekend of competition.',
      name: 'Alex C.',
      role: 'Coach',
    },
  ],
  faq: [
    {
      question: 'Is this physical therapy?',
      answer:
        'No. Sessions are wellness and performance-focused. We do not diagnose injuries or replace care from a licensed medical provider.',
    },
    {
      question: 'Who is this for?',
      answer:
        'Active adults, athletes, desk workers, and anyone who wants guided mobility work, better movement awareness, and a structured recovery session.',
    },
    {
      question: 'What should I wear?',
      answer:
        'Wear comfortable athletic clothing that lets you move. Shorts, joggers, leggings, and a fitted top usually work well.',
    },
    {
      question: 'Do you offer mobile sessions?',
      answer:
        'Yes. Mobile recovery sessions are available for private clients, teams, events, and workplace wellness bookings.',
    },
  ],
}

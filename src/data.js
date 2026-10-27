const local = (name) => `/images/${name}.jpg`;

export const menu = [
  { label: 'Home', href: '/' },
  { label: 'About us', href: '/about-us' },
  {
    label: 'Construction',
    href: '/residential-construction',
    sub: [
      { label: 'Residential Construction', href: '/residential-construction' },
      { label: 'Commercial Construction', href: '/commercial-construction' },
    ],
  },
  { label: 'Architect', href: '/architect' },
  { label: 'Real Estate', href: '/real-estate' },
  { label: 'Interior Designs', href: '/interior-designs' },
  { label: 'Renovations', href: '/renovations' },
  { label: 'Contact us', href: '/contact-us' },
];

// Top bar profile links. TODO: replace these with the company's real profile URLs.
export const socials = [
  { label: 'Facebook', icon: 'fa-facebook-f', href: 'https://www.facebook.com/' },
  { label: 'Twitter', icon: 'fa-twitter', href: 'https://twitter.com/' },
  { label: 'Instagram', icon: 'fa-instagram', href: 'https://www.instagram.com/' },
  { label: 'YouTube', icon: 'fa-youtube', href: 'https://www.youtube.com/' },
];

export const whatsappLink = 'https://wa.me/923002424517';

// One page per menu item (besides Home, About and Contact). `gallery` is the id of the image set shown on that page.
export const pages = [
  {
    path: 'residential-construction',
    title: 'Residential Construction',
    text: "Let us build your 'Dream Home' the way you always wanted it to be, by our expert team. From foundation to finishing, we handle design, planning and execution under one roof.",
    gallery: 'construction',
  },
  {
    path: 'commercial-construction',
    title: 'Commercial Construction',
    text: "Let us build your 'Business space' with hassle-free execution by our expert team. Offices, plazas and showrooms delivered on time and within budget.",
    gallery: 'construction',
  },
  {
    path: 'architect',
    title: 'Architect',
    text: 'Our architects craft visionary designs that bring your aspirations to life, creating spaces that are functional, beautiful and built to last.',
    gallery: 'architect',
  },
  {
    path: 'real-estate',
    title: 'Real Estate',
    text: 'Trust our seasoned real estate professionals to guide you through the market, providing insights and opportunities for buying, selling and investing in property.',
    img: '/images/service4.jpg',
  },
  {
    path: 'interior-designs',
    title: 'Interior Designs',
    text: 'Get a beautiful space plan and execution of high quality customized homes, from living rooms and kitchens to offices.',
    gallery: 'interior',
  },
  {
    path: 'renovations',
    title: 'Renovations',
    text: "Improve your existing space with our team of experts, who deliver your 'Project' with quality and care.",
    gallery: 'renovation',
  },
];

export const slides = [
  { title: 'Building for Tomorrow', text: 'Building Tomorrow, Today – Where Quality Meets Craftsmanship.', img: local('hero1') },
  { title: 'Building Perfection', text: 'Innovation in Every Beam, Precision in Every Joint.', img: local('hero2') },
  { title: 'Strength in Construction', text: 'Strength in Structure, Excellence in Execution.', img: local('hero3') },
  { title: 'Solid Foundations', text: 'Redefining Construction: Where Passion Meets Foundation.', img: local('hero4') },
];

const logoSet = ['logo-pdoha', 'logo-pec', 'logo-secp', 'logo-fbr'];
export const logos = [...logoSet, ...logoSet].map(local);

export const services = [
  { title: 'Residential Construction', text: "Let us, build your 'Dream Home' The most perfect way you always wanted it to be By Our Expert Team ...", img: local('service1'), page: '/residential-construction' },
  { title: 'Commercial Construction', text: "Let us, build your 'Business space' By Hassle-Free Execution With Our Expert Team ...", img: local('service2'), page: '/commercial-construction' },
  { title: 'Architect', text: 'Our architects craft visionary designs that bring your aspirations to life, creating spaces ...', img: local('service3'), page: '/architect' },
  { title: 'Real Estate', text: 'Trust our seasoned real estate professionals to guide you through the market, providing insights and opportunities ...', img: local('service4'), page: '/real-estate' },
  { title: 'Interior Designs', text: 'Gets Beautiful space plan & execution of high quality Customized Homes ...', img: local('service5'), page: '/interior-designs' },
  { title: 'Renovations', text: "Improve your existing space By Our Team of Experts To deliver you're 'Project' ...", img: local('service6'), page: '/renovations' },
];

// Each item: [label, image]
export const galleries = [
  {
    id: 'construction',
    page: '/residential-construction',
    title: 'Hire Best Construction Expert',
    items: [
      ['Residential', local('construction-residential')],
      ['Rent-house', local('construction-rent-house')],
      ['Luxury Villa', local('construction-luxury-villa')],
      ['Duplex/Bungalows', local('construction-duplex-bungalows')],
      ['Independent house', local('construction-independent-house')],
      ['Floor-Addition', local('construction-floor-addition')],
      ['Farm house', local('construction-farm-house')],
      ['Commercial', local('construction-commercial')],
    ],
  },
  {
    id: 'architect',
    page: '/architect',
    title: 'Hire Expert Architects & Building Designers',
    items: [
      ['2D / 3D Floor Plans & Elevations', local('architect-2d-3d-floor-plans-elevations')],
      ['Building Floor Plan Architect', local('architect-building-floor-plan-architect')],
      ['Commercial Floor Plans', local('architect-commercial-floor-plans')],
      ['Duplex House Floor Plans', local('architect-duplex-house-floor-plans')],
      ['Desperate House Plans', local('architect-desperate-house-plans')],
      ['Villa Floor Plan Designer', local('architect-villa-floor-plan-designer')],
      ['Kitchen & Bath Designers', local('architect-kitchen-bath-designers')],
      ['Landscape Architects', local('architect-landscape-architects')],
    ],
  },
  {
    id: 'interior',
    page: '/interior-designs',
    title: 'Hire Best Interior Decorator Expert',
    items: [
      ['Living Room Interiors', local('interior-living-room-interiors')],
      ['Kitchen Interiors', local('interior-kitchen-interiors')],
      ['Bedroom Interiors', local('interior-bedroom-interiors')],
      ['Bathroom Interiors', local('interior-bathroom-interiors')],
      ['Commercial Interiors', local('interior-commercial-interiors')],
      ['Home Decoration', local('interior-home-decoration')],
      ['Interior Decoration', local('interior-interior-decoration')],
      ['Office Interiors', local('interior-office-interiors')],
    ],
  },
  {
    id: 'renovation',
    page: '/renovations',
    title: 'Hire Best Renovation Expert',
    items: [
      ['Full Home Renovation', local('renovation-full-home-renovation')],
      ['Bathroom Renovation', local('renovation-bathroom-renovation')],
      ['Kitchen Renovation', local('renovation-kitchen-renovation')],
      ['Commercial Renovation', local('renovation-commercial-renovation')],
      ['Extension of Areas', local('renovation-extension-of-areas')],
      ['Restaurant Renovation', local('renovation-restaurant-renovation')],
      ['Compound wall construction', local('renovation-compound-wall-construction')],
      ['Living Room Renovation', local('renovation-living-room-renovation')],
    ],
  },
];

export const features = [
  ['fa-gears', 'End to End turn-Key Solutions with Tailor fit Packages', 'We provide an Excellent Designing, Planning & Execution Team under One Roof, from Estimate, Plan to handover'],
  ['fa-briefcase', 'Professional Service', 'Our Professionals verified in 2-tier background authentication process with skilled & trained Professionals'],
  ['fa-magnifying-glass', 'Huge Vendor Base', 'We will always be able to provide multiple material options for your needs.'],
  ['fa-square-check', 'Quality Assurance', 'list of QMS 400+ quality checks each stage of project'],
  ['fa-file-lines', 'Project Tracking & Process', 'digitally track your progress at every stage of your work site'],
  ['fa-box-open', 'Packages & cost', 'Providing diversified quotations based on the material of specification to choose the best from according to your budget & Lifestyle'],
  ['fa-clock', 'No Delay', 'Quick Start and on time delivery, with penalty for delay to contractors, no more cost overrun due to delay in home construction'],
  ['fa-eye', 'Transparency', 'Clear and detailed specification with quotation, Pre-agreed transparent at every level (budget, brands, materials purchase, progress, payment)'],
  ['fa-check', 'Warranty', 'On structure & Finishes'],
];

// Menu as one flat list, with the Construction sub-pages marked `sub: true` (used by the footer and the page sidebar)
export const flatMenu = menu.flatMap((m) => [
  { label: m.label, href: m.href, sub: false },
  ...(m.sub || []).map((s) => ({ ...s, sub: true })),
]);

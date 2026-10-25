const local = (name) => `/images/${name}.jpg`;
const web = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=700&q=70`;

export const menu = [
  { label: 'Home', href: '#home' },
  { label: 'About us', href: '#about' },
  {
    label: 'Construction',
    href: '#construction',
    sub: [
      { label: 'Residential Construction', href: '#construction' },
      { label: 'Commercial Construction', href: '#construction' },
    ],
  },
  { label: 'Architect', href: '#architect' },
  { label: 'Real Estate', href: '#services' },
  { label: 'Interior Designs', href: '#interior' },
  { label: 'Renovations', href: '#renovation' },
  { label: 'Contact us', href: '#contact' },
];

export const slides = [
  { title: 'Building for Tomorrow', text: 'Building Tomorrow, Today – Where Quality Meets Craftsmanship.', img: local('hero1') },
  { title: 'Building Perfection', text: 'Innovation in Every Beam, Precision in Every Joint.', img: local('hero2') },
];

const logoSet = ['logo-pdoha', 'logo-pec', 'logo-secp', 'logo-fbr'];
export const logos = [...logoSet, ...logoSet].map(local);

export const services = [
  { title: 'Residential Construction', text: "Let us, build your 'Dream Home' The most perfect way you always wanted it to be By Our Expert Team ...", img: local('service1') },
  { title: 'Commercial Construction', text: "Let us, build your 'Business space' By Hassle-Free Execution With Our Expert Team ...", img: local('service2') },
  { title: 'Architect', text: 'Our architects craft visionary designs that bring your aspirations to life, creating spaces ...', img: local('service3') },
  { title: 'Real Estate', text: 'Trust our seasoned real estate professionals to guide you through the market, providing insights and opportunities ...', img: local('service4') },
  { title: 'Interior Designs', text: 'Gets Beautiful space plan & execution of high quality Customized Homes ...', img: web('photo-1618221195710-dd6b41faaea6') },
  { title: 'Renovations', text: "Improve your existing space By Our Team of Experts To deliver you're 'Project' ...", img: web('photo-1581858726788-75bc0f6a952d') },
];

// Each item: [label, image]
export const galleries = [
  {
    id: 'construction',
    title: 'Hire Best Construction Expert',
    items: [
      ['Residential', web('photo-1570129477492-45c003edd2be')],
      ['Rent-house', local('construction-rent-house')],
      ['Luxury Villa', web('photo-1613490493576-7fde63acd811')],
      ['Duplex/Bungalows', local('construction-duplex-bungalows')],
      ['Independent house', local('construction-independent-house')],
      ['Floor-Addition', local('construction-floor-addition')],
      ['Farm house', web('photo-1564013799919-ab600027ffc6')],
      ['Commercial', local('construction-commercial')],
    ],
  },
  {
    id: 'architect',
    title: 'Hire Expert Architects & Building Designers',
    items: [
      ['2D / 3D Floor Plans & Elevations', local('architect-2d-3d-floor-plans-elevations')],
      ['Building Floor Plan Architect', web('photo-1581291518857-4e27b48ff24e')],
      ['Commercial Floor Plans', web('photo-1497366216548-37526070297c')],
      ['Duplex House Floor Plans', local('architect-duplex-house-floor-plans')],
      ['Desperate House Plans', local('architect-desperate-house-plans')],
      ['Villa Floor Plan Designer', local('architect-villa-floor-plan-designer')],
      ['Kitchen & Bath Designers', local('architect-kitchen-bath-designers')],
      ['Landscape Architects', web('photo-1558904541-efa843a96f01')],
    ],
  },
  {
    id: 'interior',
    title: 'Hire Best Interior Decorator Expert',
    items: [
      ['Living Room Interiors', web('photo-1618221195710-dd6b41faaea6')],
      ['Kitchen Interiors', local('interior-kitchen-interiors')],
      ['Bedroom Interiors', web('photo-1616594039964-ae9021a400a0')],
      ['Bathroom Interiors', web('photo-1552321554-5fefe8c9ef14')],
      ['Commercial Interiors', local('interior-commercial-interiors')],
      ['Home Decoration', local('interior-home-decoration')],
      ['Interior Decoration', local('interior-interior-decoration')],
      ['Office Interiors', local('interior-office-interiors')],
    ],
  },
  {
    id: 'renovation',
    title: 'Hire Best Renovation Expert',
    items: [
      ['Full Home Renovation', web('photo-1581858726788-75bc0f6a952d')],
      ['Bathroom Renovation', web('photo-1584622650111-993a426fbf0a')],
      ['Kitchen Renovation', local('renovation-kitchen-renovation')],
      ['Commercial Renovation', local('renovation-commercial-renovation')],
      ['Extension of Areas', local('renovation-extension-of-areas')],
      ['Restaurant Renovation', web('photo-1414235077428-338989a2e8c0')],
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

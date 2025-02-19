// @mui material components
// import Icon from '@mui/material/Icon';

// @mui icons
import ComputerIcon from '@mui/icons-material/Computer';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import BusinessIcon from '@mui/icons-material/Business';
import ContactMailIcon from '@mui/icons-material/ContactMail';

// Pages
// import SignIn from 'layouts/pages/authentication/sign-in';
import AboutUs from 'layouts/pages/landing-pages/about-us';
import ContactUs from 'layouts/pages/landing-pages/contact-us';

const routes = [
  {
    name: 'Solutions & Products',
    icon: <ComputerIcon />,
    columns: 2,
    rowsPerColumn: 5,
    collapse: [
      {
        name: 'AI & Blockchain',
        collapse: [
          {
            name: 'AI Services',
            route: '/services/ai',
          },
          {
            name: 'Blockchain Development',
            route: '/services/blockchain',
          },
          {
            name: 'Smart Contracts',
            route: '/services/smart-contracts',
          },
          {
            name: 'Web3 Integration',
            route: '/services/web3',
          },
        ],
      },
      {
        name: 'Enterprise Solutions',
        collapse: [
          {
            name: 'AI Analytics Platform',
            route: '/solutions/ai-analytics',
          },
          {
            name: 'DeFi Solutions',
            route: '/solutions/defi',
          },
          {
            name: 'NFT Marketplace',
            route: '/solutions/nft',
          },
          {
            name: 'Data Security Tools',
            route: '/solutions/security',
          },
        ],
      },
      {
        name: 'Hardware Store',
        collapse: [
          {
            name: 'Mining Equipment',
            route: '/hardware/mining',
          },
          {
            name: 'AI Development Kits',
            route: '/hardware/ai-kits',
          },
          {
            name: 'Networking Hardware',
            route: '/hardware/networking',
          },
          {
            name: 'Accessories',
            route: '/hardware/accessories',
          },
        ],
      },
    ],
  },
  {
    name: 'Education & Resources',
    icon: <SchoolIcon />,
    columns: 2,
    rowsPerColumn: 4,
    collapse: [
      {
        name: 'Online Courses',
        collapse: [
          {
            name: 'Blockchain Fundamentals',
            route: '/courses/blockchain',
          },
          {
            name: 'Advanced Smart Contracts',
            route: '/courses/smart-contracts',
          },
          {
            name: 'AI & Machine Learning',
            route: '/courses/ai-ml',
          },
          {
            name: 'Web3 Development',
            route: '/courses/web3',
          },
        ],
      },
      {
        name: 'Physical Classes',
        collapse: [
          {
            name: 'Class Schedule',
            route: '/classes/schedule',
          },
          {
            name: 'Campus Locations',
            route: '/classes/locations',
          },
          {
            name: 'Student Portal',
            route: '/classes/portal',
          },
        ],
      },
      {
        name: 'Learning Paths',
        collapse: [
          {
            name: 'Certification Programs',
            route: '/learning/certification',
          },
          {
            name: 'Blog',
            route: '/learning/blog',
          },
          {
            name: 'Whitepapers',
            route: '/learning/whitepapers',
          },
          {
            name: 'Documentation',
            route: '/learning/docs',
          },
          {
            name: 'API References',
            route: '/learning/api',
          },
          {
            name: 'Community Forum',
            route: '/learning/forum',
          },
        ],
      },
    ],
  },
  {
    name: 'Technology',
    icon: <CodeIcon />,
    columns: 1,
    rowsPerColumn: 6,
    collapse: [
      {
        name: 'tech stack',
        collapse: [
          {
            name: 'Our Tech Stack',
            route: '/tech/stack',
          },
          {
            name: 'Innovation Lab',
            route: '/tech/lab',
          },
          {
            name: 'Research & Development',
            route: '/tech/research',
          },
          {
            name: 'Case Studies',
            route: '/tech/cases',
          },
          {
            name: 'Documentation',
            route: '/tech/docs',
          },
          {
            name: 'Developer Portal',
            route: '/tech/portal',
          },
        ],
      },
    ],
  },
  {
    name: 'About Us',
    icon: <BusinessIcon />,
    columns: 1,
    rowsPerColumn: 6,
    collapse: [
      {
        name: 'company',
        collapse: [
          {
            name: 'Company',
            route: '/pages/landing-pages/about-us',
            component: <AboutUs />,
          },
          {
            name: 'Team',
            route: '/about/team',
          },
          {
            name: 'Partners',
            route: '/about/partners',
          },
          {
            name: 'Careers',
            route: '/about/careers',
          },
          {
            name: 'Press Room',
            route: '/about/press',
          },
          {
            name: 'Find Our Campuses',
            route: '/about/campuses',
          },
        ],
      },
    ],
  },
  {
    name: 'Contact',
    icon: <ContactMailIcon />,
    columns: 1,
    rowsPerColumn: 4,
    collapse: [
      {
        name: 'contact',
        collapse: [
          {
            name: 'Get in Touch',
            route: '/pages/landing-pages/contact-us',
            component: <ContactUs />,
          },
          {
            name: 'Request Demo',
            route: '/contact/demo',
          },
          {
            name: 'Support',
            route: '/contact/support',
          },
          {
            name: 'Student Support',
            route: '/contact/student-support',
          },
        ],
      },
    ],
  },
];

export default routes;

// // @mui material components
// import Icon from '@mui/material/Icon';

// // @mui icons
// import GitHubIcon from '@mui/icons-material/GitHub';

// // Pages
// import AboutUs from 'layouts/pages/landing-pages/about-us';
// import ContactUs from 'layouts/pages/landing-pages/contact-us';
// import Author from 'layouts/pages/landing-pages/author';
// import SignIn from 'layouts/pages/authentication/sign-in';

// // Sections
// import PageHeaders from 'layouts/sections/page-sections/page-headers';
// import Features from 'layouts/sections/page-sections/featuers';
// import Navbars from 'layouts/sections/navigation/navbars';
// import NavTabs from 'layouts/sections/navigation/nav-tabs';
// import Pagination from 'layouts/sections/navigation/pagination';
// import Inputs from 'layouts/sections/input-areas/inputs';
// import Forms from 'layouts/sections/input-areas/forms';
// import Alerts from 'layouts/sections/attention-catchers/alerts';
// import Modals from 'layouts/sections/attention-catchers/modals';
// import TooltipsPopovers from 'layouts/sections/attention-catchers/tooltips-popovers';
// import Avatars from 'layouts/sections/elements/avatars';
// import Badges from 'layouts/sections/elements/badges';
// import BreadcrumbsEl from 'layouts/sections/elements/breadcrumbs';
// import Buttons from 'layouts/sections/elements/buttons';
// import Dropdowns from 'layouts/sections/elements/dropdowns';
// import ProgressBars from 'layouts/sections/elements/progress-bars';
// import Toggles from 'layouts/sections/elements/toggles';
// import Typography from 'layouts/sections/elements/typography';

// const routes = [
//   {
//     name: 'pages',
//     icon: <Icon>dashboard</Icon>,
//     columns: 1,
//     rowsPerColumn: 2,
//     collapse: [
//       {
//         name: 'landing pages',
//         collapse: [
//           {
//             name: 'about us',
//             route: '/pages/landing-pages/about-us',
//             component: <AboutUs />,
//           },
//           {
//             name: 'contact us',
//             route: '/pages/landing-pages/contact-us',
//             component: <ContactUs />,
//           },
//           {
//             name: 'author',
//             route: '/pages/landing-pages/author',
//             component: <Author />,
//           },
//         ],
//       },
//       {
//         name: 'account',
//         collapse: [
//           {
//             name: 'sign in',
//             route: '/pages/authentication/sign-in',
//             component: <SignIn />,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: 'sections',
//     icon: <Icon>view_day</Icon>,
//     collapse: [
//       {
//         name: 'page sections',
//         description: 'See all sections',
//         dropdown: true,
//         collapse: [
//           {
//             name: 'page headers',
//             route: '/sections/page-sections/page-headers',
//             component: <PageHeaders />,
//           },
//           {
//             name: 'features',
//             route: '/sections/page-sections/features',
//             component: <Features />,
//           },
//         ],
//       },
//       {
//         name: 'navigation',
//         description: 'See all navigations',
//         dropdown: true,
//         collapse: [
//           {
//             name: 'navbars',
//             route: '/sections/navigation/navbars',
//             component: <Navbars />,
//           },
//           {
//             name: 'nav tabs',
//             route: '/sections/navigation/nav-tabs',
//             component: <NavTabs />,
//           },
//           {
//             name: 'pagination',
//             route: '/sections/navigation/pagination',
//             component: <Pagination />,
//           },
//         ],
//       },
//       {
//         name: 'input areas',
//         description: 'See all input areas',
//         dropdown: true,
//         collapse: [
//           {
//             name: 'inputs',
//             route: '/sections/input-areas/inputs',
//             component: <Inputs />,
//           },
//           {
//             name: 'forms',
//             route: '/sections/input-areas/forms',
//             component: <Forms />,
//           },
//         ],
//       },
//       {
//         name: 'attention catchers',
//         description: 'See all examples',
//         dropdown: true,
//         collapse: [
//           {
//             name: 'alerts',
//             route: '/sections/attention-catchers/alerts',
//             component: <Alerts />,
//           },
//           {
//             name: 'modals',
//             route: '/sections/attention-catchers/modals',
//             component: <Modals />,
//           },
//           {
//             name: 'tooltips & popovers',
//             route: '/sections/attention-catchers/tooltips-popovers',
//             component: <TooltipsPopovers />,
//           },
//         ],
//       },
//       {
//         name: 'elements',
//         description: 'See all 32 examples',
//         dropdown: true,
//         collapse: [
//           {
//             name: 'avatars',
//             route: '/sections/elements/avatars',
//             component: <Avatars />,
//           },
//           {
//             name: 'badges',
//             route: '/sections/elements/badges',
//             component: <Badges />,
//           },
//           {
//             name: 'breadcrumbs',
//             route: '/sections/elements/breadcrumbs',
//             component: <BreadcrumbsEl />,
//           },
//           {
//             name: 'buttons',
//             route: '/sections/elements/buttons',
//             component: <Buttons />,
//           },
//           {
//             name: 'dropdowns',
//             route: '/sections/elements/dropdowns',
//             component: <Dropdowns />,
//           },
//           {
//             name: 'progress bars',
//             route: '/sections/elements/progress-bars',
//             component: <ProgressBars />,
//           },
//           {
//             name: 'toggles',
//             route: '/sections/elements/toggles',
//             component: <Toggles />,
//           },
//           {
//             name: 'typography',
//             route: '/sections/elements/typography',
//             component: <Typography />,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: 'docs',
//     icon: <Icon>article</Icon>,
//     collapse: [
//       {
//         name: 'getting started',
//         description: 'All about overview, quick start, license and contents',
//         href: 'https://www.creative-tim.com/learning-lab/react/quick-start/material-kit/',
//       },
//       {
//         name: 'foundation',
//         description: 'See our colors, icons and typography',
//         href: 'https://www.creative-tim.com/learning-lab/react/colors/material-kit/',
//       },
//       {
//         name: 'components',
//         description: 'Explore our collection of fully designed components',
//         href: 'https://www.creative-tim.com/learning-lab/react/alerts/material-kit/',
//       },
//       {
//         name: 'plugins',
//         description: 'Check how you can integrate our plugins',
//         href: 'https://www.creative-tim.com/learning-lab/react/datepicker/material-kit/',
//       },
//     ],
//   },
//   {
//     name: 'github',
//     icon: <GitHubIcon />,
//     href: 'https://www.github.com/creativetimofficial/material-kit-react',
//   },
// ];
// export default routes;

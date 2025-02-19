// @mui icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logo from 'assets/images/logos/klontek-logo.png';

const date = new Date().getFullYear();

export default {
  brand: {
    name: 'Klontek',
    image: logo,
    route: '/',
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: 'https://www.facebook.com/klontek',
    },
    {
      icon: <TwitterIcon />,
      link: 'https://twitter.com/klontek',
    },
    {
      icon: <LinkedInIcon />,
      link: 'https://www.linkedin.com/company/klontek',
    },
    {
      icon: <GitHubIcon />,
      link: 'https://github.com/klontek',
    },
  ],
  menus: [
    {
      name: 'Company',
      items: [
        { name: 'About Us', route: '/about-us' },
        { name: 'Careers', route: '/careers' },
        { name: 'Press', route: '/press' },
        { name: 'Partners', route: '/partners' },
      ],
    },
    {
      name: 'Resources',
      items: [
        { name: 'Blog', route: '/blog' },
        { name: 'Whitepapers', route: '/whitepapers' },
        { name: 'Documentation', route: '/docs' },
        { name: 'Community Forum', route: '/forum' },
      ],
    },
    {
      name: 'Legal',
      items: [
        { name: 'Privacy Policy', route: '/privacy' },
        { name: 'Terms of Service', route: '/terms' },
        { name: 'Licenses', route: '/licenses' },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Klontek.
    </MKTypography>
  ),
};


// // @mui icons
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import YouTubeIcon from '@mui/icons-material/YouTube';

// // Material Kit 2 React components
// import MKTypography from 'components/MKTypography';

// // Images
// import logoCT from 'assets/images/logo-ct-dark.png';

// const date = new Date().getFullYear();

// export default {
//   brand: {
//     name: 'Material Kit 2',
//     image: logoCT,
//     route: '/',
//   },
//   socials: [
//     {
//       icon: <FacebookIcon />,
//       link: 'https://www.facebook.com/CreativeTim/',
//     },
//     {
//       icon: <TwitterIcon />,
//       link: 'https://twitter.com/creativetim',
//     },
//     {
//       icon: <GitHubIcon />,
//       link: 'https://github.com/creativetimofficial',
//     },
//     {
//       icon: <YouTubeIcon />,
//       link: 'https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w',
//     },
//   ],
//   menus: [
//     {
//       name: 'company',
//       items: [
//         { name: 'about us', href: 'https://www.creative-tim.com/presentation' },
//         {
//           name: 'freebies',
//           href: 'https://www.creative-tim.com/templates/free',
//         },
//         {
//           name: 'premium tools',
//           href: 'https://www.creative-tim.com/templates/premium',
//         },
//         { name: 'blog', href: 'https://www.creative-tim.com/blog' },
//       ],
//     },
//     {
//       name: 'resources',
//       items: [
//         { name: 'illustrations', href: 'https://iradesign.io/' },
//         { name: 'bits & snippets', href: 'https://www.creative-tim.com/bits' },
//         {
//           name: 'affiliate program',
//           href: 'https://www.creative-tim.com/affiliates/new',
//         },
//       ],
//     },
//     {
//       name: 'help & support',
//       items: [
//         { name: 'contact us', href: 'https://www.creative-tim.com/contact-us' },
//         {
//           name: 'knowledge center',
//           href: 'https://www.creative-tim.com/knowledge-center',
//         },
//         {
//           name: 'custom development',
//           href: 'https://services.creative-tim.com/',
//         },
//         {
//           name: 'sponsorships',
//           href: 'https://www.creative-tim.com/sponsorships',
//         },
//       ],
//     },
//     {
//       name: 'legal',
//       items: [
//         {
//           name: 'terms & conditions',
//           href: 'https://www.creative-tim.com/terms',
//         },
//         {
//           name: 'privacy policy',
//           href: 'https://www.creative-tim.com/privacy',
//         },
//         {
//           name: 'licenses (EULA)',
//           href: 'https://www.creative-tim.com/license',
//         },
//       ],
//     },
//   ],
//   copyright: (
//     <MKTypography variant="button" fontWeight="regular">
//       All rights reserved. Copyright &copy; {date} Material Kit by{' '}
//       <MKTypography
//         component="a"
//         href="https://www.creative-tim.com"
//         target="_blank"
//         rel="noreferrer"
//         variant="button"
//         fontWeight="regular"
//       >
//         Creative Tim
//       </MKTypography>
//       .
//     </MKTypography>
//   ),
// };

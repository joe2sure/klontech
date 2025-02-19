// @mui material components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Icon from '@mui/material/Icon';

// Material Kit 2 React components
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';

function BuiltByDevelopers() {
  const bgImage =
    'https://images.unsplash.com/photo-1634117622592-114e3029f1d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80';

  return (
    <MKBox
      display="flex"
      alignItems="center"
      borderRadius="xl"
      my={2}
      py={6}
      sx={{
        backgroundImage: ({
          functions: { linearGradient, rgba },
          palette: { gradients },
        }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.8),
            rgba(gradients.dark.state, 0.8)
          )}, url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.02)',
        },
      }}
    >
      <Container>
        <Grid container item xs={12} lg={6} sx={{ ml: { xs: 0, lg: 6 } }}>
          <MKTypography variant="h4" color="white" fontWeight="bold">
            Built by Innovators
          </MKTypography>
          <MKTypography variant="h1" color="white" mb={1}>
            Cutting-Edge Technology
          </MKTypography>
          <MKTypography variant="body1" color="white" opacity={0.8} mb={2}>
            From AI-driven analytics to blockchain-powered solutions, we provide the tools and expertise to transform your business.
          </MKTypography>
          <MKTypography
            component="a"
            href="/solutions"
            target="_blank"
            rel="noreferrer"
            variant="body2"
            color="white"
            fontWeight="regular"
            sx={{
              display: 'flex',
              alignItems: 'center',
              '& .material-icons-round': {
                fontSize: '1.125rem',
                transform: `translateX(3px)`,
                transition: 'transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)',
              },
              '&:hover .material-icons-round, &:focus .material-icons-round': {
                transform: `translateX(6px)`,
              },
            }}
          >
            Explore Solutions <Icon sx={{ fontWeight: 'bold' }}>arrow_forward</Icon>
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}
export default BuiltByDevelopers;


// // @mui material components
// import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
// import Icon from '@mui/material/Icon';

// // Material Kit 2 React components
// import MKBox from 'components/MKBox';
// import MKTypography from 'components/MKTypography';

// function BuiltByDevelopers() {
//   const bgImage =
//     'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/desktop.jpg';

//   return (
//     <MKBox
//       display="flex"
//       alignItems="center"
//       borderRadius="xl"
//       my={2}
//       py={6}
//       sx={{
//         backgroundImage: ({
//           functions: { linearGradient, rgba },
//           palette: { gradients },
//         }) =>
//           `${linearGradient(
//             rgba(gradients.dark.main, 0.8),
//             rgba(gradients.dark.state, 0.8)
//           )}, url(${bgImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       <Container>
//         <Grid container item xs={12} lg={6} sx={{ ml: { xs: 0, lg: 6 } }}>
//           <MKTypography variant="h4" color="white" fontWeight="bold">
//             Built by developers
//           </MKTypography>
//           <MKTypography variant="h1" color="white" mb={1}>
//             Complex Documentation
//           </MKTypography>
//           <MKTypography variant="body1" color="white" opacity={0.8} mb={2}>
//             From colors, cards, typography to complex elements, you will find
//             the full documentation. Play with the utility classes and you will
//             create unlimited combinations for our components.
//           </MKTypography>
//           <MKTypography
//             component="a"
//             href="https://www.creative-tim.com/learning-lab/react/overview/material-kit/"
//             target="_blank"
//             rel="noreferrer"
//             variant="body2"
//             color="white"
//             fontWeight="regular"
//             sx={{
//               display: 'flex',
//               alignItems: 'center',

//               '& .material-icons-round': {
//                 fontSize: '1.125rem',
//                 transform: `translateX(3px)`,
//                 transition: 'transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)',
//               },

//               '&:hover .material-icons-round, &:focus .material-icons-round': {
//                 transform: `translateX(6px)`,
//               },
//             }}
//           >
//             Read docs <Icon sx={{ fontWeight: 'bold' }}>arrow_forward</Icon>
//           </MKTypography>
//         </Grid>
//       </Container>
//     </MKBox>
//   );
// }

// export default BuiltByDevelopers;

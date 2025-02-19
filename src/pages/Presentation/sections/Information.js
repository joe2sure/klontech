// @mui material components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

// Material Kit 2 React components
import MKBox from 'components/MKBox';

// Material Kit 2 React examples
import RotatingCard from 'examples/Cards/RotatingCard';
import RotatingCardFront from 'examples/Cards/RotatingCard/RotatingCardFront';
import RotatingCardBack from 'examples/Cards/RotatingCard/RotatingCardBack';
import DefaultInfoCard from 'examples/Cards/InfoCards/DefaultInfoCard';

// Images
import bgFront from 'assets/images/rotating-card-bg-front.jpeg';
import bgBack from 'assets/images/rotating-card-bg-back.jpeg';


function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid
          container
          item
          xs={11}
          spacing={3}
          alignItems="center"
          sx={{ mx: 'auto' }}
        >
          <Grid item xs={12} lg={4} sx={{ mx: 'auto' }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Explore Our
                    <br />
                    Solutions
                  </>
                }
                description="Discover how our AI, blockchain, and Web3 solutions can transform your business."
              />
              <RotatingCardBack
                image={bgBack}
                title="Learn More"
                description="From AI analytics to NFT marketplaces, we provide end-to-end solutions for the digital age."
                action={{
                  type: 'internal',
                  route: '/solutions',
                  label: 'Explore Solutions',
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: 'auto' }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="code"
                  title="AI & Blockchain"
                  description="Leverage cutting-edge AI and blockchain technologies to drive innovation."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="school"
                  title="Education & Resources"
                  description="Access online courses, certifications, and learning paths to stay ahead."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="business"
                  title="Enterprise Solutions"
                  description="Scalable solutions for businesses, from DeFi to data security."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="hardware"
                  title="Hardware Store"
                  description="High-performance mining equipment and AI development kits."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;

// function Information() {
//   return (
//     <MKBox component="section" py={6} my={6}>
//       <Container>
//         <Grid
//           container
//           item
//           xs={11}
//           spacing={3}
//           alignItems="center"
//           sx={{ mx: 'auto' }}
//         >
//           <Grid item xs={12} lg={4} sx={{ mx: 'auto' }}>
//             <RotatingCard>
//               <RotatingCardFront
//                 image={bgFront}
//                 icon="touch_app"
//                 title={
//                   <>
//                     Feel the
//                     <br />
//                     Material Kit
//                   </>
//                 }
//                 description="All the MUI components that you need in a development have been re-design with the new look."
//               />
//               <RotatingCardBack
//                 image={bgBack}
//                 title="Discover More"
//                 description="You will save a lot of time going from prototyping to full-functional code because all elements are implemented."
//                 action={{
//                   type: 'internal',
//                   route: '/sections/page-sections/page-headers',
//                   label: 'start with header',
//                 }}
//               />
//             </RotatingCard>
//           </Grid>
//           <Grid item xs={12} lg={7} sx={{ ml: 'auto' }}>
//             <Grid container spacing={3}>
//               <Grid item xs={12} md={6}>
//                 <DefaultInfoCard
//                   icon="content_copy"
//                   title="Full Documentation"
//                   description="Built by developers for developers. Check the foundation and you will find
//                     everything inside our documentation."
//                 />
//               </Grid>
//               <Grid item xs={12} md={6}>
//                 <DefaultInfoCard
//                   icon="flip_to_front"
//                   title="MUI Ready"
//                   description="The world's most popular react components library for building user interfaces."
//                 />
//               </Grid>
//             </Grid>
//             <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
//               <Grid item xs={12} md={6}>
//                 <DefaultInfoCard
//                   icon="price_change"
//                   title="Save Time & Money"
//                   description="Creating your design from scratch with dedicated designers can be very expensive. Start with our Design System."
//                 />
//               </Grid>
//               <Grid item xs={12} md={6}>
//                 <DefaultInfoCard
//                   icon="devices"
//                   title="Fully Responsive"
//                   description="Regardless of the screen size, the website content will naturally fit the given resolution."
//                 />
//               </Grid>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Container>
//     </MKBox>
//   );
// }

// export default Information;

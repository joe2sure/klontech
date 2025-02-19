// @mui material components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

// Material Kit 2 React components
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';


// Learning card component
import LearningCard from 'examples/Cards/LearningCard';

function Learning() {
  return (
    <MKBox component="section" py={6}>
      <Container>
        <MKTypography variant="h2" textAlign="center" mb={4}>
          Learn and Grow
        </MKTypography>
        <MKTypography variant="body1" textAlign="center" mb={6}>
          Explore our courses and resources to stay ahead in the world of AI, blockchain, and Web3.
        </MKTypography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <LearningCard
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              title="Blockchain Fundamentals"
              description="Master the basics of blockchain technology and its applications."
              action={{
                type: 'internal',
                route: '/courses/blockchain',
                label: 'Enroll Now',
              }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <LearningCard
              image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              title="AI & Machine Learning"
              description="Learn how to build and deploy AI models for real-world applications."
              action={{
                type: 'internal',
                route: '/courses/ai-ml',
                label: 'Enroll Now',
              }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <LearningCard
              image="https://images.unsplash.com/photo-1634117622592-114e3029f1d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              title="Web3 Development"
              description="Build decentralized applications with Web3 technologies."
              action={{
                type: 'internal',
                route: '/courses/web3',
                label: 'Enroll Now',
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}
export default Learning;
// @mui material components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

// Material Kit 2 React components
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';


// Pricing card component
import PricingCard from 'examples/Cards/PricingCard';

function Pricing() {
  return (
    <MKBox component="section" py={6}>
      <Container>
        <MKTypography variant="h2" textAlign="center" mb={4}>
          Flexible Pricing Plans
        </MKTypography>
        <MKTypography variant="body1" textAlign="center" mb={6}>
          Choose a plan that fits your needs and start building the future today.
        </MKTypography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={4}>
            <PricingCard
              title="Starter"
              price="$99"
              features={[
                'AI Analytics Platform',
                'Basic Blockchain Tools',
                'Community Support',
              ]}
              action={{
                type: 'internal',
                route: '/pricing/starter',
                label: 'Get Started',
              }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <PricingCard
              title="Professional"
              price="$299"
              features={[
                'Advanced AI & Blockchain Tools',
                'Priority Support',
                'API Access',
              ]}
              action={{
                type: 'internal',
                route: '/pricing/professional',
                label: 'Get Started',
              }}
              highlighted
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <PricingCard
              title="Enterprise"
              price="Custom"
              features={[
                'Custom AI & Blockchain Solutions',
                'Dedicated Support',
                'Onboarding & Training',
              ]}
              action={{
                type: 'internal',
                route: '/pricing/enterprise',
                label: 'Contact Us',
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}
export default Pricing;
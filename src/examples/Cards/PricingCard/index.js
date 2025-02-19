// @mui material components
import Card from '@mui/material/Card';
import Icon from '@mui/material/Icon';

// Material Kit 2 React components
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';
import MKButton from 'components/MKButton';

// Prop-types for typechecking
import PropTypes from 'prop-types';

function PricingCard({ title, price, features, action, highlighted }) {
  return (
    <Card
      sx={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      <MKBox
        p={3}
        textAlign="center"
        bgColor={highlighted ? 'info' : 'white'}
        color={highlighted ? 'white' : 'text'}
        borderRadius="xl"
        shadow={highlighted ? 'lg' : 'md'}
        sx={{
          transform: 'translateZ(30px)',
        }}
      >
        <MKTypography variant="h4" fontWeight="bold" mb={2}>
          {title}
        </MKTypography>
        <MKTypography variant="h1" fontWeight="bold" mb={3}>
          {price}
        </MKTypography>
        <MKBox component="ul" p={0} m={0} sx={{ listStyle: 'none' }}>
          {features.map((feature, index) => (
            <MKTypography
              key={index}
              component="li"
              variant="body1"
              py={1}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Icon sx={{ mr: 1 }}>check</Icon>
              {feature}
            </MKTypography>
          ))}
        </MKBox>
        <MKBox mt={4}>
          <MKButton
            variant={highlighted ? 'contained' : 'outlined'}
            color={highlighted ? 'white' : 'info'}
            fullWidth
            onClick={action.route ? () => window.location.href = action.route : null}
          >
            {action.label}
          </MKButton>
        </MKBox>
      </MKBox>
    </Card>
  );
}

// Prop-type validations
PricingCard.propTypes = {
  title: PropTypes.string.isRequired, // Validates that `title` is a required string
  price: PropTypes.string.isRequired, // Validates that `price` is a required string
  features: PropTypes.arrayOf(PropTypes.string).isRequired, // Validates that `features` is an array of strings
  action: PropTypes.shape({
    label: PropTypes.string.isRequired, // Validates that `action.label` is a required string
    route: PropTypes.string, // Validates that `action.route` is an optional string
  }).isRequired, // Validates that `action` is a required object
  highlighted: PropTypes.bool, // Validates that `highlighted` is an optional boolean
};

// Default props
PricingCard.defaultProps = {
  highlighted: false, // Sets the default value for `highlighted` to `false`
};

export default PricingCard;
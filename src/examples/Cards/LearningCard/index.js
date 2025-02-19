// @mui material components
import Card from '@mui/material/Card';
// import Icon from '@mui/material/Icon';

// Material Kit 2 React components
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';
import MKButton from 'components/MKButton';

// Prop-types for typechecking
import PropTypes from 'prop-types';

function LearningCard({ image, title, description, action }) {
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
        position="relative"
        borderRadius="lg"
        overflow="hidden"
        height="200px"
        sx={{
          transform: 'translateZ(30px)',
        }}
      >
        <MKBox
          component="img"
          src={image}
          alt={title}
          width="100%"
          height="100%"
          sx={{ objectFit: 'cover' }}
        />
        <MKBox
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          bgColor="rgba(0, 0, 0, 0.5)"
        />
      </MKBox>
      <MKBox p={3} textAlign="center">
        <MKTypography variant="h5" fontWeight="bold" mb={2}>
          {title}
        </MKTypography>
        <MKTypography variant="body1" mb={3}>
          {description}
        </MKTypography>
        <MKButton
          variant="gradient"
          color="info"
          fullWidth
          onClick={action.route ? () => window.location.href = action.route : null}
        >
          {action.label}
        </MKButton>
      </MKBox>
    </Card>
  );
}

// Prop-type validations
LearningCard.propTypes = {
  image: PropTypes.string.isRequired, // Validates that `image` is a required string
  title: PropTypes.string.isRequired, // Validates that `title` is a required string
  description: PropTypes.string.isRequired, // Validates that `description` is a required string
  action: PropTypes.shape({
    label: PropTypes.string.isRequired, // Validates that `action.label` is a required string
    route: PropTypes.string, // Validates that `action.route` is an optional string
  }).isRequired, // Validates that `action` is a required object
};

export default LearningCard;
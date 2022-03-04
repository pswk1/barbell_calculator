import { Box, Heading } from '@chakra-ui/react';

const Banner: React.FC = () => {
	return (
		<Box mt={12} textAlign='center' p='4' w='100%' height={16}>
			<Heading data-testid='banner' size='2xl'>Barbell Weight Calculator</Heading>
		</Box>
	);
};

export default Banner;

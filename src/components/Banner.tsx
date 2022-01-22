import { Box, Heading } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

const Banner: React.FC = () => {
	return (
		<Box textAlign='center' p='4' w='100%' height={16}>
			<Heading size='2xl'>Barbell Weight Calculator</Heading>
			<ColorModeSwitcher mt={1} />
		</Box>
	);
};

export default Banner;

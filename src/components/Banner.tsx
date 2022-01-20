import { Box, Heading } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

const Banner = () => {
	return (
		<Box textAlign='center' p='4' w='100%' height={16}>
			<Heading>Barbell Weight Calculator</Heading>
			<ColorModeSwitcher />
		</Box>
	);
};

export default Banner;

import * as React from 'react';
import { ChakraProvider, Link, Box, theme } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import Banner from './components/Banner';
import Barbell from './components/Barbell';

const year = new Date().getFullYear();

export const App = () => (
	<ChakraProvider theme={theme}>
		<Banner />
		<Barbell />
		<Box marginY={8} textAlign={'center'}>
			Developed by {' '}
			<Link href='https://www.linkedin.com/in/peterswkang/' isExternal>
				 Peter Kang <ExternalLinkIcon mx='2px' />
			</Link>
			{' '} {year}
		</Box>
	</ChakraProvider>
);

import * as React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Banner from './components/Banner';

export const App = () => (
	<ChakraProvider theme={theme}>
		<Banner />
	</ChakraProvider>
);

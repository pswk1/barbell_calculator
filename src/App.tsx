import * as React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Banner from './components/Banner';
import Barbell from './components/Barbell';

export const App = () => (
	<ChakraProvider theme={theme}>
		<Banner />
    <Barbell />
	</ChakraProvider>
);

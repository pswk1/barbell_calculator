import React from 'react';
import { Flex, Button, Heading, Stack, VStack, Text } from '@chakra-ui/react';

const platesLbs = [
	{ color: 'red', plate: 45 },
	{ color: 'blue', plate: 35 },
	{ color: 'yellow', plate: 25 },
	{ color: 'green', plate: 10 },
	{ color: 'purple', plate: 5 },
	{ color: 'gray', plate: 2.5 },
];

const platesKg = [
	{ color: 'red', plate: 25 },
	{ color: 'blue', plate: 20 },
	{ color: 'yellow', plate: 15 },
	{ color: 'green', plate: 10 },
	{ color: 'purple', plate: 5 },
	{ color: 'gray', plate: 2.5 },
];

interface Props {
	unit: string;
	currentWeight: number;
	reset(): void;
	addPlates(plate: number): void;
}

const Plates: React.FC<Props> = ({
	unit,
	currentWeight,
	reset,
	addPlates,
}: Props) => {
	let plates;
	if (unit === 'lbs') {
		plates = platesLbs;
	} else {
		plates = platesKg;
	}

	return (
		<Flex direction='column' alignItems='center' justifyContent='center'>
			<Stack direction={{ base: 'column', md: 'row' }} mt={12} spacing='8'>
				<VStack spacing='3'>
					<Heading size='lg'>Add Plates: </Heading>
					<Text fontSize='sm'>One selection = adding a plate on each side</Text>
				</VStack>

				{plates.map(({ color, plate }, i) => (
					<Button colorScheme={color} onClick={() => addPlates(plate)} key={i}>
						{plate}
					</Button>
				))}
			</Stack>

			<Text mt={12} fontSize='xl'>
				Currently Loaded Weight: {currentWeight}
				{unit}
			</Text>
			<Button mt={8} onClick={reset}>
				Reset
			</Button>
		</Flex>
	);
};

export default Plates;

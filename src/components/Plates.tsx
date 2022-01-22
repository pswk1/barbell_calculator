import React from 'react';
import {
	Flex,
	Button,
	Heading,
	Stack,
	Text,
} from '@chakra-ui/react';

const platesLbs = [45, 35, 25, 10, 5, 2.5];
const platesKg = [25, 20, 15, 10, 5, 2.5];

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
				<Heading size='lg'>Add Plates: </Heading>

				{plates.map((weight, i) => (
					<Button onClick={() => addPlates(weight)} key={i}>
						{weight}
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

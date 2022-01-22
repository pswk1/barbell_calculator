import React from 'react';
import { Flex, Button, Heading, Stack, VStack, Text } from '@chakra-ui/react';

type PlateData = { color: string; lbs: number; kg: number };

const plates: PlateData[] = [
	{ color: 'red', lbs: 45, kg: 25 },
	{ color: 'blue', lbs: 35, kg: 20 },
	{ color: 'yellow', lbs: 25, kg: 15 },
	{ color: 'green', lbs: 10, kg: 10 },
	{ color: 'purple', lbs: 5, kg: 5 },
	{ color: 'gray', lbs: 2.5, kg: 2.5 },
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
	return (
		<Flex direction='column' alignItems='center' justifyContent='center'>
			<Stack direction={{ base: 'column', md: 'row' }} mt={12} spacing='8'>
				<VStack spacing='3'>
					<Heading size='lg'>Add Plates: </Heading>
					<Text textAlign='center' fontSize='sm'>
						One selection = adding a plate on each side
					</Text>
				</VStack>

				{plates.map(({ color, lbs, kg }, i) => (
					<Button
						colorScheme={color}
						onClick={() => addPlates(unit === 'lbs' ? lbs : kg)}
						key={i}
					>
						{unit === 'lbs' ? lbs : kg}
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

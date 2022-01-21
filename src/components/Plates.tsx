import React from 'react';
import { Flex, Button, Heading, HStack, Text } from '@chakra-ui/react';

const platesLbs = [45, 35, 25, 10, 5, 2.5];
const platesKg = [25, 20, 15, 10, 5, 2.5];

interface Props {
	unit: string;
	currentWeight: number;
	reset(): void;
    addPlates(plate: number): void
}

const Plates: React.FC<Props> = ({ unit, currentWeight, reset, addPlates }: Props) => {
	return (
		<Flex
			mt={12}
			direction='column'
			alignItems='center'
			justifyContent='center'
		>
			<HStack spacing='8'>
				<Heading size='lg'>Add Plates: </Heading>
				{unit === 'lbs'
					? platesLbs.map((weight, i) => <Button onClick={()=> addPlates(weight)} key={i}>{weight}</Button>)
					: platesKg.map((weight, i) => <Button onClick={()=> addPlates(weight)} key={i}>{weight}</Button>)}
			</HStack>

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

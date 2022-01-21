import { useState } from 'react';
import { Flex, Button, Heading, HStack } from '@chakra-ui/react';
import Plates from './Plates';

const barLbs = [45, 35, 15];
const barKg = [20, 15, 12];

const Barbell: React.FC = () => {
	const [unit, setUnit] = useState<string>('lbs');
	const [bar, setBar] = useState<number[]>(barLbs);
	const [currentWeight, setCurrentWeight] = useState<number>(0);

	const handleUnit = (unit: string): void => {
		setUnit(unit);
		if (unit === 'lbs') {
			// setCurrentWeight(45);
			setBar(barLbs);
		} else {
			// setCurrentWeight(20);
			setBar(barKg);
		}
	};

    const handleBar = (bar: number): void => {
        setCurrentWeight(bar);
    }

	const addPlates = (plate: number): void => {
		setCurrentWeight(currentWeight + plate * 2);
        console.log(currentWeight);
	};

	const reset = (): void => {
		setCurrentWeight(0);
		setBar(barLbs);
		setUnit('lbs');
	};

	return (
		<Flex
			mt={12}
			direction='column'
			alignItems='center'
			justifyContent='center'
		>
			<HStack spacing='8'>
				<Button onClick={() => handleUnit('lbs')}>lbs</Button>
				<Button onClick={() => handleUnit('kg')}>kg</Button>
			</HStack>

			<HStack mt={12} spacing='8'>
				<Heading size='lg'>Select Barbell Weight: </Heading>
				{bar.map((weight, i) => (
					<Button onClick={() => handleBar(weight)} key={i}>{weight}</Button>
				))}
			</HStack>

			<Plates
				unit={unit}
				reset={reset}
				currentWeight={currentWeight}
				addPlates={addPlates}
			/>
		</Flex>
	);
};

export default Barbell;

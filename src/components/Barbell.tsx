import { useState } from 'react';
import {
	Flex,
	Button,
	Heading,
	HStack,
	Stack,
	useToast,
} from '@chakra-ui/react';
import Plates from './Plates';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

const barLbs = [45, 35, 15];
const barKg = [20, 15, 12];

const Barbell: React.FC = () => {
	const [unit, setUnit] = useState<string>('lbs');
	const [bar, setBar] = useState<number[]>(barLbs);
	const [currentWeight, setCurrentWeight] = useState<number>(0);

	const handleUnit = (unit: string): void => {
		setUnit(unit);
		if (unit === 'lbs') {
			setBar(barLbs);
		} else {
			setBar(barKg);
		}
	};

	const handleBar = (bar: number): void => {
		setCurrentWeight(bar);
	};

	const toast = useToast();
	const addPlates = (plate: number): void => {
		if (currentWeight === 0) {
			toast({
				title: 'Select a barbell first!',
				status: 'warning',
				isClosable: true,
				duration: 2000,
			});
		} else {
			setCurrentWeight(currentWeight + plate * 2);
		}
	};

	const reset = (): void => {
		setCurrentWeight(0);
		setBar(barLbs);
		setUnit('lbs');
	};

	return (
		<Flex
			mt={10}
			direction='column'
			alignItems='center'
			justifyContent='center'
		>
			<ColorModeSwitcher mb={4}/>
			<HStack spacing='8'>
				<Button onClick={() => handleUnit('lbs')}>lbs</Button>
				<Button onClick={() => handleUnit('kg')}>kg</Button>
			</HStack>

			<Stack direction={{ base: 'column', md: 'row' }} mt={12} spacing='8'>
				<Heading size='lg'>Select Barbell Weight: </Heading>

				{bar.map((weight, i) => (
					<Button colorScheme='teal' onClick={() => handleBar(weight)} key={i}>
						{weight}
					</Button>
				))}
			</Stack>

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

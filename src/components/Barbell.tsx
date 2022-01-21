import { useState } from 'react';
import { Flex, Button, Heading, HStack, Text } from '@chakra-ui/react';

const barLbs = [45, 35, 15];
const barKg = [20, 15, 12];

/* 
interface IWeight {
  unit: string,
  barWeights: number[],
  plateWeights: number[],
  currentWeight: number
}

type ContextType = {
    weight: IWeight,
    handleUnit: (unit: string) => void,
    clearBar: (weight: IWeight) => void
}

*/

const Barbell: React.FC = () => {
	const [unit, setUnit] = useState<string>('lbs');
	const [bar, setBar] = useState<number[]>(barLbs);

	const handleUnit = (unit: string) => {
		setUnit(unit);
		if (unit === 'lbs') {
			setBar(barLbs);
		} else {
			setBar(barKg);
		}
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
				<Heading size='lg'>Select Barbell Weight</Heading>
				{bar.map((weight, i) => (
					<Button key={i}>{weight}</Button>
				))}
			</HStack>
		</Flex>
	);
};

export default Barbell;

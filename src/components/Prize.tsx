import { Avatar, HStack, Text } from '@chakra-ui/react';
import TP from '../assets/tour-point.png';

interface Props {
    amount: string;
    questionNumber: number;
}

const Prize = ({ amount, questionNumber }: Props) => {
    return (
        <HStack alignSelf='self-start'>
            <Text fontWeight='bold' marginRight={8} width={5}>
                {questionNumber}
            </Text>

            <HStack alignSelf='end'>
                <Avatar.Root>
                    <Avatar.Image src={TP} />
                </Avatar.Root>
                <Text fontSize='lg'>{amount}</Text>
            </HStack>
        </HStack>
    );
};

export default Prize;

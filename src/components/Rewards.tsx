import { Flex, HStack, VStack } from '@chakra-ui/react';
import Prize from './Prize';
import Wildcard from './Wildcard';
import fifty from '../assets/wildcards/50-50.webp';
import phone from '../assets/wildcards/phone-a-friend.webp';
import audience from '../assets/wildcards/audience.webp';
import prizes from '../constants/prizes';

const Rewards = () => {

    return (
        <Flex grow='1' justifyContent='space-between' margin={150}>
            <HStack>
                <Wildcard src={fifty} />
                <Wildcard src={phone} />
                <Wildcard src={audience} />
            </HStack>
            <VStack flexDirection='column-reverse'>
                {prizes.map((p, index) => (
                    <Prize key={index} amount={p} questionNumber={index + 1}/>
                ))}
            </VStack>
        </Flex>
    );
};

export default Rewards;

import { Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
    children?: ReactNode | ReactNode[];
}

const GameContainer = ({ children }: Props) => {
    return (
        <Flex
            bgColor='blue.900'
            height={800}
            maxWidth='9/12'
            margin='auto'
            justifyContent='center'
            alignItems='center'
            marginTop={5}
        >
            {children}
        </Flex>
    );
};

export default GameContainer;

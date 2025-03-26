import { Button, GridItem, Heading, SimpleGrid, VStack } from '@chakra-ui/react';

const GameGrid = () => {
    return (
        <SimpleGrid>
            <GridItem padding={250} textAlign='center'>
                <Heading>Who Wants To Be A Millionaire: Beatstar Edition</Heading>
            </GridItem>
            <GridItem padding={150}>
                <VStack gap={4} padding={5}>
                    <Button colorPalette='blue' size='lg' width={75}>Start</Button>
                    <Button colorPalette='blue' size='lg' width={75}>Rules</Button>
                </VStack>
            </GridItem>
        </SimpleGrid>
    );
};

export default GameGrid;

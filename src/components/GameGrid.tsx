import { Button, GridItem, Heading, SimpleGrid, VStack } from '@chakra-ui/react';

const GameGrid = () => {
    return (
        <SimpleGrid>
            <GridItem padding={250} textAlign='center'>
                <Heading>Who Wants To Be A Millionaire: Beatstar Edition</Heading>
            </GridItem>
            <GridItem padding={150}>
                <VStack gap={4}>
                    <Button colorPalette='blue' maxWidth='60px'>Start</Button>
                    <Button colorPalette='blue'>Rules</Button>
                </VStack>
            </GridItem>
        </SimpleGrid>

        // Install Bootstrap
    );
};

export default GameGrid;

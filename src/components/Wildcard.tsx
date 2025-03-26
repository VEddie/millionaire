import { Image } from '@chakra-ui/react';

interface Props {
    src: string;
}

const Wildcard = ({ src }: Props) => {
    return <Image src={src}  aspectRatio={4/3} height={100} fit='fill'/>;
};

export default Wildcard;

// Fix responsiveness of the wildcards.
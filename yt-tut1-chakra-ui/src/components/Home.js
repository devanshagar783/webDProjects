import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
    pos: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    textTransform: 'uppercase',
    p: '4',
    // size: "4xl",
};

//items in [] are to differentiate betweeen screen sizes -
//the first being for smaller screens and the latter for larger screens

function Home() {
    return (
        <Box>
            <MyCarousel />
            <Container maxW={'container.xl'} min={'100vh'} p="16">
                <Heading
                    textTransform={'uppercase'}
                    m="auto"
                    py="2"
                    w="fit-content"
                    borderBottom={'2px solid'}
                >
                    Services
                </Heading>
                <Stack
                    h={'full'}
                    p="4"
                    alignItems={'center'}
                    direction={['column', 'row']}
                >
                    <Image
                        src={img5}
                        h={['40', '400']}
                        filter={'hue-rotate(-130deg)'}
                    />
                    <Text
                        letterSpacing={'widest'}
                        lineHeight={'190%'}
                        padding={['4', '16']}
                        textAlign="center"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed at mattis ligula, nec maximus lectus. Vestibulum
                        vitae lectus nulla. Mauris convallis sit amet nulla in
                        lacinia. In hac habitasse platea dictumst. Aenean
                        facilisis consectetur dolor, vitae consectetur nulla
                        suscipit vitae. Nam vitae lobortis nisi. Fusce egestas
                        vitae augue et placerat. Suspendisse placerat nisi nec
                        tincidunt accumsan. Praesent sit amet sem urna. Morbi
                        non ligula nulla. Suspendisse orci ligula, vehicula eu
                        tempor eu, semper vel ex. Praesent felis sapien,
                        molestie nec ultrices vitae, pulvinar id lorem. Praesent
                        feugiat sed sapien porta congue. Curabitur tempor tellus
                        eu turpis feugiat, vitae mattis sapien egestas. In ut
                        lectus quis sapien euismod sollicitudin finibus nec
                        neque.
                    </Text>
                </Stack>
            </Container>
        </Box>
    );
}

const MyCarousel = () => (
    <Carousel
        autoPlay
        infiniteLoop
        interval={1000}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        stopOnHover={false}
    >
        <Box w={'full'} h={'100vh'}>
            <Image src={img1} />
            <Heading
                bgColor={'blackAlpha.600'}
                color={'white'}
                {...headingOptions}
            >
                Watch the Future
            </Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img2} />
            <Heading
                bgColor={'whiteAlpha.600'}
                color={'black'}
                {...headingOptions}
            >
                Future is Gaming
            </Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img3} />
            <Heading
                bgColor={'whiteAlpha.600'}
                color={'black'}
                {...headingOptions}
            >
                Gaming on console
            </Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img4} />
            <Heading
                bgColor={'whiteAlpha.600'}
                color={'black'}
                {...headingOptions}
            >
                Night life is cool
            </Heading>
        </Box>
    </Carousel>
);

export default Home;

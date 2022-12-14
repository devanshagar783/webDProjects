import {
    Box,
    Button,
    Heading,
    HStack,
    Input,
    Stack,
    Text,
    VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
    return (
        <Box bg={'blackAlpha.900'} minH="40" p="16" color={'white'}>
            <Stack direction={['column', 'row']}>
                <VStack alignItems={'stretch'} w="full" px={'4'}>
                    <Heading
                        size={'md'}
                        textTransform="uppercase"
                        textAlign={['center', 'left']}
                    >
                        Subscribe
                    </Heading>
                    <HStack borderBottom={'2px solid white'} py="2">
                        <Input
                            placeholder="Enter email here..."
                            border={'none'}
                            borderRadius="none"
                            outline={'none'}
                            focusBorderColor="none"
                        />
                        <Button
                            p="0"
                            variant={'ghost'}
                            colorScheme={'purple'}
                            borderRadius="0 20px 20px 0"
                        >
                            <AiOutlineSend size={'20'} />
                        </Button>
                    </HStack>
                </VStack>
                <VStack
                    w="full"
                    borderLeft={['none', '1px solid white']}
                    borderRight={['none', '1px solid white']}
                >
                    <Heading textTransform={'uppercase'} textAlign="center">
                        Video Hub
                    </Heading>
                    <Text>All rights reserved</Text>
                </VStack>
                <VStack w="full">
                    <Heading size={'md'} textTransform="uppercase">
                        Social Handles
                    </Heading>
                    <Button variant={'link'} colorScheme={'whiteAlpha'}>
                        <a
                            href="https://www.facebook.com"
                            target={'_blank'}
                            rel="noreferrer"
                        >
                            Facebook
                        </a>
                    </Button>
                    <Button variant={'link'} colorScheme={'whiteAlpha'}>
                        <a
                            href="https://www.instagram.com"
                            target={'_blank'}
                            rel="noreferrer"
                        >
                            Instagram
                        </a>
                    </Button>
                    <Button variant={'link'} colorScheme={'whiteAlpha'}>
                        <a
                            href="https://www.github.com"
                            target={'_blank'}
                            rel="noreferrer"
                        >
                            Github
                        </a>
                    </Button>
                </VStack>
            </Stack>
        </Box>
    );
};

export default Footer;

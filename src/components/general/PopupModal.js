import {
    Box,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalFooter,
    ModalBody,
    Text,
    useDisclosure,
} from '@chakra-ui/react';
import { useEffect } from 'react';

const PopupModal = ({
    children,
    title,
    defaultOpen,
    hideButton,
    buttonLabel,
}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        if (defaultOpen) {
            onOpen();
        }
    }, [defaultOpen, onOpen]);

    return (
        <>
            {!hideButton && (
                <Box textAlign={'center'}>
                    <Text
                        fontWeight={'bold'}
                        textDecoration={'underline'}
                        cursor={'pointer'}
                        color={'gray.300'}
                        onClick={onOpen}
                        colorScheme={'blackAlpha'}
                        size={'sm'}
                    >
                        {buttonLabel}
                    </Text>
                </Box>
            )}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody textAlign={'center'}>{children}</ModalBody>

                    <ModalFooter>
                        <Button
                            colorScheme='red'
                            size='sm'
                            mr={3}
                            margin='0 auto'
                            onClick={onClose}
                        >
                            סגור חלון
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default PopupModal;

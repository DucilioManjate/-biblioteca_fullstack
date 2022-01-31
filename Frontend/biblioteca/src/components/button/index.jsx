import { Button, ButtonGroup } from '@chakra-ui/react'

export function Input({ props }) {
    return (
        <>
            <div>
                <Stack spacing={4} direction={props.row} align={props.center}>
                    <Button colorScheme={props.teal} size={props.md}>
                        Button
                    </Button>
                    <a href={props.href} className={props.class}>{props.text}</a>
                </Stack>
            </div>
            
        </>

    );
}
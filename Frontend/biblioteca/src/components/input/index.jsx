import { Input } from '@chakra-ui/react'

export function Input({ props }) {
    return (
        <>
        <div>
            <label for={props.name}>{props.label}</label>
            <Input
                input type={props.type}
                className={props.class}
                id={props.name} 
                name={props.name} 
                placeholder={props.placeholder} 
                value={props.value}
            />
        </div>
        </>

    );
}
import React, {useState} from "react";

interface hookReturn {
    value: string
    onChange: object
}

export default function useInput(initialValue: string) {
    const [value, setValue] = useState(initialValue);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return {value, onChange}
}
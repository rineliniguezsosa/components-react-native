import { useState } from 'react';

interface Props {
    [key:string]:string
}

export const useForm = (initialValues:Props) => {
    const [form, setUseForm] = useState<Props>(initialValues);

    const handleChange = (name:string,value:string) => {
        setUseForm((prevState)=>({
            ...prevState,
            [name]:value,
        }));
    };

    return {
        form,
        handleChange,
    };
};

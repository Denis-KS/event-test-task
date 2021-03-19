import { useCallback, useState } from "react";
import { IFormValidator } from "../components/EventForm/utils/eventFormFieldValidators";
import { Primitive } from "../models/common-types";
import { IFormField } from "../models/event.model";

export interface IFormConfig {
    [key: string]: IFieldConfig;
}

interface IFieldConfig {
    value: Primitive;
    name: string;
    parser?: (value: string) => Primitive;
    validators?: IFormValidator[];
}

export const useForm = <T>(formConfig: IFormConfig, submit: () => void) => {

    const getFormFieldsFromConfig = useCallback(() => {
        const formFields: any = {};

        Object.keys(formConfig).forEach((key: string) => {
            formFields[key] = { value: formConfig[key].value, name: formConfig[key].name,  error: '' };
        });

        return formFields;
         
    }, [formConfig]);

    const [formFields, setFormFields] = useState(getFormFieldsFromConfig());

    const handleChange = useCallback(({ persist, target: { name, value } }): void => {
        persist();
        let error = '';
        const formField = formConfig[name];

        if (formField.parser) {
            value = formField.parser(value);
        }

        if (formField.validators) {
            for (let validator of formField.validators) {
                if (!validator.isValid(value, formFields)) {
                    error = validator.errorText;
                    break;
                }
            }
        }

        const updatedFormField = { ...formFields[name], value, error };

        setFormFields((values: IFormField<T>) => ({ ...values, [name]: updatedFormField }));
    }, [formConfig, formFields]);

    const handleSubmit = useCallback((event): void => {
        event && event.preventDefault();
        let isValidForm = true;
        const validatedFormFields: any = {};


        for (let key of Object.keys(formFields)) {
            const formField = formFields[key];
            const formFieldConfig = formConfig[formField.name];

            if (formFieldConfig.validators) {
                for (let validator of formFieldConfig.validators) {
                    if (!validator.isValid(formField.value, formFields)) {
                        isValidForm = false;
                        formField.error = validator.errorText;
                        break;
                    }
                }
            }

            validatedFormFields[key] = formField;
        }

        isValidForm ? submit() : setFormFields((formFields: IFormField<T>) => ({ ...formFields, ...validatedFormFields }));
        
    }, [submit, formConfig, formFields]);

    return { formFields, handleChange, handleSubmit };
}
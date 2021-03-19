import React, { useCallback } from "react";
import { IFormField, UpdateEvent } from "../../../models/event.model";
import { FlexBox } from "../../styled/Box/FlexBox";
import { NumericInput } from "./NumericInput";
import { RadioGroup } from "./RadioGroup";
import { RadioInput } from "./RadioInput";

interface IPaymentInputProps {
    isPaidEvent: IFormField<boolean>;
    feeValue: IFormField<number | null>;
    onChange: UpdateEvent;
}

export const PaymentInput: React.FC<IPaymentInputProps> = ({ isPaidEvent, feeValue, onChange }) => {

    const renderFeeInput = useCallback(() => (
        <NumericInput 
            formField={feeValue}
            onChange={onChange}
            placeholder="Fee"
            textAfter="$" />
    ), [feeValue, onChange]);

    return (
        <FlexBox>
            <FlexBox>
                <RadioGroup onChange={onChange}>
                    <RadioInput value={0} checked={!isPaidEvent.value} name={isPaidEvent.name}>Free Event</RadioInput>
                    <RadioInput value={1} checked={isPaidEvent.value} name={isPaidEvent.name}>Paid Event</RadioInput>
                </RadioGroup>
            </FlexBox>
            {isPaidEvent.value && renderFeeInput()}
        </FlexBox>
    );
}
import { IFormConfig } from "../../../hooks/useForm";
import { parseTime, parseToBoolean, parseToNumber, parseToPositiveNumberOrNull } from "./eventFormFieldParsers";
import { 
    dateValidators,
    descriptionValidators,
    emailValidators,
    feeValidators,
    timeValidators,
    titleValidators
} from "./eventFormFieldValidators";

export function getEventFormConfig(activeUserId: number): IFormConfig { 
    return {
        title: { name: 'title', value: '', validators: titleValidators },
        description: { name: 'description', value: '', validators: descriptionValidators },
        category_id: { name: 'category_id', value: 'unselected', parser: parseToNumber },
        paid_event: { name: 'paid_event', value: false, parser: parseToBoolean },
        event_fee: { name: 'event_fee', value: null, parser: parseToPositiveNumberOrNull, validators: feeValidators },
        reward: { name: 'reward', value: null, parser: parseToPositiveNumberOrNull },
        email: { name: 'email', value: '', validators: emailValidators },                                                      
        id: { name: 'id', value: activeUserId, parser: parseToNumber },
        date: { name: 'date', value: '', validators: dateValidators },
        duration: { name: 'duration', value: null, parser: parseToPositiveNumberOrNull },
        time: { name: 'time', value: '', parser: parseTime, validators: timeValidators },
        period: { name: 'period', value: 'AM' },
    }
};
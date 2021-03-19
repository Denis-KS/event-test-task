import { DayPeriod, IEvent, IEventForm } from "../../../models/event.model";

export function parseToPositiveNumberOrNull(value: string): number | null {
    const valueToSet = Number(value);
    return valueToSet && valueToSet > 0 ? valueToSet : null;
};

export function parseToNumber(value: string): number {
    return Number(value) || 0;
};

export function parseToBoolean(value: string): boolean {
    return !!Number(value);
};

export function parseTime(value: string): string {
    let [hours, minutes] = value.split(':');
    if (+hours >= 13) {
        hours = '12';
    }

    return `${hours}:${minutes}`;
}

export function serializeForm(formFields: IEventForm): IEvent {
    return {
        title: formFields.title.value,
        description: formFields.description.value,
        category_id: serializeCategoryId(formFields.category_id.value),
        paid_event: formFields.paid_event.value,
        event_fee: serializeFee(formFields.event_fee.value, formFields.paid_event.value),
        reward: formFields.reward.value,
        date: serializeDate(formFields.date.value, formFields.time.value, formFields.period.value), 
        duration: serializeDuration(formFields.duration.value), 
        coordinator: {
            email: formFields.email.value,                                                      
            id: String(formFields.id.value),
        },
    }
};

export function serializeCategoryId(category_id: string | number): number | null {
    return typeof category_id !== 'string' ? category_id : null;
};

export function serializeDate(date: string, time: string, period: DayPeriod): string {
    const split = new Date(`${date} ${time} ${period}`).toISOString().split(':');
    return `${split[0]}:${split[1]}`;
}

export function serializeDuration(duration: number | null): number {
    return duration ? duration * 60 * 60 : 0;
};

export function serializeFee(fee: number | null, isPaid: boolean): number | null {
    return isPaid ? fee : null;
};

export interface IEvent {
    title: string,
    description: string,
    category_id: number | null,
    paid_event: boolean,
    event_fee: number | null,
    reward: number | null,
    date: string,
    duration: number,
    coordinator: {
        email: string,                                                      
        id: string,
    },
}

export interface IEventForm {
    title: IFormField<string>;
    description: IFormField<string>;
    category_id: IFormField<number | string>;
    paid_event: IFormField<boolean>;
    event_fee: IFormField<number | null>;
    reward: IFormField<number | null>;
    email: IFormField<string>;                                                   
    id: IFormField<number>;
    date: IFormField<string>;
    duration: IFormField<number | null>;
    time: IFormField<string>;
    period: IFormField<DayPeriod>;
}

export interface IFormField<T> {
    name: string;
    value: T,
    error: string;
}

export type UpdateEvent = (event: React.ChangeEvent<HTMLInputElement>) => void;
export type DayPeriod = 'AM' | 'PM';

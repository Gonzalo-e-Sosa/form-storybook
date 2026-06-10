export type FormProps = {
    fields?: Field[];
    onSubmit?: (data: any) => Promise<void>;
};

export type QuestionType =
    | 'text'
    | 'email'
    | 'number'
    | 'date'
    | 'radio'
    | 'select'
    | 'checkbox'
    | 'rating'
    | 'likert';

export interface Field {
    id: string;
    label: string;
    type: QuestionType;
    required?: boolean;
    options?: string[];
}

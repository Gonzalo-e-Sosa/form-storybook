import type { Meta, StoryObj } from '@storybook/react-vite';
import "devextreme/dist/css/dx.dark.css";
import "./FormRuntime.css";
// import { fn } from 'storybook/test';

import Form from './Form';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    globals: {
        backgrounds: {
            value: 'dark',
        }
    },
    title: 'Components/Form',
    component: Form,
    render: (args) => <>
        <div className="form-container">
            <Form {...args} />
        </div>
    </>,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        // layout: 'centered',

    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
    // args: { onClick: fn() },
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const BasicForm: Story = {
    args: {
        fields: [
            { id: 'name', type: 'text', label: 'Nombre', required: true },
            { id: 'email', type: 'email', label: 'Email' },
        ],
    },
};

export const Survey: Story = {
    args: {
        fields: [
            {
                id: 'q1',
                type: 'radio',
                label: '¿Te gusta el producto?',
                options: ['Sí', 'No'],
            },
            {
                id: 'q2',
                type: 'rating',
                label: 'Calificación',
            },
            {
                id: 'q3',
                type: 'likert',
                label: 'Satisfacción',
                options: ['Muy malo', 'Malo', 'Neutral', 'Bueno', 'Excelente'],
            },
        ],
    },
};

export const ComplexLayout: Story = {
    args: {
        fields: [
            { id: 'firstName', type: 'text', label: 'First Name' },
            { id: 'lastName', type: 'text', label: 'Last Name' },
            {
                id: 'phone',
                type: 'text',
                label: 'Phone',
            },
            {
                id: 'address',
                type: 'text',
                label: 'Address',
            },
        ],
    },
};

export const EmptyForm: Story = {
    args: {
        fields: [],
    },
};

export const RequiredValidation: Story = {
    args: {
        fields: [
            { id: 'email', type: 'email', label: 'Email', required: true },
        ],
    },
};
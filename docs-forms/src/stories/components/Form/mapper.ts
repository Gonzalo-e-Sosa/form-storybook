import type { Item } from "devextreme/ui/form";
import type { Field } from "./Form.types";

export const mapToDxItems = (fields: Field[]): Item[] => {
    return fields.map(field => {
        switch (field.type) {
            case 'text':
                return {
                    dataField: field.id,
                    label: { text: field.label },
                    editorType: 'dxTextBox',
                };

            case 'radio':
                return {
                    dataField: field.id,
                    label: { text: field.label },
                    editorType: 'dxRadioGroup',
                    editorOptions: { items: field.options, layout: 'horizontal' },
                };

            case 'select':
                return {
                    dataField: field.id,
                    label: { text: field.label },
                    editorType: 'dxSelectBox',
                    editorOptions: { items: field.options },
                };

            case 'date':
                return {
                    dataField: field.id,
                    label: { text: field.label },
                    editorType: 'dxDateBox',
                };

            default:
                return {
                    dataField: field.id,
                    label: { text: field.label },
                };
        }
    });
};
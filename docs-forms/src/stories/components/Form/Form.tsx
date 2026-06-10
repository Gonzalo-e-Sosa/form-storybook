import DxForm from 'devextreme-react/form';
import type { FormProps } from './Form.types';
import { mapToDxItems } from './mapper';
import { Button, RadioGroup } from 'devextreme-react'; // Necesario para el tipo 'radio'
import { useState } from 'react';

const ComponentTypes = ['text', 'date', 'radio', 'select', 'checkbox', 'rating', 'likert']

const Form: React.FC<FormProps> = ({ fields }) => {
    const items = fields ? mapToDxItems(fields) : [];
    const [newComponentVisible, setNewComponentVisible] = useState<boolean>(false);

    return (
        <>
            <DxForm
                formData={{}}
                items={items}
            // colCount={2}
            />
            <Button type="primary" icon={newComponentVisible ? 'minus' : 'plus'} text='Agregar componente' stylingMode='text' onClick={(_e) => setNewComponentVisible(!newComponentVisible)} style={{ marginTop: '2rem' }} />;
            {newComponentVisible && <>
                <div style={{ width: "100%", display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: 'auto', gap: '8px', marginTop: '1rem' }}>
                    {ComponentTypes.map(type => (
                        <Button text={type} onClick={(_e) => { }} />
                    ))}
                </div>
            </>}
        </>
    );
};

export default Form;
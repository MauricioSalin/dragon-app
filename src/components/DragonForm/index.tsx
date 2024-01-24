import './styles.css';

import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Dragon } from '@/api';
import { DragonFormProps } from '@/views/Home/types';
import { getDragonDetail } from '@/utils';

type Props = {
  onEditDragon: SubmitHandler<Dragon>;
  onAddDragon: SubmitHandler<DragonFormProps>;
  dragon?: Dragon | null;
};

const DragonForm: React.FC<Props> = ({ onEditDragon, onAddDragon, dragon }) => {
  const { register, setValue, getValues, reset } = useForm<DragonFormProps>({
    defaultValues: {
      name: '',
      type: 'water',
    },
  });

  useEffect(() => {
    if (dragon) {
      setValue('name', dragon.name);
      setValue('type', dragon.type);
    } else {
      reset();
    }
  }, [dragon]);

  const dragonTypes: Array<Dragon['type']> = ['water', 'air', 'earth', 'fire'];

  const onSubmit = () => {
    const currentValues = getValues();

    if (dragon) {
      return onEditDragon({
        ...dragon,
        ...currentValues,
      });
    }

    return onAddDragon(currentValues);
  };

  return (
    <div className="form-container">
      <div className="form-item">
        <label>Name:</label>
        <input type="text" {...register('name')} />
      </div>
      <div className="form-item">
        <label>Tipo:</label>
        <select {...register('type')}>
          {dragonTypes.map((type) => (
            <option key={type} value={type}>
              {getDragonDetail[type].name}
            </option>
          ))}
        </select>
      </div>
      <button onClick={onSubmit} type="button" aria-label="Save">
        Salvar
      </button>
    </div>
  );
};

export default DragonForm;

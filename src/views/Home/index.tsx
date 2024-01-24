import './styles.css'

import { useEffect, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import { Dragon, DragonService } from '../../api';
import { getDragonDetail } from '../../utils'

import Modal from 'react-modal';
import DragonForm from '../../components/DragonForm';
import CustomModal from '../../components/Modal';

Modal.setAppElement('#root');

export type DragonFormProps = {
  name: string;
  type: 'water' | 'air' | 'earth' | 'fire';
}

const DragonList: React.FC = () => {
  const [dragon, setDragon] = useState<Dragon | null>(null);
  const [dragons, setDragons] = useState<Dragon[]>([]);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);


  useEffect(() => {
    const fetchDragonList = async () => {
      const dragonList = await DragonService.getList();
      setDragons(dragonList);
    };

    fetchDragonList();
  }, []);

  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC' }).format(date)
  };

  const handleEdit = (data: Dragon) => {
    setDragon(data)
    setIsOpen(true);
  };

  const handleRemove = async (id: number) => {
    const updatedDragons = dragons.filter(dragon => dragon.id !== id);

    setDragons(updatedDragons);

    await DragonService.deleteDragon(id);
  };

  const handleAddDragon: SubmitHandler<DragonFormProps> = async (data) => {
    const newDragon = await DragonService.createDragon({
      name: data.name,
      createdAt: new Date(),
      type: data.type,
    });

    setDragons(prevDragons => [...prevDragons, newDragon]);
    setIsOpen(false);
  };

  const handleEditDragon: SubmitHandler<Dragon> = async (data) => {
    if (data.id) {
      const updatedDragon = await DragonService.editDragon(data.id, data);
      const updatedDragons = dragons.map(dragon =>
        dragon.id === updatedDragon.id ? updatedDragon : dragon
      );

      setDragons(updatedDragons);
      setDragon(null)
      setIsOpen(false);
    }
  };

  const onCloseModal = () => {
    setDragon(null);
    setIsOpen(false)
  }

  return (
    <div className="dragon-container">
      <div className='dragon-header'>
        <h2>Lista de Dragões</h2>
        <button className="dragon-button" onClick={() => setIsOpen(true)}>
          <FaPlus />
        </button>
      </div>
      <div className='dragon-list'>
        {dragons.map(dragon => (
          <div key={dragon.id} className="dragon-card">
            <div className='dragon-type'>
              <img src={getDragonDetail[dragon.type].icon} />
            </div>
            <div className="dragon-info">
              <h3>{dragon.name}</h3>
              <p>Data de criação: {formatDate(new Date(dragon.createdAt))}</p>
              <p>Tipo: {getDragonDetail[dragon.type].name}</p>

              <div className="dragon-actions">
                <button onClick={() => handleEdit(dragon)}>
                  <FaEdit />
                </button>
                <button onClick={() => dragon.id && handleRemove(dragon.id)}>
                  <FaTrash />
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>
      <CustomModal
        modalIsOpen={modalIsOpen}
        onCloseModal={onCloseModal}
      >
        <DragonForm onEditDragon={handleEditDragon} onAddDragon={handleAddDragon} dragon={dragon} />
      </CustomModal>
    </div>
  );
};

export default DragonList;

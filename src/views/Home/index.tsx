import './styles.css';

import { useEffect, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import { Dragon, DragonService } from '../../api';
import { DragonFormProps } from './types';
import { getDragonDetail, formatDate } from '../../utils';

import DragonForm from '../../components/DragonForm';
import CustomModal from '../../components/Modal';

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

  const handleEdit = (data: Dragon) => {
    setDragon(data);
    setIsOpen(true);
  };

  const handleRemove = async (id: number) => {
    const updatedDragons = dragons.filter((item) => item.id !== id);

    setDragons(updatedDragons);

    await DragonService.deleteDragon(id);
  };

  const handleAddDragon: SubmitHandler<DragonFormProps> = async (data) => {
    const newDragon = await DragonService.createDragon({
      name: data.name,
      createdAt: new Date(),
      type: data.type,
    });

    setDragons((prevDragons) => [...prevDragons, newDragon]);
    setIsOpen(false);
  };

  const handleEditDragon: SubmitHandler<Dragon> = async (data) => {
    if (data.id) {
      const updatedDragon = await DragonService.editDragon(data.id, data);
      const updatedDragons = dragons.map((item) =>
        item.id === updatedDragon.id ? updatedDragon : item
      );

      setDragons(updatedDragons);
      setDragon(null);
      setIsOpen(false);
    }
  };

  const onCloseModal = () => {
    setDragon(null);
    setIsOpen(false);
  };

  const sortedDragons = dragons
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="dragon-container">
      <div className="dragon-header">
        <h2>Lista de Dragões</h2>
        <button
          className="dragon-button"
          onClick={() => setIsOpen(true)}
          type="button"
          aria-label="Add"
        >
          <FaPlus />
        </button>
      </div>
      <div className="dragon-list">
        {sortedDragons.map((sortedDragon) => (
          <div key={sortedDragon.id} className="dragon-card">
            <div className="dragon-type">
              <img
                src={getDragonDetail[sortedDragon.type].icon}
                alt="Element icon"
              />
            </div>
            <div className="dragon-info">
              <h3>{sortedDragon.name}</h3>
              <p>Data de criação: {formatDate(sortedDragon.createdAt)}</p>
              <p>Tipo: {getDragonDetail[sortedDragon.type].name}</p>

              <div className="dragon-actions">
                <button
                  onClick={() => handleEdit(sortedDragon)}
                  type="button"
                  aria-label="Edit"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() =>
                    sortedDragon.id && handleRemove(sortedDragon.id)
                  }
                  type="button"
                  aria-label="Remove"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <CustomModal modalIsOpen={modalIsOpen} onCloseModal={onCloseModal}>
        <DragonForm
          onEditDragon={handleEditDragon}
          onAddDragon={handleAddDragon}
          dragon={dragon}
        />
      </CustomModal>
    </div>
  );
};

export default DragonList;

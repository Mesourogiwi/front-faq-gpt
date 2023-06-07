import React, { useState } from 'react';
import axiosInstance from '../../../config/axios';

export const WidgetUpdate: React.FC = () => {
  
  const [isSucess, setIsSucess] = React.useState(false);
  
  const [id, setId] = useState<number>(0);
  const [newName, setNewName] = useState<string>('')
  
  const handleUpdateWidgetQuery = async () => {
    try {
      const response = await axiosInstance({
        url: `/widgets/${id}`,
        method: 'PUT',
        data: {
          name: newName
        },
      });

      if (response?.data) {
        setIsSucess(true)
        setNewName(response?.data)
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>Update Widgets</h1>
      <form>
        <label>Id do widget a ser atualizado: </label>
        <input id="id-widget" type="number" value={id} onChange={(e) => setId(e.target.valueAsNumber)}/>
        <br /> <br />
        <label>Novo nome para o widget: </label>
        <input id="id-name" type="text" value={newName} onChange={(e) => setNewName(e.target.value)}/>
        <br /> <br />
      </form>
      
      <button onClick={handleUpdateWidgetQuery}> Update Widget</button>
      <p>{isSucess ? `Foi um sucesso atualizar o widget para ${newName}` : ""}</p>
    </>
  );
};

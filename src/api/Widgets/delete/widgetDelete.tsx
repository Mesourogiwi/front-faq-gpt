import React from 'react';
import axiosInstance from '../../../config/axios';

export const WidgetDelete: React.FC = () => {
  
  const [isSucess, setIsSucess] = React.useState(false);
  
  const [id, setId] = React.useState<number>();
  const [deletedId, setDeletedId] = React.useState<number>();
  
  const handleDeleteWidgetQuery = async () => {
    try {
      const response = await axiosInstance({
        url: `/widgets/${id}`,
        method: 'DELETE',
      });

      if (response?.data) {
        setIsSucess(true)
        setDeletedId(id)
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>Delete Widgets</h1>
      <form>
        <label>Id do widget a ser deletado: </label>
        <input id="id-user" type="number" value={id} onChange={(e) => setId(e.target.valueAsNumber)}/>
        <br /> <br />
      </form>
      
      <button onClick={handleDeleteWidgetQuery}> Delete Widget</button>
      <p>{isSucess ? `Foi um sucesso deletar o widget de id ${deletedId}` : ""}</p>
    </>
  );
};

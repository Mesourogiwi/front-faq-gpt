import React from 'react';
import axiosInstance from '../../../config/axios';

export const CreateWidget: React.FC = () => {
  const [widget, setWidget] = React.useState({id: 0, idUser: 0, name: ''});

  const [isSucess, setIsSucess] = React.useState(false);
  const [idUser, setIdUser] = React.useState(0);
  const [name, setName] = React.useState("");

  const handleCreateWidget = () => {
    console.log('idUser', idUser)
    console.log('name', name)

    
  }
    
  const handleCreateWidgetQuery = async () => {
    try {
      const response = await axiosInstance({
        url: '/widgets/',
        method: 'POST',
        headers: {
          Authorization:
            import.meta.env.VITE_BEARER_TOKEN,
        },
        data: {
            user: {
                id: idUser
            },
            name: name
        }
      });

      if (response?.data) {
        setWidget({...response.data, idUser: idUser});
        setIsSucess(true)
      }
    } catch (err) {
      console.log(err);
    }
  };

  
  

  return (
    <>
      <h1>Widgets</h1>
      <form>
        <label>Id do usuario: </label>
        <input id="id-user" type="number" value={idUser} onChange={(e) => setIdUser(e.target.valueAsNumber)}/>
        <br /><br />
        <label>Nome do widget:</label>
        <input id="name-widget" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <br /><br />
      </form>
      <br />
      
      <button onClick={handleCreateWidgetQuery}> Create Widget</button>
      <p>{isSucess ? `O ${widget.id} widget "${widget.name}" foi criado com sucesso pelo usuario de id ${widget.idUser}` : ""}</p>
    </>
  );
};

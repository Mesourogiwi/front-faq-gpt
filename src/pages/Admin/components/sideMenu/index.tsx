import * as React from 'react';
import Button from '@mui/material/Button';
import * as S from './styles';

import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import { options } from './atom';
import { Option } from './types';

export default function SideMenu() {
  const [optionsList, setOptionsList] = useAtom(options);

  const navigate = useNavigate();

  //cria uma variavel com o option de OptionsList que esta selected
  const selectedOption = optionsList.find((option) => option.selected === true);

  //settingsSelected recebe o valor selected de optionsList que tem o nome Settings
  const settings = optionsList.find((option) => option.name === 'Settings');

  //faz uma copia de optionsList sem o settings
  const optionsWithoutSettings = optionsList.filter((option) => option.name !== 'Settings');

  //pega do url a ultima parte (depois do ultimo / ) e salva em uma variavel
  const url = window.location.pathname;
  const urlSplited = url.split('/');
  const lastUrl = urlSplited[urlSplited.length - 1].toLowerCase();

  const handleOption = (option: string) => {
    const newOptionsList = optionsList;

    //atualizar o newOptionsList com o valor de selected = true parao option do parametro
    newOptionsList?.map((optionItem) => {
      if (optionItem?.name.toLowerCase() === option) {
        optionItem.selected = true;
      } else {
        if (optionItem) optionItem.selected = false;
      }

      if (optionItem.name === 'Settings' && option === 'user') {
        optionItem.selected = true;
      }
    });
    //setta o newOptionsList no atom
    setOptionsList(newOptionsList as Option[]);
    navigate(`/admin/${option.toLowerCase()}`);
  };

  if (selectedOption?.name.toLowerCase() !== lastUrl.toLowerCase()) {
    console.log('a');
    if (lastUrl !== 'user' || selectedOption?.name !== 'Settings') handleOption(lastUrl);
  }

  return (
    <>
      <S.Container>
        <S.Menu>
          {optionsWithoutSettings.map((option, index) => (
            <S.Option
              key={index}
              onClick={() => handleOption(option.name)}
              selected={option.selected}>
              <h2>{option.name}</h2>
            </S.Option>
          ))}
        </S.Menu>

        <S.Option
          selected={settings?.selected}
          onClick={() => handleOption('user')}
          sx={{ marginBottom: '45px' }}>
          <h2>Settings</h2>
        </S.Option>
      </S.Container>
    </>
  );
}

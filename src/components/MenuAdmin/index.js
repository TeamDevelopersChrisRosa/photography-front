import React from 'react';
import './styles.scss';



export const MenuAdmin = () => {

  return (
    <ul className='menuAdmin'>
      <li className='menuAdmin__item'>
        <a href='/admin/nouveau-client' className='menuAdmin__item__link'>Créer un compte client</a>
      </li>
      <li className='menuAdmin__item'>
        <a href="/admin/nouvelle-galerie" className='menuAdmin__item__link'>Ajouter une galerie</a>
      </li>
    </ul>

  )};



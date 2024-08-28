import React from 'react';
import { Contact } from '../UI/Contact/Contact';
import classes from './ContactsList.module.scss';
import phone from '../../assets/svg/phone.svg';
import  time from '../../assets/svg/time.svg';
import loc  from '../../assets/svg/loc.svg';

export const ContactsList = () => {
  return (
    <ul className={classes.list}>
      <li>
        <Contact href={'#0'} img={loc} text={'8558 Green Rd., LA'}/>
      </li>
      <li>
        <Contact href={'tel:+16035550123'} img={phone} text={'+1 (603) 555-0123'}/>
      </li>
      <li>
        <div className={classes.time}>
          <img src={time} alt='' />
          <span>Mon-Sat: 9:00 AM – 23:00 PM</span>
        </div>
      </li>
    </ul>
  )
}

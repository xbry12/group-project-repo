import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';
import heart from './heart.svg'
import dumbbell from './dumbbell.svg'
import facebook from './facebook.png'
const heartImage = {
    src: heart,
    alt: 'heart'
}
const dumbbellImage = {
    src: dumbbell,
    alt: 'dumbbell'
}
const fbImage = {
    src: facebook,
    alt: 'facebook'
}

storiesOf('Button', module)

    .add('Heart', () => <img src={heartImage.src}
        type=''
        label='Heart'
    />)
    .add('Dumbbell', () => <img src={dumbbellImage.src}
        type=''
        label='Dumbbell'
    />)
    .add('Facebook', () => <img src={fbImage.src}
        type=''
        label='Facebook'
    />)
    .add('Booked', () => <Button 
        type='booked'
        label='Booked' />)
    .add('Not Booked', () => <Button 
        type='not_booked'
        label='Not Booked' />)
    

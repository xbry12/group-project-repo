import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';
import heart from './heart.svg'
import dumbbell from './dumbbell.svg'

const heartImage = {
    src: heart,
    alt: 'heart'
}
const dumbbellImage = {
    src: dumbbell,
    alt: 'dumbbell'
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
    .add('Edit', () => <Button 
        type='edit'
        label='Edit' />)
    .add('Delete', () => <Button 
        type='delete'
        label='Delete' />)
    .add('Book Now', () => <Button
        type='book'
        label='Book Now' />)

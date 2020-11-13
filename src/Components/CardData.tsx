import React from 'react';
import { CardComponent } from '../Components/Card';

interface card {
    jsx:JSX.Element,
    tags:string[]  
}

const jsxs = [
    <CardComponent title="A" description="description" img="img/dog.jpg" tags={['All', '1', '2', '3']}/>,
    <CardComponent title="B" description="description" img="img/dog.jpg" tags={['All', '2', '3']}/>,
    <CardComponent title="C" description="description" img="img/dog.jpg" tags={['All', '3']}/>,

]

export const cards:card[] = [  
    {jsx:jsxs[0], tags:['All', '1', '2', '3'],},
    {jsx:jsxs[1], tags:['All', '2', '3'],},
    {jsx:jsxs[2], tags:['All', '3'],},
]
// maybe .reverse()
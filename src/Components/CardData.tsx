import React from 'react';
import { CardComponent } from '../Components/Card';

interface cardInterface {
    jsx:JSX.Element,
    props:propIntereface 
}

interface propIntereface {
    title:string, 
    description:string,
    img:string, 
    tags:string[]
}

const props:propIntereface[] = [
    {title:"A", description:"descriptionC", img:"img/dog.jpg", tags:['All', '1', '2', '3']},
    {title:"B", description:"descriptionB", img:"img/dog.jpg", tags:['All', '2', '3']},
    {title:"C", description:"descriptionA", img:"img/dog.jpg", tags:['All', '3']},
]

const jsxs = [
    <CardComponent title={props[0].title} description={props[0].description} img={props[0].img} tags={props[0].tags}/>,
    <CardComponent title={props[1].title} description={props[1].description} img={props[1].img} tags={props[1].tags}/>,
    <CardComponent title={props[2].title} description={props[2].description} img={props[2].img} tags={props[2].tags}/>,
]

export const cards:cardInterface[] = [  
    {jsx:jsxs[1], props:props[1]},
    {jsx:jsxs[0], props:props[0]},
    {jsx:jsxs[2], props:props[2]},
]
// maybe .reverse()
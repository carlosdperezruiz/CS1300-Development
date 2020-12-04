import React from 'react';
import { CardComponent } from '../Components/Card';

interface cardInterface {
    jsx:JSX.Element,
    props:propIntereface 
}

interface propIntereface {
    name:string, 
    title:string,
    distance: number,
    inNetwork: boolean,
    img:string, 
    tags:string[]
}

const props:propIntereface[] = [
    {name:"Rafael Merrill", title:"Pediatrician", distance:2, inNetwork:true, img:"img/doctor03.jpg", tags:['All', 'In Network', 'Primary Care']},
    {name:"Desmond Williams", title:"Cardiologist", distance:4, inNetwork:false, img:"img/doctor07.jpg", tags:['All', 'Out of Network', 'Specialist']},
    {name:"Jackson Pacheco", title:"Neurologist", distance:5, inNetwork:true, img:"img/doctor08.jpg", tags:['All', 'In Network', 'Specialist']},
    {name:"Betty Lowe", title:"Geriatric", distance:12, inNetwork:true, img:"img/doctor05.jpg", tags:['All', 'In Network', 'Primary Care']},
    {name:"Kelly Hill", title:"Dermatologist", distance:9, inNetwork:false, img:"img/doctor06.jpg", tags:['All', 'Out of Network', 'Specialist']},
    {name:"Jennifer Pacheco", title:"Psychiatrist", distance:7, inNetwork:true, img:"img/doctor12.jpg", tags:['All', 'In Network', 'Specialist']},
    {name:"Dannielle Palmer", title:"Family", distance:3, inNetwork:true, img:"img/doctor09.jpg", tags:['All', 'In Network', 'Primary Care']},
    {name:"Summer Wang", title:"Obstetrician", distance:4, inNetwork:false, img:"img/doctor04.jpg", tags:['All', 'Out of Network', 'Specialist']},
    {name:"Martin Elliott", title:"Allergists", distance:14, inNetwork:true, img:"img/doctor01.jpg", tags:['All', 'In Network', 'Specialist']},
    {name:"Stuart Dudley", title:"Pediatrician", distance:10, inNetwork:true, img:"img/doctor11.jpg", tags:['All', 'In Network', 'Primary Care']},
    {name:"Zoey Munro", title:"Family", distance:8, inNetwork:false, img:"img/doctor10.jpg", tags:['All', 'Out of Network', 'Primary Care']},
    {name:"Jacob Wall", title:"Neurologist", distance:7, inNetwork:true, img:"img/doctor02.jpg", tags:['All', 'In Network', 'Specialist']},
]

const jsxs = [
    <CardComponent name={props[0].name} title={props[0].title} distance={props[0].distance} inNetwork={props[0].inNetwork} img={props[0].img} tags={props[0].tags}/>,
    <CardComponent name={props[1].name} title={props[1].title} distance={props[1].distance} inNetwork={props[1].inNetwork} img={props[1].img} tags={props[1].tags}/>,
    <CardComponent name={props[2].name} title={props[2].title} distance={props[2].distance} inNetwork={props[2].inNetwork} img={props[2].img} tags={props[2].tags}/>,
    <CardComponent name={props[3].name} title={props[3].title} distance={props[3].distance} inNetwork={props[3].inNetwork} img={props[3].img} tags={props[3].tags}/>,
    <CardComponent name={props[4].name} title={props[4].title} distance={props[4].distance} inNetwork={props[4].inNetwork} img={props[4].img} tags={props[4].tags}/>,
    <CardComponent name={props[5].name} title={props[5].title} distance={props[5].distance} inNetwork={props[5].inNetwork} img={props[5].img} tags={props[5].tags}/>,
    <CardComponent name={props[6].name} title={props[6].title} distance={props[6].distance} inNetwork={props[6].inNetwork} img={props[6].img} tags={props[6].tags}/>,
    <CardComponent name={props[7].name} title={props[7].title} distance={props[7].distance} inNetwork={props[7].inNetwork} img={props[7].img} tags={props[7].tags}/>,
    <CardComponent name={props[8].name} title={props[8].title} distance={props[8].distance} inNetwork={props[8].inNetwork} img={props[8].img} tags={props[8].tags}/>,
    <CardComponent name={props[9].name} title={props[9].title} distance={props[9].distance} inNetwork={props[9].inNetwork} img={props[9].img} tags={props[9].tags}/>,
    <CardComponent name={props[0].name} title={props[10].title} distance={props[10].distance} inNetwork={props[10].inNetwork} img={props[10].img} tags={props[10].tags}/>,
    <CardComponent name={props[0].name} title={props[11].title} distance={props[11].distance} inNetwork={props[11].inNetwork} img={props[11].img} tags={props[11].tags}/>,
]

export const cards:cardInterface[] = [  
    {jsx:jsxs[0], props:props[0]},
    {jsx:jsxs[1], props:props[1]},
    {jsx:jsxs[2], props:props[2]},
    {jsx:jsxs[3], props:props[3]},
    {jsx:jsxs[4], props:props[4]},
    {jsx:jsxs[5], props:props[5]},
    {jsx:jsxs[6], props:props[6]},
    {jsx:jsxs[7], props:props[7]},
    {jsx:jsxs[8], props:props[8]},
    {jsx:jsxs[9], props:props[9]},
    {jsx:jsxs[10], props:props[10]},
    {jsx:jsxs[11], props:props[11]},
]
// maybe .reverse()
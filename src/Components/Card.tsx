import { Card, Typography, Button, Modal } from 'antd';
import React from 'react';

const { Meta } = Card;

const { Paragraph } = Typography;

interface CardComponentProps {
    title:string
    description:string
    tags:string[]
    img:string
}

export class CardComponent extends React.Component<CardComponentProps> {
        render() {
        return(
            <Card 
                hoverable={true}
                style={{ width: "100%", background:"#f0f2f5"}}
                onClick={() => console.log("clicked")}
                cover={<img alt="example" src={this.props.img} />}>
                    <Meta title={this.props.title} description={this.props.description} />
                    <Paragraph> <br/> {this.props.description} <br/><hr/></Paragraph>
            </Card>
        )
    }
}
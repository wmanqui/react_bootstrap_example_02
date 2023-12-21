import React from "react";
import { Button, ButtonGroup, Card, CardBody, CardTitle, CardSubtitle, CardText, CardGroup } from 'reactstrap';

const Nav = (props) => {
    return (
        //Ejemplo de utilización de botones en forma individual
        /*
        <div> 
            <Button color="primary" outline href="#" tag="a" size="lg"> Link </Button>
            {' '}
            <Button color="secondary" tag="input" type="submit" value="Submit"/>
            {' '}
            <Button color="success" tag="input" type="reset" value="Reset" size="sm"/>
            {' '}
        </div>
        */
        //Ejemplo de utilizacion de botones en grupos
        /*
        <ButtonGroup>
            <Button color="danger">Left</Button>
            <Button color="success">Middle</Button>
            <Button color="warning">Right</Button>
        </ButtonGroup>
        */
        //Ejemplo de utilización de tarjetas

        <Card color="success" outline style={{ width: '18rem' }}>
            <img alt="Sample" src="https://picsum.photos/300/200" />
            <CardBody>
                <CardTitle tag="h5"> Card title </CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6"> Card subtitle </CardSubtitle>
                <CardText> Some quick example text to build on the card title and make up the bulk of the card‘s content.</CardText>
                <Button> Button </Button>
            </CardBody>
        </Card>


    );
}
export default Nav;

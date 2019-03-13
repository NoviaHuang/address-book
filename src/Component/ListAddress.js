import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

function ListAddress (props) {
    let address = [...props.address];
    let listItems = address.map((item) =>
        <ListGroup.Item>
            <Card className="bg-light border rounded">
                <span className="text-right" onClick={props.closer.bind(item[FirstName], item[LastName], null)}>{'\u274e'}</span>
                <Card.Body className="text-left">
                    <h5>{item.FirstName}</h5>
                    <h5>{item.LastName}</h5>
                    <h5>{item.Birthday}</h5>
                    <h5>{item.Telephone}</h5>
                </Card.Body>
            </Card>
        </ListGroup.Item>
    )
    return listItems;
}

export default ListAddress;

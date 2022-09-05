import React from 'react';
import { Card, CardImg } from 'react-bootstrap'
import Select from 'react-select';

function LineaSelectComponent(props) {

    const lineasData = props.linea;
    console.log(lineasData)
    return (
        <div className='LineaSelectCont '>
            <Card>
                <CardImg src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Metro_de_Santiago_Logo.svg/1200px-Metro_de_Santiago_Logo.svg.png' alt='metro-img' position='top' style={{width:'90vh'}} />
                <Card.Body>
                    <Select
                        options={lineasData.map(linea => ({label:linea.name, key:linea.id}))}
                    />
                </Card.Body>
            </Card>
        </div>
    )
}

export default LineaSelectComponent;

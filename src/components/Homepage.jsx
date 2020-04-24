import React from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

import './Homepage.css'

export default class Homepage extends React.Component {
    render() {
        return (
            <div className='bg'>
                <div className='search'>
                    <InputGroup >
                        <Input />
                        <InputGroupAddon addonType="prepend">
                            <Button color='info'>Search</Button>
                        </InputGroupAddon>
                    </InputGroup>
                </div>
            </div>
        )
    }
}
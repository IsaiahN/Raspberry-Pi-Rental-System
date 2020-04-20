import React, { useState } from 'react';
import './App.css';
import BasicNavbar from './Components/basic-navbar';
import { Row, Col, Container, Form, Button, Card } from 'react-bootstrap';
import CardColumns from 'react-bootstrap/CardColumns';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import * as Icon from 'react-icons/fa';


export default function Application(){
    function CardLink(props) {
        return (
            <>
                <Link to={props.link} >
                <Card
                    bg={props.type}
                    text={props.type.toLowerCase() === 'light' ? 'dark' : 'white'}
                    style={{ width: '18rem' }}
                >
                    <Card.Header>
                        {props.icon}
                        {props.title}
                    </Card.Header>
                </Card>
                <br />
                </Link>
            </>
        );
    }
/*
*  https://react-icons.netlify.app/#/icons/fa
*  Font Awesome Icons Can Be Found Here
*
*/
    return(
        <div>
            <BasicNavbar />
            <Container>
                <Row>
                    <Col></Col>

                    <CardColumns className={"column_stack"}>

                        <CardLink type={"dark"}         link={"/checkout"} title={"Checkout Raspberry Pi"}          icon=<Icon.FaRaspberryPi/> description={"description"}/>
                        <CardLink type={"secondary"}    link={"#"} title={"Manage Due Date"}                icon=<Icon.FaCalendarAlt/> description={"description"}/>
                        <CardLink type={"secondary"}    link={"/rental/rented"} title={"View Checked Out Rentals"}       icon=<Icon.FaExchangeAlt/> description={"description"}/>

                        <CardLink type={"secondary"}    link={"/checkin"} title={"Return Raspberry Pi Rental"}     icon=<Icon.FaBoxOpen/> description={"description"}/>
                        <CardLink type={"secondary"}    link={"/account"} title={"Add/Update Student"}            icon=<Icon.FaAddressCard/> description={"description"}/>
                        <CardLink type={"info"}         link={"/message"} title={"Contact Network Admin"}          icon=<Icon.FaEnvelopeOpenText/> description={"description"}/>

                        <CardLink type={"secondary"}    link={"/rental/late"} title={"View Late Rentals"}              icon=<Icon.FaExclamationTriangle/> description={"description"}/>
                        <CardLink type={"secondary"}    link={"/equipment/damaged"} title={"View Broken Equipment"}          icon=<Icon.FaTools/> description={"description"}/>
                        <CardLink type={"danger"}       link={"/support"} title={"Get Technical Support"}          icon=<Icon.FaHeadset/> description={"description"}/>

                    </CardColumns>

                    <Col></Col>
                </Row>
            </Container>
        </div>
    );
}

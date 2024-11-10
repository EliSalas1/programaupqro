import React from 'react';
import { Col, Container, Dropdown, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function MyDropdown() {
  return (
    <>
    <Container> 
      <Row> 
        <Col> 
        <Form> 

          {/**Campo para ingresar el nombre del evento */}
          <Form.Label htmlFor="inputPassword5" className="text-start w-100">Nombre del evento</Form.Label>
          <Form.Control
            type="text"
            id="inputText"
            aria-describedby="textHelpBlock"
          />   
          <Form.Text id="textHelpBlock" muted>
           Por favor ingrese el nombre del evento.
          </Form.Text> 

          {/**Campo para ingresar la fecha y hora de inicio del evento */}
          <Form.Group controlId="inputText">
          <Form.Label htmlFor="inputText" className="text-start w-100">Fecha y hora de inicio del evento</Form.Label>
          <Form.Control
            type="datetime-local"
            id="inputDatetime"
            aria-describedby="datetimeHelpBlock"
          />
          <Form.Text id="datetimeHelpBlock" muted>
            Por favor ingrese fecha y hora de inicio del evento.
          </Form.Text>
        </Form.Group>

        {/**Campo para ingresar la fecha y hora de finalización del evento */}
        <Form.Group controlId="inputText">
          <Form.Label htmlFor="inputText" className="text-start w-100">Fecha y hora de finalización del evento</Form.Label>
          <Form.Control
            type="datetime-local"
            id="inputDatetime"
            aria-describedby="datetimeHelpBlock"
          />
          <Form.Text id="datetimeHelpBlock" muted>
            Por favor ingrese fecha y hora de finalización del evento.
          </Form.Text>
        </Form.Group>

        {/**Campo para seleccionar el tipo de evento */}

        <div className="mt-5">
        <Dropdown as={ButtonGroup} className="w-100" >
        <Button variant="success"  style={{ textTransform: 'none', textAlign: 'left' }} className="w-100">Tipo de evento</Button>

        <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

        <Dropdown.Menu>
         <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
         <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
         <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
       </Dropdown>
      </div>  

      {/**Campo para ingresar el nombre del ponente */}

      <div className="mt-5"> 
      <Form.Label htmlFor="inputPassword5" className="text-start w-100">Nombre del ponente</Form.Label>
        <Form.Control
          type="text"
          id="inputText"
          aria-describedby="textHelpBlock"
        />   
        <Form.Text id="textHelpBlock" muted>
         Por favor ingrese el nombre del ponente.
        </Form.Text>
      </div>

      {/**Campo para seleccionar el lugar del evento */}
       
      <div className="mt-5">
        <Dropdown as={ButtonGroup} className="w-100">
        <Button variant="success"  style={{ textTransform: 'none', textAlign: 'left' }} className="w-100">Lugar</Button>

        <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

        <Dropdown.Menu>
         <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
         <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
         <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
       </Dropdown>
      </div> 

      {/**Aquí empieza el contenedor para la columnas de las carreras */}

      <Container className="mt-5"> 
     <div className="mt-5 text-start w-100" > 
        <Row> 
           <Col md={6}> 
           {/* Checkbox (Form Check) */}
           <Form.Check 
           type="checkbox" 
           label="Licenciatura en Ingeniería Financiera" 
           aria-label="option 1" 
           />
           </Col>

           <Col  md={6}> 
            {/* Checkbox (Form Check) */}
            <Form.Check 
            type="checkbox" 
            label="Licenciatura en Ingeniería Biomédica" 
            aria-label="option 1" 
            />
           </Col>
        </Row>

        <Row> 
          <Col  md={6}> 
          {/* Checkbox (Form Check) */}
          <Form.Check 
          type="checkbox" 
          label="Licenciatura en Ingeniería en Tecnologías de la Información e Innovación Digital" 
          aria-label="option 1" 
          />
          </Col>

          <Col md={6}>  
          {/* Checkbox (Form Check) */}
          <Form.Check 
          type="checkbox" 
          label="Licenciatura en Ingeniería en Biotecnología" 
          aria-label="option 1" 
          />
          </Col>
        </Row>

        <Row> 
          <Col md={6}> 
          {/* Checkbox (Form Check) */}
          <Form.Check 
          type="checkbox" 
          label="Licenciatura en Terapia Física" 
          aria-label="option 1" 
          />
          </Col>

          <Col md={6}> 
           {/* Checkbox (Form Check) */}
           <Form.Check 
           type="checkbox" 
           label="Licenciatura en Administración" 
           aria-label="option 1" 
           />
          </Col>
        </Row>
       </div> 
    </Container> 

    {/**Campo para ingresar el nombre del organizador */}

    <div className="mt-5"> 
    <Form.Label htmlFor="inputPassword5" className="text-start w-100">Nombre del organizador</Form.Label>
        <Form.Control
          type="text"
          id="inputText"
          aria-describedby="textHelpBlock"
        />   
        <Form.Text id="textHelpBlock" muted>
         Por favor ingrese el nombre del organizador.
        </Form.Text> 
    </div>

    {/**Campo para ingresar el cargo del organizador */}

    <div className="mt-5"> 
      <Form.Label htmlFor="inputPassword5" className="text-start w-100">Cargo del organizador</Form.Label>
        <Form.Control
          type="text"
          id="inputText"
          aria-describedby="textHelpBlock"
        />   
        <Form.Text id="textHelpBlock" muted>
         Por favor ingrese el cargo del organizador.
        </Form.Text> 
      </div>

      {/**Botón que guarda la información del formulario */}

      <div className="d-flex justify-content-end mt-3"> 
         <Button variant="outline-success" className="ml-auto" >Guardar</Button>{' '}
      </div>



        </Form>
        </Col>
      </Row>
    </Container>
    
    </>
  );
}
export default MyDropdown;
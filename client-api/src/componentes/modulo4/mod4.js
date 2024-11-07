import React from 'react';
import { Col, Container, Dropdown, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Badge from 'react-bootstrap/Badge';

function Myformularioedit() {
  return (
    <>
    <Container> 
      <Row> 
        <Col>   
    
         {/* Botón de editar para habilitar el formulario  */}
         <Form>

         <div className="d-flex justify-content-end mt-5"> 
         <Button variant="outline-success" className="ml-auto" >Editar</Button>{' '}
         </div>

        {/* Campo para ingresar el nombre del evento */}

        <div className="mt-5"> 
          <Form.Label htmlFor="inputPassword5" className="text-start w-100">Nombre del evento</Form.Label>
          <Form.Control
            type="text"
            id="inputText"
            aria-describedby="textHelpBlock"
        />   
        <Form.Text id="textHelpBlock" muted>
         Por favor ingrese su nombre.
        </Form.Text>  
        </div>  

        {/* Campo donde se ingresa la fecha y hora*/}

        <div className="mt-5"> 
        <Form.Group controlId="inputText">
          <Form.Label htmlFor="inputText" className="text-start w-100">Fecha y Hora de inicio del evento</Form.Label>
          <Form.Control
            type="datetime-local"
            id="inputDatetime"
            aria-describedby="datetimeHelpBlock"
          />
          <Form.Text id="datetimeHelpBlock" muted>
            Por favor ingrese su nombre.
          </Form.Text>
        </Form.Group>
        </div>

         {/* Campo donde se ingresa la fecha y hora*/}

         <div className="mt-5"> 
        <Form.Group controlId="inputText">
          <Form.Label htmlFor="inputText" className="text-start w-100">Fecha y Hora de finalización del evento</Form.Label>
          <Form.Control
            type="datetime-local"
            id="inputDatetime"
            aria-describedby="datetimeHelpBlock"
          />
          <Form.Text id="datetimeHelpBlock" muted>
            Por favor ingrese su nombre.
          </Form.Text>
        </Form.Group>
        </div>


          {/* Campo que permite escoger el tipo de evento */}
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

      {/*Campo para ingresar el nombre del ponente*/ }

      <div className="mt-5"> 
      <Form.Label htmlFor="inputPassword5" className="text-start w-100">Nombre del ponente</Form.Label>
        <Form.Control
          type="text"
          id="inputText"
          aria-describedby="textHelpBlock"
        />   
        <Form.Text id="textHelpBlock" muted>
         Por favor ingrese su nombre.
        </Form.Text>
      </div>

        {/*Campo para seleccionar el lugar del evento */}
        
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

      {/*Aquí se pone otro contenedor para las columnas de las carreras */}

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

    {/*El siguiente campo es de texto para ingresar el nombre del organizador  */}

    <div className="mt-5"> 
    <Form.Label htmlFor="inputPassword5" className="text-start w-100">Nombre del organizador</Form.Label>
        <Form.Control
          type="text"
          id="inputText"
          aria-describedby="textHelpBlock"
        />   
        <Form.Text id="textHelpBlock" muted>
         Por favor ingrese su nombre.
        </Form.Text> 
    </div>

        {/*Campo para ingresar el cargo del organizador del evento */}

      <div className="mt-5"> 
      <Form.Label htmlFor="inputPassword5" className="text-start w-100">Cargo del organizador</Form.Label>
        <Form.Control
          type="text"
          id="inputText"
          aria-describedby="textHelpBlock"
        />   
        <Form.Text id="textHelpBlock" muted>
         Por favor ingrese su cargo.
        </Form.Text> 
      </div>    

      {/*Campo para que se muestre la cantidad de personas que asistieron al evento */}
      <div className="mt-5"> 
      <h3>
        Cantidad de personas <Badge bg="secondary">New</Badge>
      </h3>
      </div>

        {/*Campo para ingresar comentarios del evento */} 

      <div className="mt-5"> 
      <FloatingLabel controlId="floatingTextarea2" label="Comments" >
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
        />
      </FloatingLabel>
      </div>

      {/*Botón de guardar(guarda los cambios que se realizaron en este formulario) */}


      <div className="d-flex flex-column flex-md-row justify-content-end mt-5"> 
        <Button variant="outline-danger" className="me-md-2 mb-2 mb-md-0">Borrar</Button>
        <Button variant="outline-success">Guardar</Button>
      </div>


      </Form>
        </Col>
      </Row>
    </Container>
    </>
  );
}
export default Myformularioedit;
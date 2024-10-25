import React from 'react';
import { Col, Dropdown, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function MyDropdown() {
  return (
    <>
    <div style={{ width: '99%' }}> 
      <div> 
         {/* Form Text Example */}
         <Form>
        <Form.Label htmlFor="inputPassword5" className="text-start w-100">Nombre del evento</Form.Label>
        <Form.Control
          type="text"
          id="inputText"
          aria-describedby="textHelpBlock"
        />   
        <Form.Text id="textHelpBlock" muted>
         Por favor ingrese su nombre.
        </Form.Text>     
      </Form>

     {/* Formulario de texto */}
     <Form>
        <Form.Group controlId="inputText">
          <Form.Label htmlFor="inputText" className="text-start w-100">Fecha y Hora del evento</Form.Label>
          <Form.Control
            type="datetime-local"
            id="inputDatetime"
            aria-describedby="datetimeHelpBlock"
          />
          <Form.Text id="datetimeHelpBlock" muted>
            Por favor ingrese su nombre.
          </Form.Text>
        </Form.Group>
      </Form>

      {/* Dropdown */}
      <div className="mt-5">
        <Form.Group>
          <Dropdown className="w-100">
            <Dropdown.Toggle variant="success" id="dropdown-basic" className="w-100"  style={{ textTransform: 'none' }}>
              Tipo de evento
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Form.Group>
      </div>

      {/* Form Text Example */}
      <Form>
        <Form.Label htmlFor="inputPassword5" className="text-start w-100">Nombre del ponente</Form.Label>
        <Form.Control
          type="text"
          id="inputText"
          aria-describedby="textHelpBlock"
        />   
        <Form.Text id="textHelpBlock" muted>
         Por favor ingrese su nombre.
        </Form.Text>     
      </Form>

      <div className="mt-5">
        <Form.Group>
          <Dropdown className="w-100">
            <Dropdown.Toggle variant="success" id="dropdown-basic" className="w-100"  style={{ textTransform: 'none' }}>
              Lugar
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Form.Group>
      </div>

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

      <Form>
        <Form.Label htmlFor="inputPassword5" className="text-start w-100">Nombre del organizador</Form.Label>
        <Form.Control
          type="text"
          id="inputText"
          aria-describedby="textHelpBlock"
        />   
        <Form.Text id="textHelpBlock" muted>
         Por favor ingrese su nombre.
        </Form.Text>     
      </Form>

      <Form>
        <Form.Label htmlFor="inputPassword5" className="text-start w-100">Cargo del organizador</Form.Label>
        <Form.Control
          type="text"
          id="inputText"
          aria-describedby="textHelpBlock"
        />   
        <Form.Text id="textHelpBlock" muted>
         Por favor ingrese su cargo.
        </Form.Text>     
      </Form>
      </div>

      <div className="d-flex justify-content-end mt-3"> 
         <Button variant="outline-success" className="ml-auto" >Guardar</Button>{' '}
      </div>

    </div>
    </>
  );
}
export default MyDropdown;
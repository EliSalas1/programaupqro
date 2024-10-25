import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'; // Importar el botón de react-bootstrap
import DataTable from 'react-data-table-component';

function EventReportTable() {
    const [selectedMonth, setSelectedMonth] = useState('Octubre'); // Estado para el mes seleccionado
    const [data, setData] = useState([
        { id: 1, name: 'John', fecha: '2024-10-20', hora: '10:30 AM', asistentes: 20 },
        { id: 2, name: 'Jane', fecha: '2024-10-21', hora: '11:00 AM', asistentes: 25 },
        { id: 3, name: 'Sam', fecha: '2024-10-21', hora: '11:00 AM', asistentes: 32 },
        { id: 1, name: 'John', fecha: '2024-10-20', hora: '10:30 AM', asistentes: 20 },
        { id: 2, name: 'Jane', fecha: '2024-10-21', hora: '11:00 AM', asistentes: 25 },
        { id: 3, name: 'Sam', fecha: '2024-10-21', hora: '11:00 AM', asistentes: 32 },
        { id: 1, name: 'John', fecha: '2024-10-20', hora: '10:30 AM', asistentes: 20 },
        { id: 2, name: 'Jane', fecha: '2024-10-21', hora: '11:00 AM', asistentes: 25 },
        { id: 3, name: 'Sam', fecha: '2024-10-21', hora: '11:00 AM', asistentes: 32 },
        { id: 1, name: 'John', fecha: '2024-10-20', hora: '10:30 AM', asistentes: 20 },
        { id: 2, name: 'Jane', fecha: '2024-10-21', hora: '11:00 AM', asistentes: 25 },
        { id: 3, name: 'Sam', fecha: '2024-10-21', hora: '11:00 AM', asistentes: 32 },
        { id: 1, name: 'John', fecha: '2024-10-20', hora: '10:30 AM', asistentes: 20 },
        { id: 2, name: 'Jane', fecha: '2024-10-21', hora: '11:00 AM', asistentes: 25 },
        { id: 3, name: 'Sam', fecha: '2024-10-21', hora: '11:00 AM', asistentes: 32 },
        { id: 1, name: 'John', fecha: '2024-10-20', hora: '10:30 AM', asistentes: 20 },
        { id: 2, name: 'Jane', fecha: '2024-10-21', hora: '11:00 AM', asistentes: 25 },
        { id: 3, name: 'Sam', fecha: '2024-10-21', hora: '11:00 AM', asistentes: 32 },
        //PUSÉ MUCHOS DATOS PARA CHECAR ALGO, NO SE VA A QUEDAR ASÍ
    ]); // Estado para los datos de la tabla

    // Datos de ejemplo para los meses
    const dataOctubre = [
        { id: 1, name: 'John', fecha: '2024-10-20', hora: '10:30 AM', asistentes: 20 },
        { id: 2, name: 'Jane', fecha: '2024-10-21', hora: '11:00 AM', asistentes: 25 },
        { id: 3, name: 'Sam', fecha: '2024-10-21', hora: '11:00 AM', asistentes: 32 },
    ];
    
    const dataSeptiembre = [
        { id: 1, name: 'Anna', fecha: '2024-09-15', hora: '09:00 AM', asistentes: 40 },
        { id: 2, name: 'Lucas', fecha: '2024-09-18', hora: '10:30 AM', asistentes: 50 },
    ];

    const dataAgosto = [
        { id: 1, name: 'Maria', fecha: '2024-08-05', hora: '02:00 PM', asistentes: 15 },
        { id: 2, name: 'Carlos', fecha: '2024-08-22', hora: '12:00 PM', asistentes: 22 },
    ];

    const handleMonthChange = (month) => {
        setSelectedMonth(month);
        // Cambiar los datos según el mes seleccionado
        switch (month) {
            case 'Octubre':
                setData(dataOctubre);
                break;
            case 'Septiembre':
                setData(dataSeptiembre);
                break;
            case 'Agosto':
                setData(dataAgosto);
                break;
            default:
                setData(dataOctubre);
        }
    };

    const handleButtonClick = (row) => {
        alert(`Botón presionado para el evento: ${row.name}`);
        // Aquí eventualmente agregarás la redirección a otra página
    };

    const columns = [
        {
            name: 'N°',
            selector: row => row.id,
            sortable: true,
        },
        {
            name: 'Nombre del Evento',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Fecha',
            selector: row => row.fecha,
            sortable: true,
        },
        {
            name: 'Hora',
            selector: row => row.hora,
            sortable: true,
        },
        {
            name: 'Asistentes',
            selector: row => row.asistentes,
            sortable: true,
        },
        {
            name: 'Opciones',
            cell: row => (
                <Button variant="outline-info" onClick={() => handleButtonClick(row)}>
                    Ver
                </Button>
            ),
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ];

    return (
        <div>
            <h2>REPORTE DEL MES</h2>
            <div>
                <Button variant="primary" onClick={() => handleMonthChange('Octubre')}>Octubre</Button>
                <Button variant="secondary" onClick={() => handleMonthChange('Septiembre')}>Septiembre</Button>
                <Button variant="success" onClick={() => handleMonthChange('Agosto')}>Agosto</Button>
            </div>

            <h5>Tabla del mes: {selectedMonth}</h5>

            <div className='...'>
                <DataTable
                    columns={columns}
                    data={data}>
                </DataTable>
            </div>
        </div>
    );
}

export default EventReportTable;

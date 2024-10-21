import React from "react";
import { Line, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Registrar componentes de Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

function EventosPrincipal() {
    // Datos para el gráfico de líneas
    const lineChartData = {
        labels: ['Ene', 'Feb', 'Mar', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        datasets: [{
            label: 'número de eventos',
            data: [12, 19, 3, 5, 2, 3, 2, 20, 15, 5, 6, 26],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                // 'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
        }],
    };

    // Opciones del gráfico de líneas
    const options = {
        Response: true,
        responsive: true,

    };

    // Datos para el gráfico de dona
    const doughnutData = {
        labels: ['Conferencia', 'Social', 'Educativo'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1,
        }]
    };

    return (
        <div className='caja-contenido col-9'>

            {/* Gráficos */}
            <div className='charts'>
                {/* Gráfico de líneas */}
                <div className="chart">
                    <h2>Eventos durante el mes</h2>
                    <Line data={lineChartData} options={options} />
                </div>

                {/* Gráfico de dona */}
                <div className="chart" id="doughnut-chart">
                    <h2>Tipos de eventos</h2>
                    <Doughnut data={doughnutData} />
                </div>
            </div>

            {/* Cards de información */}
            <div className='cards'>
                <div className='card'>
                    <div className='card-content'>
                        <div className='number'>1</div>
                        <div className='card-name'>Estudihambres</div>
                    </div>
                    <div className='icon-box'>
                        <i className='fas fa-user-graduate'></i>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-content'>
                        <div className='number'>1</div>
                        <div className='card-name'>Doicente</div>
                    </div>
                    <div className='icon-box'>
                        <i className='fas fa-chalkboard-teacher'></i>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-content'>
                        <div className='number'>1</div>
                        <div className='card-name'>Estudihambres</div>
                    </div>
                    <div className='icon-box'>
                        <i className='fas fa-user'></i>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-content'>
                        <div className='number'>1</div>
                        <div className='card-name'>Estudihambres</div>
                    </div>
                    <div className='icon-box'>
                        <i className='fas fa-dollar-sign'></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventosPrincipal;
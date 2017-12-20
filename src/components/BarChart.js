import React from 'react';
import { Chart } from 'chart.js';

export default class BarChart extends React.Component {

    componentDidMount() {
        { this.props.stats ? this.buildChart() : false };
    }

    componentDidUpdate(prevProps) {
        if (this.props.stats != prevProps.stats) {
            this.buildChart();
        }
    }

    buildChart() {
        let backgroundColor = '';
        let borderColor = '';
        let label = '';
        let standings = this.props.stats;
        if (this.props.sort == 'top') {
            backgroundColor = 'rgba(54, 162, 235, 0.2)';
            borderColor = 'rgba(54, 162, 235, 1)';
            label = 'Top Wins'
            standings.sort((a, b) => {
                return b.wins - a.wins;
            })
        }
        if (this.props.sort == 'bottom') {
            backgroundColor = 'rgba(255, 99, 132, 0.2)';
            borderColor = 'rgba(255, 99, 132, 1)';
            label = 'Top Losses'
            standings.sort((a, b) => {
                return a.wins - b.wins;
            })
        }
        standings = standings.slice(0, 10);
        let labels = standings.map(team => {
            return team.team;
        });
        // console.log(labels);
        let wins = standings.map(team => {
            return team.wins;
        });
        document.getElementById('barchart-' + this.props.sort).width = 400;
        document.getElementById('barchart-' + this.props.sort).height = 400;
        var ctx = document.getElementById('barchart-' + this.props.sort).getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: label,
                    data: wins,
                    backgroundColor: backgroundColor,
                    borderColor: borderColor,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            suggestedMax: 16,
                            beginAtZero: true
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            autoSkip: false
                        }
                    }],
                },
                maintainAspectRatio: false,
                // responsive: false
            }
        });
    }

    render() {
        return (
            <div id='barchart-container'>
                <canvas id={'barchart-' + this.props.sort} style={{ width: '400px', height: '400px' }}></canvas>
            </div>
        )
    }
}
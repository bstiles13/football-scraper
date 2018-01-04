import React from 'react';
let d3 = require('d3');

export default class PieChart extends React.Component {

    componentDidMount() {
        { this.props.stats ? this.buildChart() : false };        
    }

    componentDidUpdate(prevProps) {
        { this.props.stats != prevProps.stats ? this.buildChart() : false };
    }

    buildChart() {
        let that = this;
        let dataset;
        if (!this.props.descending) {
            dataset = this.props.stats.sort(function (a, b) {
                return parseFloat(b[that.props.type]) - parseFloat(a[that.props.type]);
            });
        } else {
            dataset = this.props.stats.sort(function (a, b) {
                return parseFloat(a[that.props.type]) - parseFloat(b[that.props.type]);
            });
        }
        dataset = dataset.slice(0, 5);

        let width = 210;
        let height = 210;
        let radius = width / 2;

        document.getElementById('chart-' + this.props.type).innerHTML = '';
        let svg = d3.select('#chart-' + this.props.type)
            .append('svg')
            .data([dataset])
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', 'translate(' + (width / 2) + ',' + (height / 2) + ')');

        let arc = d3.arc()
            .innerRadius(0)
            .outerRadius(radius);

        let pie = d3.pie()
            .value(function (d) { return d[that.props.type]; })
            .sort(null);

        var arcs = svg.selectAll("g.slice")
            .data(pie)
            .enter()
            .append("svg:g")
            .attr("class", "slice");
        arcs.append("svg:path")
            .attr("fill", function (d, i) { return color(i); })
            .attr("d", arc);
        arcs.append("svg:text")
            .attr("transform", function (d) {
                d.innerRadius = 0;
                d.outerRadius = radius;
                return "translate(" + arc.centroid(d) + ")";
            })
            .attr("text-anchor", "middle")
            .text(function (d, i) { return dataset[i][that.props.type]; });
    }

    buildLegend() {
        let that = this;
        let dataset;
        if (!this.props.descending) {
            dataset = this.props.stats.sort(function (a, b) {
                return parseFloat(b[that.props.type]) - parseFloat(a[that.props.type]);
            });
        } else {
            dataset = this.props.stats.sort(function (a, b) {
                return parseFloat(a[that.props.type]) - parseFloat(b[that.props.type]);
            });
        }
        dataset = dataset.slice(0, 5);
        return dataset.map((item, index) => {
            return (
                <div className='legend-row' key={index}>
                    <div className='legend-item' style={{ backgroundColor: color(index), width: '10px', height: '10px' }}></div>
                    <div>{item.player ? item.player : item.team}</div>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                {
                    this.props.stats == null
                        ? <img src='https://media.giphy.com/media/3o7aDczpCChShEG27S/giphy.gif' style={{ width: '200px', height: '200px' }} />
                        : (
                            <div className='pie-chart'>
                                <div id={'chart-' + this.props.type} className='chart'></div>
                                <div className='legend'>
                                    {this.buildLegend()}
                                </div>
                            </div>
                        )
                }
            </div>
        )
    }

}

var color = d3.scaleOrdinal(d3.schemeCategory10);

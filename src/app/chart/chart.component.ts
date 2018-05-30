import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() { }

  interval_id;
  
  options_str=null;
  options={
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Line 1',
      data: []
    }]
  };

  chart=null;


  ngOnInit(){

    this.chart = new Chart(this.options);
    this.interval_id=setInterval(() => {
      this.add(); 
      }, 1000);
  
      this.options_str=JSON.stringify(this.options);
  }
  
  ngOnDestroy() {
    if (this.interval_id) {
      clearInterval(this.interval_id);
    }
  }



// add point to chart serie
add() {
 
  this.chart.addPoint(Math.floor(Math.random() * 1000));

}

//Reset Graph
reset()
{
    var new_data=[10,20,30]
    this.options.series[0].data=new_data

    this.chart=new Chart(JSON.parse(this.options_str))

}

//Pause Polling
pause_polling(){
 
  clearInterval(this.interval_id);
 }


//Resume Polling
resume_polling(){
  this.interval_id=setInterval(() => {
    this.add(); 
    }, 1000);
}

getJSONString()
{

  return JSON.stringify(this.options)
}




updateChart(value: any){
  // It is set to the label.
  this.options_str = value;
  }
}

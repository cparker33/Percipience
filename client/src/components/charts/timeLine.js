import React, { Component } from 'react'
import '../../assets/styles/StudRoom.css'
import {connect} from 'react-redux'
import {Line} from 'react-chartjs-2'
import moment from 'moment'
// updateGrph






class TimeLine extends Component{



  constructor(props){
    super(props)


    this.state ={

        data: {
          labels: [this.props.curr_topic],
          title: {
              text: "Date Time Formatting"
                },
                datasets: [{
                    label: this.props.curr_topic,
                    data: [this.props.tpc_list],
                    tension: 0,
                    borderColor: "rgb(248,169,113)",
                    backgroundColor: "rgba(0,0,0,0)",
                    radius: 0,
                    borderWidth: 1,
                    pointHitRadius: 5
                  }]

              }
        }
   
    }
  
  render(){
  console.log(this.props.curr_topic, "render")
  console.log(this.props.tpc_list, "render")

  



	return(

   <div>
       

        <Line
          data={this.state.data}
          width={300}
          height={500}
          options={{
             maintainAspectRatio: false,
             title: {
              display: true,
              text: 'Topic TimeLine',
              fontColor:'rgb(128,191,255)',
              fontSize: 18,
              fontFamily: 'Baloo'
             },
          scales: {

              xAxes: [{
                  title: "time",
                  gridLines :{
                              color:'rgba(128,191,255, .8)'
                  },
                  scaleLabel: {
                                display: true,
                  },
                  type: 'time',
                  time: {
                      unitStepSize: 1,

                      displayFormats:{ 
                          min: moment(),
                          
                      }
                      
                  },
                  ticks: {
                    beginAtZero: false,
                    min: 1,
                    fontColor: 'white',
                    fontFamily: 'Baloo'

                  }
            }],
            yAxes: [{
              display:true,
              ticks: {
                min: 0,
                max: 0,
                beginAtZero: true,
                fontColor: 'white',
                fontFamily: 'Baloo'
              }

            }]
          },
    
      
    }}
            />

      </div>
		)

	}
}

	const mapStateToProps = function(appState) {

  		return {

    		gdata: appState.gdata,
        curr_topic: appState.curr_topic,
        tpc_list: appState.tpc_list

  }

}


export default connect(mapStateToProps)(TimeLine)




   

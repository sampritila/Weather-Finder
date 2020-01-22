import React from "react";

class Weather extends React.Component{


    render(){
        return(
             <div> 
                 <table className="weather__info">
                     <tr>
                         <td className="weather__key">{ this.props.tempature && <p>Tempature:{this.props.tempature}</p>} </td>
                     </tr>
                     <tr>
                         <td className="weather__key">{ this.props.city && this.props.country && <p>Location:{this.props.city},{this.props.country}</p>}</td>
                     </tr>
                     <tr>
                         <td className="weather__key"> {this.props.humidity && <p>Humidity:{this.props.humidity}</p>}</td>
                     </tr>

                     <tr>
                         <td className="weather__key">{this.props.description && <p>Conditions: {this.props.description}</p>}</td>
                     </tr>
                     <tr>
                         <td className="weather__key">
                             {this.props.error && <p>Error :{this.props.error}</p>}
                         </td>
                     </tr>
                 </table>
               
                 
                
                 

            </div>
        );
    }
};

export default Weather;
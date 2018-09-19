export const DATA_AVAILABLE = 'DATA_AVAILABLE';

//Import Sample Data
import Data from '../instructions.json';

export const getData = () => {
  return (dispatch) => {
    //Make API Call
    //For this example, we'll use the sample data retrieving its content
    //The delay implemented will serve as a API async call
    setTimeout(() => {
      const data = Data.instructions;
      dispatch({
        type: DATA_AVAILABLE,
        payload: {
          data: data
        }
      });
    }, 2000);
  }
}
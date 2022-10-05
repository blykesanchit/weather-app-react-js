import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import SearchWeather from './component/SearchWeather';

function App() {
    return (
        // <div className="main col-md-12">
        //     <div className="weatherBg">
        //         <h1 className='heading'>Weather App</h1>
        //         <div className="d-grid col-4 mt-4">
        //             <input type="text" className='form-control' />
        //             <button className='btn btn-primary' type='button'>Search</button>
        //         </div>
        //     </div>

        //     <div className="col-md-12 text-center mt-5">
        //         <div className="shadow rounded weatherResultBox">
        //             <img className="weatherIcon"
        //                 src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" />
        //             <div className="weatherCity">

        //             </div>
        //             <div className="temperature">

        //             </div>
                    
        //         </div>

        //     </div>
        // </div>
        <SearchWeather />
    );
}

export default App;

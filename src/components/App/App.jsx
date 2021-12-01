import React from 'react';
import './App.css';
import squirrelImage from './../../assets/images/algae.jpg';
import sacredGroves from './../../assets/images/sacredgroves.png';
import footerImage from './../../assets/images/footerImage.png';

class App extends React.Component {

    render() {
        function handleSubmit(event) {
            event.preventDefault();
            console.log(event.target.elements.Application.value);
            console.log(event.target.elements.dateInput.value);
            var applicationName = event.target.elements.Application.value;
            var [year,month,day] = event.target.elements.dateInput.value.split('-');
            console.log(year,month,day);
            var date = day+''+month+''+year;
            var path = "https://sacred-groves.github.io/"+applicationName+"-automation/"+ date +"/";
            console.log(path);
            window.open(path);
        }

        return (
            <div>
                <div className="app-container">
                    <div className="app-left">
                        <img className="app-left-image" src={squirrelImage} alt="backgroundleftImage" />
                    </div>
                    <div className="app-right">
                        <div className="app-right-top">
                            <img className="app-right-top-image" src={sacredGroves} alt="backgroundleftImage" />
                        </div>
                        <div className="app-right-top-head">
                            <h1 className="app-right-top-head-title">Automation Reports</h1>
                        </div>
                        <div className="app-right-middle-form">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group form-group-application">
                                    <label className="label label-application" htmlFor="Application">Application</label>
                                    <select className="input input-application" id="Application">
                                        <option value="none">Select Application</option>
                                        <option value="website">Website</option>
                                        <option value="webapp">Webapp</option>
                                        <option value="mobileapp">Mobileapp</option>
                                    </select>
                                </div>
                                <div className="form-group form-group-date">
                                    <label className="label label-date" htmlFor="dateInput">Report Date</label>
                                    <input 
                                        className="input input-date" 
                                        type="date" 
                                        id="dateInput"
                                        placeholder="Select Date"
                                        min="09/30/2021"
                                        />
                                </div>

                                <div className="form-group form-group-date">
                                    {/* <label className="label label-submit" htmlFor="dateInput">Submit</label> */}
                                    <input
                                        className="input input-submit"
                                        type="submit"
                                        id="submitButton"
                                    />
                                </div>
                            </form>
                        </div>    
                        <div className="app-right-middle-link">
                            <div className="app-right-middle-link-bottom">
                                <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQCZDhFfMjbzO3PnrMV2CoQKTD8vT81hZUioltbbRaDoCjms-BdOU4M-pC4IkzBBYyu2mhuYexAEbel/pubhtml#">Website Reports</a>
                                <a href="https://www.sacredgroves.earth/">Webapp Reports</a>
                                <a href="https://www.sacredgroves.earth/">Mobileapp Reports</a>
                            </div>
                        </div>
                        <div className="app-right-bottom">
                            <img src={footerImage} alt="FooterImage" className="app-right-bottom-image" />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default App;

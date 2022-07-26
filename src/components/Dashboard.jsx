import React from 'react';
import Products from "./Products";
import ContentRow from "./ContentRow";
import TypesInDb from "./TypesInDb";
import LastProductCreated from "./LastProductCreated";
import "../assets/css/dashboard.css";


function Dashboard(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="contentDashboard" className="Dashboard">
                {/*<!-- Main Content -->*/}
                <div id="contentDashboard">
                    <div className="contentRow" > <ContentRow /></div>
                    <div className="contentMedio">
                        <div className="contentLast"><LastProductCreated /></div>
                        <div className="contentType"><TypesInDb /></div>
                    </div>
                    <div className="contentProduct"><Products /></div>
                </div>
            </div>    
        </React.Fragment>
    )
}
export default Dashboard;
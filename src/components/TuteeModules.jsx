import React from 'react';

function TuteeModules() {
    return (<div className="modules-right">
        <h4>TUTEE</h4>
        <table class="table table-curved">
            <thead>
                <tr>
                <th scope="col"></th>
                <th scope="col">MODULES TAKEN</th>
                <th scope="col">STATUS</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>CS1231</td>
                <td>Completed</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>ST2131</td>
                <td>Completed</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>LSM1102</td>
                <td>Ongoing</td>
                </tr>
            </tbody>
        </table>
    </div>);
}

export default TuteeModules;
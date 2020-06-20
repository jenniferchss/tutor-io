import React from 'react';

function TutorModules() {
    return (<div className="modules-left">
        <h4>TUTOR</h4>
        <table class="table table-curved">
            <thead>
                <tr>
                <th scope="col"></th>
                <th scope="col">MODULES TAUGHT</th>
                <th scope="col">STATUS</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>CS1010S</td>
                <td>Completed</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>MA1102R</td>
                <td>Completed</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>CS2040</td>
                <td>Ongoing</td>
                </tr>
            </tbody>
        </table>
    </div>);
}

export default TutorModules;
import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './common/Header/Header';
import Sidebar from './common/Sidebar/Sidebar';
import Footer from './common/Footer/Footer';


import {default as BillComponent} from './bill/BillContainer'
import TuitionComponent from './tuition/TuitionComponent'
import EmployeesComponent from './employees/EmployeesComponent'
import TimeworksComponent from './timeworks/TimeworksComponent'
import ResourcesComponent from './resources/ResourcesComponent'
import StudentsComponent from './students/StudentsComponent'
import ClassesComponent from './classes/ClassesComponent'
import BranchDetailComponent from './branchDetail/BranchDetailComponent'
import ImportComponent from './import/ImportComponent'
import ShipwayComponent from './shipway/ShipwayComponent'
import BranchesComponent from './branches/BranchesComponent'
import SpendComponent from './spend/SpendComponent'
import PayrollsComponent from './payrolls/PayrollsComponent'
import BillReportComponent from './billReport/BillReportComponent'
import PayrollReportComponent from './payrollReport/PayrollReportComponent'
import ProfitReportComponent from './profitReport/ProfitReportComponent'
import TuitionReportComponent from './tuitionReport/TuitionReportComponent'


class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props} />
          <main className="main">
            <Container fluid>
              <Switch>
                <Route path="/bill" name="BillComponent" component={BillComponent} />
                <Route path="/tuition" name="TuitionComponent" component={TuitionComponent} />
                <Route path="/employees" name="EmployeesComponent" component={EmployeesComponent} />
                <Route path="/timeworks" name="TimeworksComponent" component={TimeworksComponent} />
                <Route path="/resources" name="ResourcesComponent" component={ResourcesComponent} />
                <Route path="/students" name="StudentsComponent" component={StudentsComponent} />
                <Route path="/classes" name="ClassesComponent" component={ClassesComponent} />
                <Route path="/branchs/:id" name="BranchDetailComponent" component={BranchDetailComponent} />
                <Route path="/import" name="ImportComponent" component={ImportComponent} />
                <Route path="/shipway" name="ShipwayComponent" component={ShipwayComponent} />
                <Route path="/branches" name="BranchesComponent" component={BranchesComponent} />
                <Route path="/spend" name="SpendComponent" component={SpendComponent} />
                <Route path="/payrolls" name="PayrollsComponent" component={PayrollsComponent} />
                <Route path="/bill-report" name="BillReportComponent" component={BillReportComponent} />
                <Route path="/payroll-report" name="PayrollReportComponent" component={PayrollReportComponent} />
                <Route path="/profit-report" name="ProfitReportComponent" component={ProfitReportComponent} />
                <Route path="/tuition-report" name="TuitionReportComponent" component={TuitionReportComponent} />
                <Redirect from="/" to="/dashboard" />
              </Switch>
            </Container>
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
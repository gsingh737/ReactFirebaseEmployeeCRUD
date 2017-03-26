import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './Components/LoginForm';
import EmployeeList from './Components/EmployeeList';
import EmployeeCreate from './Components/EmployeeCreate';
import EmployeeEdit from './Components/EmployeeEdit';


const RouterComponent = () => {
    return (<Router sceneStyle={{ paddingTop: 65}}>
            <Scene key="auth">
                <Scene key="login" component={LoginForm} title="Please Login"/>
            </Scene>
            <Scene key="main">
                <Scene
                    onRight={() => Actions.employeeCreate()}
                    rightTitle="Add"
                    key="employeeList"
                    component={EmployeeList}
                    title="Employees" initial />
                <Scene key="employeeCreate" title="Create Employee" component={EmployeeCreate}/>
                <Scene key="employeeEdit" title="Edit Employee" component={EmployeeEdit}/>
            </Scene>
        </Router>);
};

export default RouterComponent;
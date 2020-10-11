import React from 'react';
import header from '../images/badge-header.svg';
import Badge from '../componentes/Badge';
import BadgeForm from '../componentes/BadgeForm';
import './styles/BadgeNew.css';

class BadgeNew extends React.Component{
    state = { form: {
        firstName:'',
        lastName: '',
        email: '',
        jobTittle: '',
        twitter: ''
    } };

    handleChange = e =>{
       // const nextForm = this.state.form;
        //nextForm[e.target.name] = e.target.value;
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        });
    }
    render(){
        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName}
                                twitter={this.state.form.twitter}
                                jobTittle={this.state.form.jobTittle}
                                email={this.state.form.email}
                                avatarUrl="https://www.gravatar.com/avatar?d=identicon"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm 
                                onChange={this.handleChange} 
                                formValues={this.state.form} />
                        </div>
                    </div>  
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNew;
import React from 'react'
import { Field, reduxForm } from 'redux-form'

const  BasicForm = (props) =>  {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <div>
            <div className="page_form">
                <form onSubmit={handleSubmit}>

                    <div className="field_row">
                        <label htmlFor="First Name">First Name</label>

                            <Field
                            type="text"
                            component="input"
                            name="fname"
                            placeholder="First Name"
                            
                            />

                    </div>

                    <div className="field_row">
                        <label htmlFor="Last Name">Last Name</label>

                            <Field
                            type="text"
                            component="input"
                            name="lname"
                            placeholder="Last Name"
                            
                            />

                    </div>
                    

                    <div className="field_row">
                        <label htmlFor="gender">Gender</label>

                        <div>
                            <label htmlFor="male">
                                <Field name="gender" component="input" type="radio" value="Male" />{' '}
                                Male
                            </label>


                            <label htmlFor="male">
                                <Field name="gender" component="input" type="radio" value="Female" />{' '}
                                Female
                            </label>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default reduxForm({
    form: 'myForm' // a unique identifier for this form
}) (BasicForm)

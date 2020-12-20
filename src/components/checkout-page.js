import { Formik, Form } from 'formik';
import { FormContainer, FieldsContainer, Button } from '../styles/checkout-page-styles.js'
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import ValidationField from '../components/validation-field'
import { reset } from '../store/actions.js';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function CheckoutPage() {

    const history = useHistory();
    const dispatch = useDispatch();
    const state = useSelector(state => state);

    return (
        <Formik
            initialValues={{
                name: '',
                surname: '',
                email: '',
                phone: '',
                address: '',
                city: ''
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .min(3, 'Too short')
                    .max(15, 'Too long')
                    .matches('^[A-Z]+', 'Your name should start with uppercase letter')
                    .required('This field is required'),
                surname: Yup.string()
                    .min(3, 'Too short')
                    .max(15, 'Too long')
                    .matches('^[A-Z]+', 'Your surname should start with uppercase letter')
                    .required('This field is required'),
                email: Yup.string()
                    .email('You should write correct email adress')
                    .required('This field is required'),
                phone: Yup.string()
                    .matches('^[+\\d]\\d{8,11}', 'You should enter a valid phone number')
                    .required('This field is required'),
                address: Yup.string()
                    .optional(),
                city: Yup.string()
                    .optional()
            })}
            onSubmit={() => {
                history.push('/success');
                dispatch(reset(state))
            }}>
            {props => (
                <Form>
                    <FormContainer>
                        <h1>Checkout</h1>
                        <FieldsContainer>
                            <ValidationField label='Name' name='name' type='text' placeholder='Enter your name' />
                            <ValidationField label='Surname' name='surname' type='text' placeholder='Enter your surname' />
                            <ValidationField label='Email' name='email' type='email' placeholder='Enter your email' />
                            <ValidationField label='Phone' name='phone' type='text' placeholder='Enter your phone number' />
                            <ValidationField label='City' name='city' type='text' placeholder='Enter your city name' />
                            <ValidationField label='Address' name='address' type='text' placeholder='Enter your address' />
                        </FieldsContainer>
                        <Button type='submit'>Submit</Button>
                    </FormContainer>
                </Form>
            )}
        </Formik>
    );
}

export default CheckoutPage; 
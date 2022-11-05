import {Button, Stack} from "@mui/material";
import './reg_page.css';
import {useState} from "react";

export const Reg_page = () => {

    const [state, setState] = useState({
        value1: true,
        value2: true,
    })
    return(
        <body className='reg_body'>
        <div className='reg_log_page'>
            <Stack spacing={2} direction='column'>
                <Button variant='contained' color='secondary' onClick={() => setState({...state, value1: !state.value1})} size='large' className='button_reg'>Register</Button>
                <Button variant='contained' color='secondary' onClick={() => setState({...state, value2: !state.value2})} size='large' className='button_reg'>Login</Button>
            </Stack>
            <p>{state.value1}</p>
            {state.value1 ? ''
                : (
                    <div className='background-register'>
                        <form className='register-form'>
                            <Button className='Back' variant='contained' onClick={() => setState({...state, value1: !state.value1})}>Back</Button>
                            <p>Email</p>
                            <input type='text' placeholder='Введите Email'/>
                            <p>Login</p>
                            <input type='text' placeholder='Введите Логин'/>
                            <p>Password</p>
                            <input type='password' placeholder='Введите Пароль'/>
                            <p>RePassword</p>
                            <input type='password' placeholder='Повторите Пароль'/>
                            <Button variant='contained' className='register_button'>Register</Button>
                        </form>
                    </div>
                )
            }
            <p>{state.value2}</p>
            {state.value2 ? '' : (
                <div >
                    <form className='login-form'>
                        <Button className='Back' variant='contained' onClick={() => setState({...state, value2: !state.value2})}>Back</Button>

                        <p>Login</p>
                        <input type='text' placeholder='Введите Логин'/>
                        <p>Password</p>
                        <input type='password' placeholder='Введите Пароль'/>
                        <p>RePassword</p>
                        <input type='password' placeholder='Повторите Пароль'/>
                        <Button variant='contained' className='register_button'>Login</Button>
                    </form>
                </div>

            )
            }
        </div>
        </body>

    );
}


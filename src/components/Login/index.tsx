import { BsPersonCircle, BsBoxArrowInRight } from "react-icons/bs";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form';
import { isValidElement } from 'react';
import { Container, Main } from "./styles";


const Login = () => {

    type CreateUserData = {
        login: string,
        pass: string,
    }

    const createUserFormSchema = yup.object().shape({
        login: yup.string().required('E-mail obrigatório').email('Insira um e-mail válido'),
        pass: yup.string().required('Senha obrigatória').min(6, 'Mínimo de 6 caracteres')
    })

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<CreateUserData>({
        resolver: yupResolver(createUserFormSchema)
    })

    const handleCreateUser: SubmitHandler<CreateUserData> = async () => {
        alert('OK!')
        isValid
        console.log("Passou: ", isValid)
    }
    console.log("Passou: ", isValid)
    console.log(`Erros: errors`)

    return (
        <Container>
            <Main>
                <h1>Entre com sua conta</h1>

                <form onSubmit={handleSubmit(handleCreateUser)}>
                    <BsPersonCircle />
                    <input
                        placeholder='Login'
                        //@ts-ignore
                        name='login'
                        id='login'
                        type='text'
                        {...register('login')}
                    />
                    {errors.login && <span className='text-yellow-500'>{errors.login.message}</span>}
                    <input
                        placeholder='Senha'
                        //@ts-ignore
                        name='pass'
                        id='senha'
                        type='password'
                        {...register('pass')}
                    />
                    {errors.pass && <span>{errors.pass.message}</span>}

                    <div>
                        <button type='submit' disabled={!isValid}>
                            Entrar
                        </button>
                    </div>
                </form>
            </Main>

        </Container>
    );
}

export default Login;

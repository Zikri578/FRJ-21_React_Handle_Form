import React from 'react'
import { useEffect, useState } from 'react'

export default function AuthForm() {

    // state
    const [erros, setErrors] = useState({
        email: {
            type: "Kosong",
            message: "Email Harus Diisi!",
            show: false
        },
        password: {
            type: "Kosong",
            message: "Password Harus Diisi!",
            show: false
        },
        confirm: {
            type: "Kosong",
            message: "Confirm Harus Diisi!",
            show: false
        }

    });

    // const handler submit
    const handleSubmit = (e) => {

        // untuk reload page
        e.preventDefault()

        console.info(e)

        // menangkap value dari element input yang ada di form
        let email = e.target.email.value;
        let password = e.target.password.value;
        let confirm = e.target.confirm.value;

        // memvalidasi sederhana
        if (!email || !password || !confirm) {
            // return alert("Silahkan Lengkap Data!")
            return setErrors({
                // ... => spreat
                ...erros,
                email: {
                    ...erros.email,
                    show: true
                },
                password: {
                    ...erros.password,
                    show: true
                },
                confirm: {
                    ...erros.confirm,
                    show: true
                }
            })
        }
        if (password != confirm) {
            return alert("Password Tidak Sesuai!")
        }
        if (password.length < 6) {
            return alert("Password anda kurang dari 6 karakter")
        }

        // menampilkan output di console
        console.info({ email, password, confirm })
    }

    useEffect(() => {

    })

    return (
        <div>

            <form action="" autoComplete='off' className='w-full h-screen justify-center items-center flex flex-col gap-2 p-' onSubmit={handleSubmit}>

                <h1 h1 className='font-medium p-4' > Halaman Auth Form</h1>

                <div className='form-group flex flex-col gap-2 justify-between items-start'>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' placeholder='Masukkan Email..' className='h-10 px-3 border-[1px] border-gray-300 rounded-md w-[250px]' />
                    {erros.email.show && (
                        <small className='text-red-500'>{erros.email.message}</small>
                    )}
                </div>

                <div className='form-group flex flex-col gap-2 justify-between items-start'>
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' placeholder='Masukkan Password..' className='h-10 px-3 border-[1px] border-gray-300 rounded-md w-[250px]' />
                    {erros.password.show && (
                        <small className='text-red-500'>{erros.password.message}</small>
                    )}
                </div>

                <div className='form-group flex flex-col gap-2 justify-between items-start'>
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" id='confirm' placeholder='Masukkan Confirm..' className='h-10 px-3 border-[1px] border-gray-300 rounded-md w-[250px]' />
                    {erros.confirm.show && (
                        <small className='text-red-500'>{erros.confirm.message}</small>
                    )}
                </div>

                <div className='form-group flex gap-2 justify-between items-start p-4'>
                    <button type='submit' className='h-10 w-[120px] bg-blue-400 text-white rounded-md hover:bg-blue-700'>Register</button>
                </div>

            </form>
        </div >
    )
}


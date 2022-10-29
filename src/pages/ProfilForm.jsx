import React from 'react'
import { useForm } from "react-hook-form"

export default function ProfilForm() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    // console.info(watch("namalengkap"))

    // handle Submit
    const handleProfile = (data) => {
        console.info(data)
    }

    return (
        <div>

            <form action="" autoComplete='off' className='w-full h-screen justify-center items-center flex flex-col gap-2 p-' onSubmit={handleSubmit(handleProfile)}>

                <h1 h1 className='font-medium p-4'> Halaman Profile</h1>

                <div className='form-group flex flex-col gap-2 justify-between items-start'>
                    <label htmlFor="npwp">NPWP</label>
                    <input type="number" id='npwp' {...register("npwp", { required: true, min: 10 })} placeholder='Masukkan NPWP..' className='h-10 px-3 border-[1px] border-gray-300 rounded-md w-[250px]' />
                    {errors?.npwp?.type == "required" && <small className='text-red-500'>NPWP Wajib Diisi</small>}
                    {errors?.npwp?.type == "min" && <small className='text-red-500'>Tidak Boleh Kurang Dari 10 Angka</small>}
                </div>

                <div className='form-group flex flex-col gap-2 justify-between items-start'>
                    <label htmlFor="namalengkap">Nama Lengkap</label>
                    <input type="text" id='namalengkap' {...register("namalengkap", { required: true })} placeholder='Masukkan Nama Lengkap..' className='h-10 px-3 border-[1px] border-gray-300 rounded-md w-[250px]' />
                    {errors.namalengkap && <small className='text-red-500'>Nama Lengkap Wajib Diisi</small>}
                </div>

                <div className='form-group flex flex-col gap-2 justify-between items-start'>
                    <label htmlFor="status">Status Pernikahan</label>
                    <select type="password" id='status' {...register("status", { required: true })} placeholder='Masukkan Status..' className='h-10 px-3 border-[1px] border-gray-300 rounded-md w-[250px]'>
                        <option value="none" id='status'>-</option>
                        <option value="belum" id='status'>Belum Menikah</option>
                        <option value="sudah" id='status'>Sudah Menikah</option>
                    </select>
                    {errors.status && <small className='text-red-500'>Status Wajib Diisi</small>}
                </div>

                <div className='form-group flex flex-col gap-2 justify-between items-start'>
                    <label htmlFor="alamat">Alamat</label>
                    <textarea type="password" id='alamat' {...register("alamat", { required: true })} placeholder='Masukkan Alamat..' className='h-[250px] px-3 border-[1px] border-gray-300 rounded-md w-[250px]' />
                    {errors.alamat && <small className='text-red-500'>Alamat Wajib Diisi</small>}
                </div>

                <div className='form-group flex gap-2 justify-between items-start p-4'>
                    <button type='submit' className='h-10 w-[120px] bg-blue-400 text-white rounded-md hover:bg-blue-700'>Register</button>
                </div>

            </form>
        </div >
    )
}


# FRJ-21_React_Handle_Form

React handle form adalah cara untuk menangani form di aplikasi web yang dibangun menggunakan library React. Ini bisa dilakukan dengan menggunakan fitur-fitur yang disediakan oleh React seperti form elements dan events, atau dengan menggunakan library tambahan seperti Formik atau Redux Form.

Untuk menangani form di React, pertama-tama Anda perlu membuat form HTML dengan elemen-elemen yang diinginkan, seperti input, select, dan button. Kemudian, Anda dapat menggunakan event handlers seperti `onChange` dan `onSubmit` untuk menangani interaksi pengguna dengan form tersebut dan mengirimkan data ke server atau menangani data tersebut secara lokal di aplikasi.

Contohnya, Anda bisa menggunakan event handler `onChange` pada input form untuk menangkap perubahan nilai yang dibuat pengguna dan menyimpannya dalam state aplikasi. Kemudian, Anda bisa menggunakan event handler `onSubmit` pada form untuk menangani submit form dan mengirimkan data tersebut ke server atau menangani data tersebut secara lokal di aplikasi.

Sebagai contoh, berikut ini adalah bagaimana sebuah form dapat ditangani dengan menggunakan event handlers di React:

    import React, { useState } from 'react';

    function FormExample() {
      const [formData, setFormData] = useState({});

      const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        });
      }

      const handleSubmit = (event) => {
        event.preventDefault();
        // Kirim data form ke server atau tangani data tersebut secara lokal di aplikasi
      }

      return (
        <form onSubmit={handleSubmit}>
          <label>
            Nama:
            <input type="text" name="name" onChange={handleChange} />
          </label>
          <br />
          <label>
            Alamat Email:
            <input type="email" name="email" onChange={handleChange} />
          </label>
          <br />
          <button type="submit">Kirim</button>
        </form>
      );
    }
    
Di samping menggunakan event handlers seperti yang telah disebutkan sebelumnya, Anda juga bisa menggunakan library tambahan seperti Formik atau Redux Form untuk membuat proses menangani form di React lebih mudah dan lebih efisien. Kedua library ini menyediakan fitur-fitur yang berguna seperti validasi form, manajemen state form, dan integrasi dengan back-end server.

Sebagai contoh, berikut ini adalah bagaimana sebuah form dapat ditangani menggunakan Formik:

    import React from 'react';
    import { Formik, Form, Field, ErrorMessage } from 'formik';

    function FormExample() {
      return (
        <Formik
          initialValues={{ name: '', email: '' }}
          validate={values => {
            const errors = {};
            if (!values.name) {
              errors.name = 'Nama diperlukan';
            }
            if (!values.email) {
              errors.email = 'Alamat email diperlukan';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Alamat email tidak valid';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              // Kirim data form ke server atau tangani data tersebut secara lokal di aplikasi
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="text" name="name" placeholder="Nama" />
              <ErrorMessage name="name" component="div" />
              <Field type="email" name="email" placeholder="Alamat Email" />
              <ErrorMessage name="email" component="div" />
              <button type="submit" disabled={isSubmitting}>
                Kirim
              </button>
            </Form>
          )}
        </Formik>
      );
    }


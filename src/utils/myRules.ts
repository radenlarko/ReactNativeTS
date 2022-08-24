import { RegisterOptions } from "react-hook-form";

const validPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
const validEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const validUsername = /^[A-Za-z]+$/i;

interface Rules {
  fullName: RegisterOptions;
  firstName: RegisterOptions;
  lastName: RegisterOptions;
  email: RegisterOptions;
  password: RegisterOptions;
  confirmPass: (compare: string) => RegisterOptions;
  gender: RegisterOptions;
  phone: RegisterOptions;
}

const rules: Rules = {
  fullName: {
    required: "Nama tidak boleh kosong",
    minLength: {
      value: 5,
      message: "Nama, panjang minimal 5 karakter!",
    },
  },
  firstName: {
    required: "Nama Depan tidak boleh kosong",
    minLength: {
      value: 3,
      message: "Nama Depan panjang minimal 3 karakter!",
    },
  },
  lastName: {
    required: "Nama Belakang tidak boleh kosong",
    minLength: {
      value: 3,
      message: "Nama Belakang panjang minimal 3 karakter!",
    },
    pattern: {
      value: validUsername,
      message: "Nama Belakang tidak sesuai!",
    },
  },
  email: {
    required: "Email tidak boleh kosong",
    minLength: {
      value: 5,
      message: "Email panjang minimal 5 karakter!",
    },
    pattern: {
      value: validEmail,
      message: "Format email harus benar!",
    },
  },
  password: {
    required: "Password tidak boleh kosong",
    pattern: {
      value: validPassword,
      message:
        "Password harus berisi setidaknya satu angka, satu simbol, satu huruf besar dan kecil, dan panjang minimal 8 karakter",
    },
  },
  confirmPass: (compare) => {
    return {
      required: "Confirm Password tidak boleh kosong",
      validate: (val) => val === compare || "konfirmasi password tidak sesuai",
    };
  },
  gender: {
    required: "Jenis Kelamin tidak boleh kosong",
  },
  phone: {
    required: "Nomor Hp tidak boleh kosong!",
    minLength: { value: 6, message: "Nomor Hp panjang minimal 6 karakter" },
    maxLength: { value: 14, message: "Nomor Hp panjang maksimal 14 karakter" },
  },
};

export { validPassword, validEmail, validUsername, rules };

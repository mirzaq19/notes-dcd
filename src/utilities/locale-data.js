export const login = {
  en: {
    title: 'Login',
    subtitle: 'Please login to continue',
    email: 'Email',
    password: 'Password',
    register_prefix: "don't have an account?",
    register: 'register',
    login: 'Login',
    logging_in: {
      loading: 'Logging in...',
      success: 'Login success',
      error: 'Login failed',
    },
    validation: {
      email: {
        required: 'Email is required',
        invalid: 'Email is invalid',
      },
      password: {
        required: 'Password is required',
      },
    },
  },
  id: {
    title: 'Masuk',
    subtitle: 'Silahkan masuk untuk melanjutkan',
    email: 'Surel',
    password: 'Kata Sandi',
    register_prefix: 'belum punya akun?',
    register: 'daftar',
    login: 'Masuk',
    logging_in: {
      loading: 'Masuk...',
      success: 'Berhasil masuk',
      error: 'Gagal masuk',
    },
    validation: {
      email: {
        required: 'Surel dibutuhkan',
        invalid: 'Surel tidak valid',
      },
      password: {
        required: 'Kata Sandi dibutuhkan',
      },
    },
  },
}

export const register = {
  en: {
    title: 'Register',
    subtitle: 'Please register to continue',
    name: 'Name',
    email: 'Email',
    password: 'Password',
    password_confirmation: 'Password Confirmation',
    login_prefix: 'already have an account?',
    login: 'login',
    register: 'Register',
    registering: {
      loading: 'Registering...',
      success: 'Register success',
      error: 'Register failed',
    },
    validation: {
      name: {
        required: 'Name is required',
      },
      email: {
        required: 'Email is required',
        invalid: 'Email is invalid',
      },
      password: {
        required: 'Password is required',
      },
      password_confirmation: {
        required: 'Password confirmation is required',
        same: 'Password confirmation must be same as password',
      },
    },
  },

  id: {
    title: 'Daftar',
    subtitle: 'Silahkan daftar untuk melanjutkan',
    name: 'Nama',
    email: 'Surel',
    password: 'Kata Sandi',
    password_confirmation: 'Konfirmasi Kata Sandi',
    login_prefix: 'sudah punya akun?',
    login: 'masuk',
    register: 'Daftar',
    registering: {
      loading: 'Mendaftar...',
      success: 'Berhasil mendaftar',
      error: 'Gagal mendaftar',
    },
    validation: {
      name: {
        required: 'Nama dibutuhkan',
      },
      email: {
        required: 'Surel dibutuhkan',
        invalid: 'Surel tidak valid',
      },
      password: {
        required: 'Kata Sandi dibutuhkan',
      },
      password_confirmation: {
        required: 'Konfirmasi Kata Sandi dibutuhkan',
        same: 'Konfirmasi Kata Sandi harus sama dengan Kata Sandi',
      },
    },
  },
}

export const search = {
  en: {
    title: 'Search note',
    placeholder: 'Type title to search',
  },
  id: {
    title: 'Cari catatan',
    placeholder: 'Tuliskan judul untuk mencari',
  },
}

export const noteList = {
  en: {
    active_notes: 'Active notes',
    archived_notes: 'Archived notes',
    empty: 'No notes',
  },
  id: {
    active_notes: 'Catatan aktif',
    archived_notes: 'Catatan terarsip',
    empty: 'Tidak ada catatan',
  },
}

export const addNote = {
  en: {
    title: 'Add note',
    placeholder: {
      title: 'Type note title',
      content: 'Type note content',
    },
    validation: {
      title: {
        required: 'Title is required',
        long: 'Title is too long',
      },
      content: {
        required: 'Content is required',
      },
    },
    adding: {
      loading: 'Adding note...',
      success: 'Note added',
      error: 'Failed to add note',
    },
    add_button: 'Add note',
  },
  id: {
    title: 'Buat catatan',
    placeholder: {
      title: 'Tuliskan judul catatan',
      content: 'Tuliskan isi catatan',
    },
    validation: {
      title: {
        required: 'Judul dibutuhkan',
        long: 'Judul terlalu panjang',
      },
      content: {
        required: 'Isi dibutuhkan',
      },
    },
    adding: {
      loading: 'Menambah catatan...',
      success: 'Catatan ditambahkan',
      error: 'Gagal menambah catatan',
    },
    add_button: 'Buat catatan',
  },
}

export const inputCounter = {
  en: {
    counter: 'Characters left',
  },
  id: {
    counter: 'Sisa karakter',
  },
}

export const navbar = {
  en: {
    notes: 'Notes',
    add: 'Add',
    archives: 'Archives',
    logout: 'Logout',
  },
  id: {
    notes: 'Catatan',
    add: 'Tambah',
    archives: 'Arsip',
    logout: 'Keluar',
  },
}

export const detailNote = {
  en: {
    error_fetching: 'Failed to fetch note',
    archive: 'Archive',
    archiving: {
      loading: 'Archiving...',
      success: 'Note archived',
      error: 'Failed to archive note',
    },
    unarchive: 'Unarchive',
    unarchiving: {
      loading: 'Unarchiving...',
      success: 'Note unarchived',
      error: 'Failed to unarchive note',
    },
    delete: 'Delete',
    deleting: {
      loading: 'Deleting...',
      success: 'Note deleted',
      error: 'Failed to delete note',
    },
  },
  id: {
    error_fetching: 'Gagal mengambil catatan',
    archive: 'Arsip',
    archiving: {
      loading: 'Mengarsip...',
      success: 'Catatan diarsipkan',
      error: 'Gagal mengarsipkan catatan',
    },
    unarchive: 'Buka arsip',
    unarchiving: {
      loading: 'Membuka arsip...',
      success: 'Catatan dibuka dari arsip',
      error: 'Gagal membuka catatan dari arsip',
    },
    delete: 'Hapus',
    deleting: {
      loading: 'Menghapus...',
      success: 'Catatan dihapus',
      error: 'Gagal menghapus catatan',
    },
  },
}

function verifikasiLogin(username, password) {
  try {
    if (username === "admin" && password === "12345") {
      console.log("Login berhasil")
    } else if (typeof username == "string" && typeof password == "string") {
      console.log("Username atau password salah")
      // throw new Error("Username atau password salah")
    } else {
      throw new Error("Username dan password harus berupa teks")
    }
  } catch (err) {
    console.error("Terjadi Kesalahan:", err.message)
  }
}

verifikasiLogin("admin", "12345")
verifikasiLogin("admin", "salah")
verifikasiLogin(123, true)

// Definisikan kelas BankAccount
class BankAccount {
  constructor(initialBalance = 0) {
    this.balance = initialBalance;
  }

  deposit(amount) {
    setTimeout(() => {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
        tampilkanSaldo(); // Memanggil fungsi tampilkanSaldo()
      } else {
        console.log("Invalid deposit amount.");
      }
    }, 1000); // Menunggu 1 detik sebelum menjalankan deposit
  }

  withdraw(amount) {
    setTimeout(() => {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
        tampilkanSaldo(); // Memanggil fungsi tampilkanSaldo()
      } else {
        console.log("Invalid withdrawal amount.");
      }
    }, 2000); // Menunggu 2 detik sebelum menjalankan penarikan
  }
}

// Panggil fungsi tampilkanSaldo() saat halaman dimuat
function tampilkanSaldo() {
  const saldoDisplay = document.getElementById("saldoDisplay");
  saldoDisplay.textContent = account.balance.toFixed(2); // Menampilkan saldo dengan dua angka desimal
}

// Fungsi untuk menambahkan saldo dengan menggunakan window.prompt()
function tambahSaldo() {
  const jumlahTambah = parseFloat(prompt("Masukkan jumlah saldo yang akan ditambahkan:"));
  if (!isNaN(jumlahTambah) && jumlahTambah > 0) {
    account.deposit(jumlahTambah); // Panggil metode deposit dari objek account
  } else {
    alert("Masukkan jumlah yang valid.");
  }
}

// Fungsi untuk mengurangi saldo dengan menggunakan window.prompt()
function kurangiSaldo() {
  const jumlahKurang = parseFloat(prompt("Masukkan jumlah saldo yang akan dikurangkan:"));
  if (!isNaN(jumlahKurang) && jumlahKurang > 0 && jumlahKurang <= account.balance) {
    account.withdraw(jumlahKurang); // Panggil metode withdraw dari objek account
  } else {
    alert("Masukkan jumlah yang valid.");
  }
}

const account = new BankAccount(0);

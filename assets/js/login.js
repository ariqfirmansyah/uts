const loginForm = document.getElementById('loginForm');
const modal = document.getElementById('infoModal');
const closeBtn = document.querySelector('.close');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const emailInput = document.getElementById('email').value;
    const passInput = document.getElementById('password').value;

    const isValid = dataPengguna.find(u => u.email === emailInput && u.password === passInput);
    
    if(isValid) {
        window.location.href = "dashboard.html";
    } else {
        alert("Email atau Password yang Anda masukkan salah!");
    }
});

function showModal(title, body) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalBody').innerText = body;
    modal.style.display = 'flex';
}

document.getElementById('btnLupaPass').addEventListener('click', () => {
    showModal("Lupa Password", "Silakan hubungi administrator toko untuk mereset password Anda.");
});

document.getElementById('btnDaftar').addEventListener('click', () => {
    showModal("Daftar Akun Baru", "Pendaftaran saat ini ditutup. Sistem semi-manual sedang digunakan.");
});

closeBtn.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', (e) => { 
    if(e.target === modal) modal.style.display = 'none'; 
});
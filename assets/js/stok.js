const tbody = document.getElementById('tabelStok');

function renderTable() {
    tbody.innerHTML = '';
    dataKatalogBuku.forEach(item => {
        let tr = document.createElement('tr');
        
        // Memeriksa apakah buku memiliki gambar cover
        let imgTag = item.cover ? `<img src="${item.cover}" style="width: 45px; border-radius: 4px;" alt="cover">` : '-';

        tr.innerHTML = `
            <td style="text-align: center;">${imgTag}</td>
            <td>${item.kodeBarang}</td>
            <td>${item.namaBarang}</td>
            <td>${item.jenisBarang}</td>
            <td>${item.edisi}</td>
            <td>${item.stok}</td>
            <td>${item.harga}</td>
        `;
        tbody.appendChild(tr);
    });
}

renderTable();

document.getElementById('formTambahStok').addEventListener('submit', function(e) {
    e.preventDefault();
    
    dataKatalogBuku.push({
        kodeBarang: document.getElementById('inputKode').value,
        namaBarang: document.getElementById('inputNama').value,
        jenisBarang: document.getElementById('inputJenis').value,
        edisi: document.getElementById('inputEdisi').value,
        stok: parseInt(document.getElementById('inputStok').value),
        harga: document.getElementById('inputHarga').value,
        cover: "" // Kosong untuk inputan baru
    });

    renderTable(); 
    this.reset(); 
    alert("Buku berhasil ditambahkan ke tabel!");
});
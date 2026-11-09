document.getElementById('formTracking').addEventListener('submit', function(e) {
    e.preventDefault();
    const resiInput = document.getElementById('inputResi').value;
    
    // Format JSON dosen adalah Object Keys, bukan Array biasa
    const data = dataTracking[resiInput];
    
    if (data) {
        document.getElementById('hasilTracking').style.display = 'block';
        document.getElementById('trackNama').innerText = data.nama;
        document.getElementById('trackEkspedisi').innerText = data.ekspedisi;
        document.getElementById('trackTanggal').innerText = data.tanggalKirim;
        document.getElementById('trackPaket').innerText = data.paket;
        document.getElementById('trackTotal').innerText = data.total;
        document.getElementById('trackStatusText').innerText = data.status;
        
        // Render riwayat perjalanan paket
        const listPerjalanan = document.getElementById('listPerjalanan');
        listPerjalanan.innerHTML = '';
        
        data.perjalanan.forEach(item => {
            let li = document.createElement('li');
            li.style.marginBottom = '10px';
            li.style.borderBottom = '1px dashed #333';
            li.style.paddingBottom = '5px';
            li.innerHTML = `<span style="color: var(--primary-color)">[${item.waktu}]</span> <br> ${item.keterangan}`;
            listPerjalanan.appendChild(li);
        });

    } else {
        alert("Nomor Delivery Order tidak ditemukan! (Coba: 20230012 atau 20230013)");
        document.getElementById('hasilTracking').style.display = 'none';
    }
});
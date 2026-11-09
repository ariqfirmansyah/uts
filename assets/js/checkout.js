document.getElementById('btnTambahItem').addEventListener('click', function() {
    const itemInput = document.getElementById('itemBaru');
    
    if(itemInput.value.trim() !== "") {
        const li = document.createElement('li');
        li.style.padding = "10px";
        li.style.borderBottom = "1px solid #333";
        li.innerText = itemInput.value + " - Menunggu Kalkulasi Harga";
        
        document.getElementById('listPesanan').appendChild(li);
        itemInput.value = "";
    } else {
        alert("Nama buku tidak boleh kosong!");
    }
});
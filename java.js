// Menunggu halaman sepenuhnya dimuat
window.onload = function() {
    const container = document.querySelector('.container');
    container.style.opacity = 1; // Fade-in efek untuk konten halaman

    // Menambahkan efek transisi teks judul
    const title = document.getElementById('title');
    title.innerHTML = "Selamat Ulang Tahun, Sayang! 🎉";
    title.style.transition = "all 2s ease";
    
    // Karena elemen video sudah dihapus, bagian ini tidak diperlukan lagi
};

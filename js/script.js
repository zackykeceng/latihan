document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const response = document.getElementById("response");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      response.textContent = "Pesan berhasil dikirim! Terima kasih telah menghubungi kami.";
      form.reset();
    });
  }
});

// ==== Popup Modal untuk Anggota ====
document.addEventListener('DOMContentLoaded', () => {
  const members = document.querySelectorAll('.member'); // asumsi class anggota = .member
  const popupOverlay = document.getElementById('popupOverlay');
  const popupName = document.getElementById('popupName');
  const popupMotto = document.getElementById('popupMotto');
  const popupIG = document.getElementById('popupIG');
  const closePopup = document.getElementById('closePopup');

  // Data contoh, nanti bisa diubah sesuai anggota
  const memberData = {
    'Alvin': { motto: 'Selalu belajar dan berbagi.', ig: 'https://instagram.com/alvin' },
    'Bella': { motto: 'Kreatif dan pantang menyerah.', ig: 'https://instagram.com/bella' },
    'Citra': { motto: 'Berani bermimpi besar.', ig: 'https://instagram.com/citra' },
    'Dimas': { motto: 'Kerja keras adalah kunci.', ig: 'https://instagram.com/dimas' },
    'Eka': { motto: 'Selalu positif dan optimis.', ig: 'https://instagram.com/eka' }
  };

  members.forEach(member => {
    member.addEventListener('click', () => {
      const name = member.querySelector('h3') ? member.querySelector('h3').innerText : 'Anggota';
      const data = memberData[name] || { motto: 'Belum ada motto.', ig: '#' };

      popupName.innerText = name;
      popupMotto.innerText = '"' + data.motto + '"';
      popupIG.href = data.ig;

      popupOverlay.style.display = 'flex';
    });
  });

  closePopup.addEventListener('click', () => {
    popupOverlay.style.display = 'none';
  });

  popupOverlay.addEventListener('click', (e) => {
    if (e.target === popupOverlay) popupOverlay.style.display = 'none';
  });
});

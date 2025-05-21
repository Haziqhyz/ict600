document.getElementById("borangForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form inputs
  const tarikh = form.tarikh.value;
  const nama = form.nama.value.trim();
  const ic = form.nopekerja.value.trim();
  const jawatan = form.jawatan.value.trim();
  const bahagian = form.bahagian.value.trim();
  const telefon = form.telefon.value.trim();
  const email = form.email.value.trim();

  // Simple validation
  if (!tarikh || !nama || !ic || !jawatan || !bahagian || !telefon || !email) {
    alert("❌ Sila isi semua ruangan yang wajib.");
    return;
  }

  if (!/^\d{10,12}$/.test(telefon)) {
    alert("❌ No telefon mesti mengandungi hanya nombor (10–12 digit).");
    return;
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    alert("❌ Alamat emel tidak sah.");
    return;
  }

  // If all good, display result and show success alert
  let output = "<h3>Maklumat Permohonan:</h3><ul>";

  const formData = new FormData(form);
  for (let [key, value] of formData.entries()) {
    output += `<li><strong>${key}</strong>: ${value}</li>`;
  }

  output += "</ul>";
  document.getElementById("result").innerHTML = output;

  alert("✅ Borang berjaya dihantar!");
});

document.getElementById("borangForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const form = e.target; // Use the form reference from the event

  // Get required fields
  const tarikh = form.tarikh.value;
  const nama = form.nama.value.trim();
  const nopekerja = form.nopekerja.value.trim();
  const jawatan = form.jawatan.value.trim();
  const bahagian = form.bahagian.value.trim();
  const telefon = form.telefon.value.trim();
  const email = form.email.value.trim();
  const ttangan = form.ttangan.value.trim();
  const cop = form.cop.value.trim();
  const diluluskan = form.diluluskan.value.trim();
  const ttangan2 = form.ttangan2.value.trim();
  const tterima = form.tterima.value;
  const tsiap = form.tsiap.value;
  const maklumatChecked = form.querySelectorAll('input[name="maklumat"]:checked');
  // Validate required fields
  if (!tarikh || !nama || !nopekerja || !jawatan || !bahagian || !telefon || !email) {
    alert("❌ Sila isi semua ruangan yang wajib.");
    return;
  }

  // Validate phone format (10-12 digits)
  if (!/^\d{10,12}$/.test(telefon)) {
    alert("❌ No telefon mesti mengandungi hanya nombor (10–12 digit).");
    return;
  }

  // Validate email format
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    alert("❌ Alamat emel tidak sah.");
    return;
  }

  // Validate at least one checkbox is selected
  if (maklumatChecked.length === 0) {
    alert("❌ Sila pilih sekurang-kurangnya satu Jenis Maklumat.");
    return;
  }

  // If validation passes, show results
  const formData = new FormData(form);
  let output = "<h3>Maklumat Permohonan:</h3><ul>";

  // Process checkboxes
  const maklumat = Array.from(maklumatChecked).map(item => item.value).join(", ");
  const lokasi = Array.from(form.querySelectorAll('input[name="lokasi"]:checked')).map(item => item.value).join(", ");

  // Build output HTML
  output += `<li><strong>Tarikh:</strong> ${formData.get("tarikh")}</li>`;
  output += `<li><strong>No Pekerja:</strong> ${formData.get("nopekerja")}</li>`;
  output += `<li><strong>Nama:</strong> ${formData.get("nama")}</li>`;
  output += `<li><strong>Jawatan:</strong> ${formData.get("jawatan")}</li>`;
  output += `<li><strong>Bahagian:</strong> ${formData.get("bahagian")}</li>`;
  output += `<li><strong>Telefon:</strong> ${formData.get("telefon")}</li>`;
  output += `<li><strong>Email:</strong> ${formData.get("email")}</li>`;
  output += `<li><strong>Jenis Maklumat:</strong> ${formData.get("maklumat")}</li>`;
  output += `<li><strong>Lokasi Paparan Maklumat:</strong> ${formData.get("lokasi")}</li>`;
  output += `<li><strong>Tandatangan:</strong> ${formData.get("ttangan")}</li>`;
  output += `<li><strong>Cop:</strong> ${formData.get("cop")}</li>`;
  output += `<li><strong>Diluluskan oleh:</strong> ${formData.get("diluluskan")}</li>`;
  output += `<li><strong>Tandatangan:</strong> ${formData.get("ttangan2")}</li>`;
  output += `<li><strong>Tarikh Terima:</strong> ${formData.get("tterima")}</li>`;
  output += `<li><strong>Tarikh Siap:</strong> ${formData.get("tsiap")}</li>`;
  
  output += "</ul>";
  document.getElementById("result").innerHTML = output;
  alert("✅ Borang berjaya dihantar!");

});
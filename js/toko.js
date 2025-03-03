let frm = document.getElementById("pegawai");

// jabatan
let arrayJabatan = ["Manager", "Asisten Manager", "Staff"];
let pilihjabatan = `<option value="">--Pilih jabatan--</option>`;
for (let p in arrayJabatan) {
  pilihjabatan += `<option value="${arrayJabatan[p]}"> ${arrayJabatan[p]}</option>`;
}
frm.jabatan.innerHTML = pilihjabatan;

// status
let arrayStatus = ["Menikah", "Belum Menikah"];
let pilihStatus = `<option value="">--Pilih Status--</option>`;
for (let p in arrayStatus) {
  pilihStatus += `<option value="${arrayStatus[p]}"> ${arrayStatus[p]}</option>`;
}
frm.status.innerHTML = pilihStatus;

function transaksi() {
  let nama = frm.nama.value;
  let jabatan = frm.jabatan.value;
  let status = frm.status.value;
  let gajiPokok = 0;

  //logic gaji pokok
  if (jabatan == "Manager") {
    gajiPokok = 15000000;
  } else if (jabatan == "Asisten Manager") {
    gajiPokok = 10000000;
  } else if (jabatan == "Staff") {
    gajiPokok = 5000000;
  } else {
    gajiPokok = 0;
  }

  //logic tunjangan jabatan
  let tunjanganJabatan = 0.15 * gajiPokok;

  //logic bpjs
  let bpjs = 0.1 * gajiPokok;

  //logic tunjangan keluarga
  let tunjanganKeluarga = status == "Menikah" ? 0.2 * gajiPokok : "0";

  let totalGaji = gajiPokok + tunjanganJabatan + tunjanganKeluarga + bpjs;

  Swal.fire({
    title: "Error!",
    html: `
    <table border="1px" cellpadding="10" cellspacing="0" align="center" width="100%">
            <thead align="center" style="background-color: lightsalmon;">
                <tr align="center">
                    <td>No</td>
                    <td>Nama Pegawai</td>
                    <td>Jabatan</td>
                    <td>Status</td>
                </tr>
            </thead>
            <tbody style="background-color: lightgrey;">
                <tr align="center">
                  <td>1</td>
                  <td>${nama}</td>
                  <td>${jabatan}</td>
                  <td>${status}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr align="center">
                    <td style="background-color: lightsalmon;" >Total Gaji</td>
                    <td colspan="3" style="background-color: lightgrey;">
                        Rp.${totalGaji}
                    </td>
                </tr>
            </tfoot>
    </table>
    `,
  });
}

<template>
  <div class="card p-3 shadow">
    <h5>Spektek</h5>
    <br />
    <button type="button" style="width: 120px" class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#modalmasuk"><i class="fa-solid fa-file-circle-plus me-1"></i>Add Data</button>

    <div class="modal fade" id="modalmasuk" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <form>
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Tambah Data</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col">
                  <div class="mb-3">
                    <label class="form-label">Lokasi</label>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Code Barang</label>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Jenis Barang</label>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Merk</label>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Spesifikasi </label>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Jumlah</label>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Satuan</label>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Kondisi</label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="col">
                  <div class="mb-3">
                    <label class="form-label">Tahun</label>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Asal</label>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Gambar</label>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Tanggal</label>
                    <input type="date" class="form-control" />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Dokumen</label>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Keterangan</label>
                    <textarea class="form-control" rows="3"></textarea>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">QR Code</label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Lokasi</th>
          <th scope="col">Code Barang</th>
          <th scope="col">Jenis Barang</th>
          <th scope="col">Merk</th>
          <th scope="col">Spesifikasi</th>
          <th scope="col">Jumlah</th>
          <th scope="col">Satuan</th>
          <th scope="col">Kondisi</th>
          <th scope="col">Tahun</th>
          <th scope="col">Asal</th>
          <th scope="col">Gambar</th>
          <th scope="col">Tanggal</th>
          <th scope="col">Documen</th>
          <th scope="col">Keterangan</th>
          <th scope="col">RQ Code</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "SpektekView",
};
</script>

<template>
  <div class="card p-3 shadow">
    <h5>Telegram Masuk</h5>
    <br>
    <button type="button" style="width: 120px;" class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#modalmasuk">
      <i class="fa-solid fa-file-circle-plus me-1"></i>Add Data
    </button>

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
                    <label class="form-label">Dari</label>
                    <input type="text" class="form-control">
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Tembusan</label>
                    <input type="text" class="form-control">
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Jenis Telegram</label>
                    <select class="form-select">
                      <option value="">Terbuka</option>
                      <option value="">Tertutup</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Isi</label>
                    <textarea class="form-control" rows="3"></textarea>
                  </div>
                </div>
                <div class="col">
                  <div class="mb-3">
                    <label class="form-label">Kepada</label>
                    <input type="text" class="form-control">
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Klasifikasi</label>
                    <input type="text" class="form-control">
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Nomor</label>
                    <input type="text" class="form-control">
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Waktu Penunjukan</label>
                    <input type="text" class="form-control">
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
          <th scope="col">Dari</th>
          <th scope="col">Kepada</th>
          <th scope="col">Tembusan</th>
          <th scope="col">Klasifikasi</th>
          <th scope="col">Jenis Telegram</th>
          <th scope="col">Nomer</th>
          <th scope="col">Waktu Penunjukan</th>
          <th scope="col">Tanggal Masuk</th>
          <th scope="col">Isi</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'TeleInView',
}
</script>

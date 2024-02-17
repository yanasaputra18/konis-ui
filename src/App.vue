<template>
  <div class="row w-100 overflow-hidden" style="height: 100vh;padding: 0 !important;">
    <div class="col-md-2 bg-white border-right border" style="padding: 0 !important;">

    </div>
    <div class="col-md-10" style="padding: 0 !important;">
      <nav class="navbar navbar-expand-lg bg-white border-0 border-bottom px-5">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src="@/assets/logo.jpeg" class="h-100" style="width: 40px;">
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item"><router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <div class="d-flex">
              <h6>user <span class="mx-2">|</span> <i class="fa-solid fa-address-card"></i></h6>
            </div>
          </div>
        </div>
      </nav>
      <router-view />
    </div>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>

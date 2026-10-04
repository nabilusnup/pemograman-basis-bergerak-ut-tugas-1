<script setup lang="ts">
import { ref } from 'vue';
import logo from './assets/logo.png';
import { DEFAULT_NIM, parseNim } from './algorithms';
import { nim } from './state';

const draft = ref(nim.value);
const error = ref('');
const notice = ref('');
function applyNim() {
  try {
    parseNim(draft.value);
    nim.value = draft.value;
    error.value = '';
    notice.value = 'Hasil diperbarui untuk NIM ' + nim.value + '.';
  } catch (cause) {
    error.value = (cause as Error).message;
    notice.value = '';
  }
}
function resetNim() {
  draft.value = DEFAULT_NIM;
  applyNim();
}
</script>

<template>
  <div class="app-shell">
    <aside class="sidebar">
      <RouterLink
        to="/"
        class="brand"
        ><img
          :src="logo"
          alt=""
          width="37"
          height="37"
          style="margin-right: 12px; border-radius: 10px"
        />
        nim<span class="brand-light">lab</span
        ><span class="brand-dot">.</span></RouterLink
      >
      <div class="workspace-label">RUANG PRAKTIKUM</div>
      <nav aria-label="Navigasi utama">
        <RouterLink
          to="/"
          class="nav-link"
          ><span class="nav-icon">▦</span> Ringkasan</RouterLink
        >
        <div class="nav-label">LATIHAN TYPESCRIPT</div>
        <RouterLink
          to="/segitiga"
          class="nav-link"
          ><span class="nav-icon">△</span> Pola segitiga <small>01</small></RouterLink
        >
        <RouterLink
          to="/aritmatika"
          class="nav-link"
          ><span class="nav-icon">↗</span> Deret aritmatika <small>02</small></RouterLink
        >
        <RouterLink
          to="/prima"
          class="nav-link"
          ><span class="nav-icon">#</span> Bilangan prima <small>03</small></RouterLink
        >
        <div class="nav-divider"></div>
        <RouterLink
          to="/tentang"
          class="nav-link"
          ><span class="nav-icon">ⓘ</span> Tentang praktikum</RouterLink
        >
      </nav>
      <div class="sidebar-bottom">
        <span class="status-dot"></span> Vue + TypeScript
        <div>MSIM4401 · Aktivitas 04</div>
      </div>
    </aside>
    <div class="main-shell">
      <header class="topbar">
        <span
          >Praktikum pemrograman <span class="breadcrumb">/</span>
          <strong>Eksplorasi NIM</strong></span
        ><span class="student-badge"
          ><span class="avatar">N</span
          ><span>{{ nim }}<small>Mahasiswa</small></span></span
        >
      </header>
      <main>
        <div class="page-heading">
          <div>
            <div class="eyebrow">BELAJAR MELALUI ANGKA</div>
            <h1>Angka kecil, pola besar<span>.</span></h1>
            <p>Ubah digit NIM menjadi tiga latihan logika pemrograman.</p>
          </div>
          <span class="course-tag">MSIM4401 <span>↗</span></span>
        </div>
        <section
          class="nim-panel"
          aria-labelledby="nim-title"
        >
          <div>
            <span class="panel-label">IDENTITAS PRAKTIKUM</span>
            <h2 id="nim-title">Mulai dari NIM Anda</h2>
            <p>Setiap digit menjadi bagian dari perhitungan.</p>
          </div>
          <form
            @submit.prevent="applyNim"
            class="nim-form"
          >
            <label for="nim">Nomor Induk Mahasiswa</label>
            <div class="input-group">
              <input
                id="nim"
                v-model="draft"
                type="text"
                inputmode="numeric"
                maxlength="9"
                autocomplete="off"
                :aria-invalid="!!error"
                :aria-describedby="error ? 'nim-error' : undefined"
              /><button
                type="submit"
                class="primary-button"
              >
                Hitung hasil <span>→</span>
              </button>
            </div>
            <button
              type="button"
              class="reset-button"
              @click="resetNim"
            >
              ↺ Gunakan NIM 054727057
            </button>
          </form>
          <p
            v-if="error"
            id="nim-error"
            class="form-error"
            role="alert"
          >
            {{ error }}
          </p>
          <p
            class="sr-only"
            role="status"
          >
            {{ notice }}
          </p>
        </section>
        <RouterView />
        <footer>
          <span>NIM Lab <span class="footer-dot">·</span> Praktikum Vue & TypeScript</span
          ><span>Dibuat untuk belajar, satu pola setiap waktu.</span>
        </footer>
      </main>
    </div>
  </div>
</template>

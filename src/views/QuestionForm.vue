<template>
  <div class="app-layout">
    <Sidebar />

    <div class="main-content">
      <h1>Question</h1>
      <p><strong>Home / Question</strong></p>

      <label>Deskripsikan Pertanyaan Disini</label>
      <textarea rows="4" placeholder="Deskripsikan Pertanyaan Disini"></textarea>

      <div style="display: flex; gap: 1rem;">
        <div style="flex: 1;">
          <label>Pilih Level</label>
          <select>
            <option>SD</option>
            <option>SMP</option>
            <option>SMA</option>
          </select>
        </div>
        <div style="flex: 1;">
          <label>Pilih Materi</label>
          <select>
            <option>Aljabar</option>
            <option>Geometri</option>
            <option>Statistik</option>
          </select>
        </div>
      </div>

      <div>
        <h3>Options</h3>
        <input type="text" placeholder="Pilihan Jawaban 1" />
        <input type="text" placeholder="Pilihan Jawaban 2" />
        <input type="text" placeholder="Pilihan Jawaban 3" />
        <input type="text" placeholder="Pilihan Jawaban 4" />
      </div>

      <button>+ SUBMIT</button>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
export default {
  components: { Sidebar }
}
</script>

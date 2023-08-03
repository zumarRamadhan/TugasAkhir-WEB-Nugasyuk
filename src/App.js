import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React, { useState } from 'react';
import Login from "../src/login/login";
// role admin
import BerandaAdmin from './admin/BerandaAdmin';
import PageGuru from './admin/PageGuru';
import PageMurid from './admin/PageMurid';
import PageKelas from './admin/PageKelas';
import MataPelajaran from './admin/MataPelajaran';
import JadwalKBM from './admin/JadwalKBM';
import PageAssets from './admin/PageAssets';
import AddAssets from './admin/AddAssets';
import FormAddJadwalKbm from './admin/formAddJadwalKbm';
import FormAddMurid from './admin/FormAddMurid';
import FormAddGuru from './admin/FormAddGuru';
import FormAddKelas from './admin/FormAddKelas';
import FormAddMapel from './admin/FormAddMapel';
import FormAddAssets from './admin/FormAddAssets';
import EditFormAddJadwal from './admin/EditFormAddJadwalKbm';
import EditFormAddGuru from './admin/EditFormAddGuru';
import EditFormAddMurid from './admin/EditFormAddMurid';
import EditFormAddKelas from './admin/EditFormAddKelas';
import EditFormAddMapel from './admin/EditFormAddMapel';
// end role admin

// role murid
import BerandaMurid from './murid/BerandaMurid';
import PageTugas from './murid/PageTugas';
import PageJadwal from './murid/JadwalKbm';
import PageMapel from './murid/MataPelajaran';
import Konseling from './murid/PageKonseling';
import Materi from './murid/MapelMateri';
import DetailMateri from './murid/DetailMateri';
import DetailTask from './murid/DetailTugas';
import HistoryCounseling from './murid/RiwayatKonseling';
import PageBuatJanji from './murid/PageBuatJanji';
// end role murid

// role guru
import BerandaGuru from './guru/BerandaGuru';

import KBM from './guru/PageKbm';
import DetailKbm from './guru/DetailKbm';
import DetailMateriKbm from './guru/DetailMateriKbm';
import FormMateriKBM from './guru/FormMateriKBM';
import DetailTugasKbm from './guru/DetailTugasKbm';
import FormTugasKBM from './guru/FormTugasKBM';

import CekPengumpulan from './guru/CekPengumpulan';

import PagePengumpulan from './guru/PagePengumpulan';
import DetailPengumpulan from './guru/DetailPengumpulan';
import DetailSelesai from './guru/DetailSelesai';
import DetailMenunggu from './guru/DetailMenunggu';

import Jadwal from './guru/JadwalKbm';
// end role guru

// role wali murid
import BerandaWaliMurid from './waliMurid/BerandaWaliMurid';
import PageTugasWaliMurid from './waliMurid/PageTugas';
import PageMapelWaliMurid from './waliMurid/PageMapel';
import PageJadwalWaliMurid from './waliMurid/JadwalKbm';
import MapelMateri from './waliMurid/MapelMateri';
import MapelTugas from './waliMurid/MapelTugas';
import DetailMaterial from './waliMurid/DetailMateri';
// end role wali murid
// role bk
import BerandaBk from './guruBk/BerandaBk';
import JanjiKonseling from './guruBk/JanjiKonseling';
import PageChat from './guruBk/PageChat';
// end role bk
import Notfound from './Notfound';

function App() {

  return(
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} /> 

         {/*role admin  */}
        <Route path="/admin/berandaadmin" element={<BerandaAdmin/>} />  
        <Route path="/admin/pageguru" element={<PageGuru/>} />  
        <Route path="/admin/pagemurid" element={<PageMurid/>} />
        <Route path="/admin/pagekelas" element={<PageKelas/>} />
        <Route path="/admin/matapelajaran" element={<MataPelajaran/>} />
        <Route path="/admin/jadwalkbm" element={<JadwalKBM/>} />
        <Route path="/admin/pageassets" element={<PageAssets/>} />
        <Route path="/admin/pageassets/list" element={<AddAssets/>} />
        <Route path="/admin/jadwalkbm/tambah" element={<FormAddJadwalKbm/>} />
        <Route path="/admin/pagemurid/add" element={<FormAddMurid/>} />
        <Route path="/admin/pageguru/add" element={<FormAddGuru/>} />
        <Route path="/admin/pagekelas/add" element={<FormAddKelas/>} />
        <Route path="/admin/matapelajaran/add" element={<FormAddMapel/>} />
        <Route path="/admin/pageassets/list/add" element={<FormAddAssets/>} />
        <Route path="/admin/jadwalkbm/edit/:id" element={<EditFormAddJadwal/>} />
        <Route path="/admin/pageguru/edit/:id" element={<EditFormAddGuru/>} />
        <Route path="/admin/pagemurid/edit/:id" element={<EditFormAddMurid/>} />
        <Route path="/admin/pagekelas/edit/:id" element={<EditFormAddKelas/>} />
        <Route path="/admin/matapelajaran/edit/:id" element={<EditFormAddMapel/>} />
        {/* end role admin */}

        {/* role murid */}
        <Route path="/murid/berandamurid" element={<BerandaMurid/>} /> 
        <Route path="/murid/pagetugas" element={<PageTugas/>} /> 
        <Route path="/murid/pagekbm" element={<PageJadwal/>} /> 
        <Route path="/murid/pagemapel" element={<PageMapel/>} /> 
        <Route path="/murid/pagekonseling" element={<Konseling/>} /> 
        <Route path="/murid/pagekonseling/buatjanji" element={<PageBuatJanji/>} /> 
        <Route path="/murid/mapelmateri" element={<Materi/>} /> 
        <Route path="/murid/pagemapel/mapelmateri" element={<Materi/>} /> 
        <Route path="/murid/pagemapel/detailmateri" element={<DetailMateri/>} /> 
        <Route path="/murid/pagemapel/detailtugas" element={<DetailTask/>} /> 
        <Route path="/murid/pagekonseling/buatjanji" element={<PageBuatJanji/>} /> 
        <Route path="/murid/pagemapel/mapelmateri/:id" element={<Materi/>} /> 
        <Route path="/murid/detailmateri" element={<DetailMateri/>} /> 
        <Route path="/murid/detailtugas/:id" element={<DetailTask/>} /> 
        <Route path="/murid/pagekonseling/riwayatkonseling" element={<HistoryCounseling/>} /> 
        {/* end role murid */}

        {/* role guru */}
        <Route path='/guru/berandaguru' element={<BerandaGuru/>}/>

        <Route path='/guru/pagekbm' element={<KBM/>}/>
        <Route path='/guru/pagekbm/detail/:id' element={<DetailKbm/>}/>

        <Route path='/guru/pagekbm/detail/detailmateri/:id' element={<DetailMateriKbm/>}/>
        <Route path='/guru/pagekbm/detail/formmateri' element={<FormMateriKBM/>}/>
        <Route path='/guru/pagekbm/detail/detailtugas/:id' element={<DetailTugasKbm/>}/>
        <Route path='/guru/pagekbm/detail/formtugas' element={<FormTugasKBM/>}/>

        <Route path='/guru/pagekbm/detail/detailtugas/listtugas/:id' element={<CekPengumpulan/>}/>

        <Route path='/guru/pagepengumpulan' element={<PagePengumpulan/>}/>
        <Route path='/guru/pagepengumpulan/detail/:id' element={<DetailPengumpulan/>}/>
        <Route path='/guru/pagepengumpulan/detail/detailmenunggu/:id' element={<DetailMenunggu/>}/>
        <Route path='/guru/pagepengumpulan/detail/detailselesai/:id' element={<DetailSelesai/>}/>
        <Route path='/guru/pagejadwalkbm' element={<Jadwal/>}/>
        {/* end role guru */}

        {/* role wali murid */}
        <Route path='/walimurid/berandawalimurid' element={<BerandaWaliMurid/>}/>
        <Route path='/walimurid/pagetugas' element={<PageTugasWaliMurid/>}/>
        <Route path='/walimurid/pagemapel' element={<PageMapelWaliMurid/>}/>
        <Route path='/walimurid/pagekbm' element={<PageJadwalWaliMurid/>}/>
        <Route path='/walimurid/pagemapel/mapelmateri' element={<MapelMateri/>}/>
        <Route path='/walimurid/pagemapel/mapeltugas' element={<MapelTugas/>}/>
        <Route path='/walimurid/pagemapel/mapelmateri/detailmateri' element={<DetailMaterial/>}/>
        {/* end role wali murid */}

        {/* role bk */}
        <Route path='/bk/berandabk' element={<BerandaBk/>}/>
        <Route path='/bk/janjikonseling' element={<JanjiKonseling/>}/>
        <Route path='/bk/chat' element={<PageChat/>}/>
        {/* end role bk */}

        <Route path="/*" element={<Notfound/>} />
        <Route path="/" element={<Login/>} />  
      </Routes>
    </Router>
  );
}


export default App;

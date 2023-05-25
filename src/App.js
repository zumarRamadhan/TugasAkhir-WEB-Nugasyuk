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
import PagePengumpulan from './guru/PagePengumpulan';
import Jadwal from './guru/JadwalKbm';
// end role guru
// role wali murid
import BerandaWaliMurid from './waliMurid/BerandaWaliMurid';
import PageTugasWaliMurid from './waliMurid/PageTugas';
import PageMapelWaliMurid from './waliMurid/PageMapel';
import PageJadwalWaliMurid from './waliMurid/JadwalKbm';
// end role wali murid
// role bk
import BerandaBk from './guruBk/BerandaBk';
import JanjiKonseling from './guruBk/JanjiKonseling';
import PageChat from './guruBk/PageChat';
// end role bk
import Notfound from './Notfound';
import MapelMateri from './murid/MapelMateri';


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
        {/* end role admin */}
        {/* role murid */}
        <Route path="/murid/berandamurid" element={<BerandaMurid/>} /> 
        <Route path="/murid/pagetugas" element={<PageTugas/>} /> 
        <Route path="/murid/pagekbm" element={<PageJadwal/>} /> 
        <Route path="/murid/pagemapel" element={<PageMapel/>} /> 
        <Route path="/murid/pagekonseling" element={<Konseling/>} /> 
        <Route path="/murid/pagekonseling/buatjanji" element={<PageBuatJanji/>} /> 
        <Route path="/murid/pagemapel/mapelmateri" element={<Materi/>} /> 
        <Route path="/murid/detailmateri" element={<DetailMateri/>} /> 
        <Route path="/murid/detailtugas" element={<DetailTask/>} /> 
        <Route path="/murid/pagekonseling/riwayatkonseling" element={<HistoryCounseling/>} /> 
        {/* end role murid */}
        {/* role guru */}
        <Route path='/guru/berandaguru' element={<BerandaGuru/>}/>
        <Route path='/guru/pagekbm' element={<KBM/>}/>
        <Route path='/guru/pagepengumpulan' element={<PagePengumpulan/>}/>
        <Route path='/guru/pagejadwalkbm' element={<Jadwal/>}/>
        {/* end role guru */}
        {/* role wali murid */}
        <Route path='/walimurid/berandawalimurid' element={<BerandaWaliMurid/>}/>
        <Route path='/walimurid/pagetugas' element={<PageTugasWaliMurid/>}/>
        <Route path='/walimurid/pagemapel' element={<PageMapelWaliMurid/>}/>
        <Route path='/walimurid/pagekbm' element={<PageJadwalWaliMurid/>}/>
        {/* end role wali murid */}
        {/* role bk */}
        <Route path='/bk/berandabk' element={<BerandaBk/>}/>
        <Route path='/bk/janjikonseling' element={<JanjiKonseling/>}/>
        <Route path='/bk/chat' element={<PageChat/>}/>
        {/* end role bk */}

        <Route path="/*" element={<Notfound/>} />  
      </Routes>
    </Router>
  );
}

export default App;

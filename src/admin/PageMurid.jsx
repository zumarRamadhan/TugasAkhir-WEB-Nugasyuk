import '../cssAll/DataMurid.css'
import { Icon } from '@iconify/react';
import { useState } from 'react';
import Sidebar from "../component/Sidebar";
import Navigation from "../component/NavigationBar";
import Kalam from "../assets/murid-kalam.png";
import Wira from "../assets/murid-wira.svg";
import IconNugasyuk from '../assets/IconNugasyuk.svg';
import { useNavigate, Link } from 'react-router-dom';

function DataMurid(){
    const navText = "Data Murid";

    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div>
            {/* <Sidebar/> */}
            <aside>
            <h1 className="title-form-login" onClick={() => navigate('/admin/berandaadmin')} style={{cursor: "pointer"}}>
                <img src={IconNugasyuk} alt="" className="icon-nugasyuk"/>
                nugasyuk
            </h1>
            <ul>
                <li onClick={() => navigate('/admin/berandaadmin')}>
                    <Icon icon="iconoir:home-simple" width="20" />
                    Beranda
                </li>
                <li onClick={() => navigate('/admin/pageguru')} >
                    <Icon icon="la:chalkboard-teacher" width="20" />
                    Guru
                </li>
                <li className='active' onClick={() => navigate('/admin/pagemurid')}>
                    <Icon icon="ph:student" width="20" />
                    Murid
                </li>
                <li onClick={() => navigate('/admin/pagekelas')}>
                    <Icon icon="fluent:class-24-regular" width="20" />
                    Kelas
                </li>
                <li onClick={() => navigate('/admin/matapelajaran')}>
                    <Icon icon="fluent-mdl2:education" width="20" />
                    Mata Pelajaran
                </li>
                <li onClick={() => navigate('/admin/jadwalkbm')}>
                    <Icon icon="uiw:date" width="20" />
                    Jadwal KBM
                </li>
                <li onClick={() => navigate('/admin/pageassets')}>
                    <Icon icon="ic:outline-file-copy" width="20" />
                    Assets
                </li>
            </ul>
            </aside>
            <div className='container-content'>
                <Navigation text={navText}/>
                <main className='main'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolores corrupti suscipit numquam quo enim fugiat culpa ipsa quaerat dignissimos! Aperiam, eum nemo libero provident dolorum veniam natus ducimus, autem odio nihil deleniti accusamus minima nobis molestiae fugiat possimus hic! Tempore ipsum commodi eos ratione exercitationem velit fugit! Aspernatur consequatur praesentium suscipit excepturi quia nisi natus porro asperiores recusandae expedita. Ullam, repudiandae labore. Est consectetur voluptate voluptas consequuntur doloremque maxime sed repellendus cum possimus autem eaque enim placeat nemo soluta aspernatur odit incidunt, veritatis culpa tempore. Debitis illo harum nihil magni, expedita quod. Vitae nihil ea fugit reiciendis, eveniet eum deleniti aliquid, veritatis in consequuntur nisi commodi minima esse ducimus sed quidem recusandae! Placeat facere repellendus quasi error, animi deleniti atque, laborum aspernatur ab, consectetur alias voluptatibus asperiores. Et sequi eos minus nemo molestias natus id, aperiam hic nihil at beatae, assumenda deleniti quia a vero neque veniam officiis ad. Delectus fugit blanditiis odit numquam. Rerum asperiores ad consequatur vel fuga alias natus, optio quod quam at distinctio quidem dolorem esse voluptas provident praesentium minus veniam unde molestiae aperiam aspernatur repellendus harum rem voluptatibus? Impedit quaerat eum voluptas atque quia sed alias error magnam, distinctio dicta exercitationem ipsam enim, pariatur molestiae illum ad. Corporis sapiente eius, dolore commodi quisquam deleniti expedita delectus corrupti enim facilis? Officia consequatur doloribus corporis ducimus, hic illo unde corrupti porro incidunt natus saepe et est vitae praesentium quos nulla, animi doloremque eligendi? Ea quam nemo tempore vitae? Quidem nostrum nulla dolores! Eveniet suscipit, aperiam eum iste assumenda corporis ipsa atque, nam modi ipsum laboriosam veritatis consequatur aliquam laborum veniam nisi nulla enim ad neque doloremque rem animi sint. Delectus autem sed quidem nihil nesciunt cum eveniet officiis fuga possimus inventore! Dolore praesentium quos, dolores illo ullam assumenda asperiores animi harum ex quaerat, eaque ab nam! Ex nemo, perferendis accusantium, culpa rem consequuntur amet id minus cupiditate esse velit corrupti reprehenderit itaque, nesciunt tempora! Culpa nobis deleniti amet ut vero dolor quidem doloremque incidunt? Sed distinctio natus iste necessitatibus vel enim quod reiciendis quisquam ipsam nihil exercitationem culpa, voluptatum eaque. A dolor accusantium neque culpa dolore et, doloremque sapiente. Quidem, laborum commodi! Neque, perferendis dolor? Odio officiis nemo hic veniam unde totam quasi sed quo non similique, vero ipsam dolorem repudiandae, quisquam saepe iste error! Delectus quia a dolor cum dolore, illum sit consequatur rerum, excepturi impedit, soluta optio doloremque sint! Iste excepturi deserunt est hic quae ratione culpa enim dolore quas! Beatae, doloremque nostrum dolorum perferendis quis officia provident commodi! Vitae ipsam soluta totam enim esse magnam, similique repudiandae, neque assumenda accusantium quisquam molestias veritatis velit! Blanditiis laboriosam numquam aliquid! Dicta ab nihil cum veniam obcaecati tenetur assumenda exercitationem ad quae, corporis doloribus officia, ex temporibus dolorum odit sapiente quam fugit nostrum mollitia illum expedita nulla deserunt sit. Explicabo ratione recusandae suscipit cum voluptates voluptate quos quia ipsum laboriosam, accusantium voluptas quibusdam veniam dolorem possimus aliquid vel quas exercitationem maxime, labore ad. Laborum totam ad, quis dolore numquam doloremque quo aperiam labore odit placeat perferendis, quae illum adipisci temporibus nostrum. Harum, quisquam aspernatur! Eveniet perferendis, ab quaerat dolore, aliquid repudiandae blanditiis id fuga maiores assumenda, impedit sit quam cumque atque rem similique illo! Error veritatis, laudantium, ducimus rem aperiam maiores mollitia est eligendi obcaecati fuga odit autem voluptatum. Omnis quia, veritatis illum pariatur doloribus minima, corporis, voluptatem laborum neque explicabo repudiandae animi! Dolor officia unde impedit, quas dicta dignissimos quos, quis distinctio ipsum reprehenderit aliquam esse? Cum excepturi rerum corporis nesciunt ab animi molestias iure, delectus atque mollitia quos facilis culpa! Quibusdam, temporibus rem. Porro minus, molestias corporis perspiciatis a iusto fugit, aperiam quo exercitationem minima error, neque nemo? Voluptatibus enim eligendi eveniet provident, nesciunt itaque doloremque debitis incidunt beatae obcaecati quia culpa recusandae explicabo quaerat aut nam adipisci quae impedit eaque aspernatur, assumenda, eos cupiditate! Mollitia commodi beatae quo vitae nobis unde? Dolorum explicabo libero earum rem, nisi velit officia. Aspernatur aliquam sed, quam nemo ab repellat quis repellendus nihil officiis necessitatibus vitae blanditiis est, incidunt magni saepe laborum. Nemo quae veritatis praesentium voluptatem est deleniti incidunt eos libero excepturi, voluptates accusantium ullam adipisci asperiores labore a nam. Vel eum architecto cupiditate ea. Numquam perferendis eos nam, alias repellat possimus eius necessitatibus et dicta, libero quis provident, id dolor ab culpa odio magni cum rerum qui recusandae temporibus nesciunt? Sed natus repellat, suscipit ab ipsam recusandae quibusdam, iusto ad porro libero iste laudantium tempora unde! Reprehenderit, neque! Voluptas eligendi eius excepturi, optio obcaecati praesentium odio quidem debitis ducimus aliquid at sint, expedita placeat dolorum laboriosam enim modi quod soluta. Ea voluptas cupiditate deleniti, dignissimos commodi eaque tempora tempore nemo voluptate! Error, facere. Eius assumenda nihil nesciunt aspernatur, quisquam magni tempore officiis suscipit tempora! Mollitia, autem repellendus. Ab accusamus natus iusto odit modi nesciunt reprehenderit unde error tenetur? Totam nihil in officiis animi illum doloribus fuga vero libero eligendi dolorem dolore inventore quod, delectus excepturi. Sit repellendus nobis voluptate provident a vel tempora explicabo dolorem cumque facere exercitationem, nisi minus quis debitis repudiandae, cum tempore autem nemo et sequi inventore voluptatibus. Minima quibusdam ducimus totam in hic! Distinctio debitis quisquam soluta facilis quam necessitatibus itaque doloremque rerum nemo dolores deleniti quos explicabo amet magni aut, molestias omnis, dolore nam ullam minima rem maiores corrupti. Eos quas harum, consectetur perferendis hic libero minus aliquid temporibus eveniet. Nihil laudantium earum ipsam odio vel perferendis aliquam saepe. Assumenda qui reprehenderit aperiam neque nam doloribus enim saepe, nulla laboriosam perferendis distinctio maxime beatae voluptatum voluptate iste officiis blanditiis ex. Vitae magnam quo modi, tempora eveniet sint ullam ipsam repellat officia quam ea labore doloribus delectus error impedit reprehenderit distinctio. Pariatur optio illo praesentium est, et illum accusamus error autem molestiae? Cumque voluptas aspernatur placeat tempore sed fugiat soluta. Sed aspernatur recusandae ipsum optio perferendis. Deleniti repudiandae vel quas quis recusandae obcaecati ut porro aliquid. Ad cum, quisquam nihil eveniet delectus, voluptas, laudantium fuga consectetur nulla inventore libero minus animi doloremque nemo ab praesentium voluptatibus possimus enim suscipit! Porro inventore rerum ad corrupti magnam sit eum beatae quibusdam libero aliquam!
                    <div className='header-murid'>
                        <div className='header-murid-left'>
                            <button className='btn-add-murid'>
                                <Icon icon="ic:round-plus" width="20"></Icon>
                                <p>Tambah Data</p>
                            </button>

                            <select id='murid' name='murid'>
                                <option value="semua" selected>-- Semua Jurusan --</option>
                                <option value="jurusan">DKV</option>
                                <option value="jurusan">Animasi</option>
                                <option value="jurusan">PPLG</option>
                                <option value="jurusan">DG</option>
                                <option value="jurusan">Teknik Grafika</option>
                            </select>

                            <form className='search-box'>
                                <input type='text' placeholder='Cari...'/>
                                <button type='submit'>
                                    <Icon icon="material-symbols:search-rounded" width="20"></Icon>
                                </button>
                            </form>
                        </div>
                        <div className='header-murid-right'>
                            <p className='detail-jumlah-murid'><span>1000</span> Murid</p>
                        </div>
                    </div>

                    <div className='container-murid'>
                        <div className='card-content-murid'>
                            <div className='card-content-murid-left'>
                                <div className='img-profile-murid'>
                                    <img src={Wira} alt='' className='image-profile-murid'/>
                                </div>
                                <div className='detail-card-murid'>
                                    <p className='nama-murid'>Ahmad Aziz Wira Widodo</p>
                                    <p className='email-murid'>ahmadaziz@smkrus.sch.id</p>
                                    <div className='jurusan-murid'>PPLG</div>
                                </div>
                            </div>
                            <div className='btn-action'>
                                <div className='card-content-guru-right'>
                                    <button id='popup-button' type='submit' onClick={handleShow}><Icon icon="mi:options-vertical" width="40" color="#2A93D5"/></button>
                                </div>
                                <div id='popup-menu' className='popup-menu' show={show} onHide={handleClose}>
                                    <ul>
                                        <li><a href="#" id="detail-murid">Detail</a></li>
                                        <li><a href="#" id="edit-murid">Edit</a></li>
                                        <li><a href="#" id="hapus-murid">Hapus</a></li>
                                        <li><a href="#" id="tambah-murid">Tambah Code</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='container-murid'>
                        <div className='card-content-murid'>
                            <div className='card-content-murid-left'>
                                <div className='img-profile-murid'>
                                    <img src={Kalam} alt='' className='image-profile-murid'/>
                                </div>
                                <div className='detail-card-murid'>
                                    <p className='nama-murid'>Khoiru Rizal Kalam ISmail</p>
                                    <p className='email-murid'>khoirurizal@smkrus.sch.id</p>
                                    <div className='jurusan-murid'>PPLG</div>
                                </div>
                            </div>
                            <div className='tests'>
                                <div className='card-content-murid-right'>
                                    <button id='popup-button' type='submit'><Icon icon="mi:options-vertical" width="35" color="#2A93D5"/></button>
                                </div>
                                <div id='popup-menu' className='popup-menu'>
                                    <ul>
                                        <li><a href="#" id="detail-murid">Detail</a></li>
                                        <li><a href="#" id="edit-murid">Edit</a></li>
                                        <li><a href="#" id="hapus-murid">Hapus</a></li>
                                        <li><a href="#" id="tambah-murid">Tambah Code</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default DataMurid;
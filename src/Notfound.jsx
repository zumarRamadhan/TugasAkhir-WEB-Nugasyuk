import './App.css'

function Notfound() {
    return(
        <div className='notfound'>
            <h1 classname="text-notfound">NOTFOUND BROOO!!!</h1>
            <br/>
            <marquee direction="down"  width="300" scrolldelay="250">Halaman Tidak Ada</marquee>
            <div className='footer'>
                <p>@copyright2023 | Mata Panda Group 🐼</p>
            </div>
        </div>
    );
}

export default Notfound;
import Link from 'next/link'
const Navbar=()=>(
   

    <div className="menu">
        <div className="navi"><Link href={'/.'}><a className="nav">Главная</a></Link>
            <div className="navi"><Link href={'/about'}><a className="nav">Услуги</a></Link>
                <div className="navi"><Link href={'/contacts'}><a className="nav"> Контакты</a></Link>
                </div>
            </div>
        </div>
    </div>


 
);
export default Navbar;



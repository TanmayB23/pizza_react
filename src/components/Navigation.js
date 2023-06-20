import {Link} from 'react-router-dom';

const Navigation = () =>{
    const cartstyle = {
        background: '#F59E0D',
        display: 'flex',
        padding: '6px 12px',
        borderRadius: '50px'
    }
    return(
        <>
        <nav className="containe mx-auto flex items-center justify-between py-4">
                <Link to="/">
                    <img className="px-10" style={{height:45}} src="/images/logo.png" alt="logo" />
                </Link>
                <ul className="flex items-center px-10">
                    <li className="ml-6"><Link to="/">Home</Link></li>
                    <li className="ml-6"><Link to="/products">Products</Link></li>
                    <li className="ml-6">
                        <Link to="/cart">
                        <div style = {cartstyle}>
                            <span>10</span>
                            <img className="ml-2" src="/images/cart.png" alt="cart-icon" />
                        </div>
                        </Link>
                    </li>
                </ul>
        </nav>
        </>
    )
}

export default Navigation;



import './Footer.css'

function Footer({email, address, phone}) {
    return (
        <footer className='Pesao'>
            <p>{email}</p>
            <p>{address}</p>
            <p>{phone}</p>
        </footer>
    )
}

export default Footer
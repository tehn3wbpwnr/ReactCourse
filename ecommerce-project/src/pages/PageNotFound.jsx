import { Header } from '../components/Header'
import { Link } from 'react-router'

export function PageNotFound({cart}) {
    return (
        <>
            <Header cart={cart}/>

            <main style={{ textAlign: 'center', marginTop: '4rem' }}>
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>The page you're looking for doesn't exist or has been moved.</p>

                <Link to="/" style={{ marginTop: '1rem', display: 'inline-block' }}>
                    Go back home
                </Link>
            </main>
        </>
    );
}
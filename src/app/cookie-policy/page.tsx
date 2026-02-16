import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cookie Policy | Al Riaz Home Maintenance Services Riyadh",
    alternates: {
        canonical: '/cookie-policy'
    },
    description: "Learn how Al Riaz Home Maintenance Services uses cookies to improve your user experience and analyze our website traffic in Riyadh.",
};

export default function CookiePolicyPage() {
    return (
        <main style={{ paddingTop: '120px', paddingBottom: '80px' }}>
            <div className="container">


                {/* Breadcrumbs */}
                <nav style={{ marginBottom: '30px', fontSize: '0.9rem', color: 'var(--muted)' }}>
                    <Link href="/">Home</Link> / <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Cookie policy</span>
                </nav>

                <section style={{ marginBottom: '30px' }}>
                    <p style={{ color: 'var(--muted)', marginBottom: '20px' }}>Last Updated: February 12, 2026</p>
                    <p>This Cookie Policy explains how **Al Riaz Home Maintenance Services** uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them.</p>
                </section>

                <section style={{ marginBottom: '30px' }}>
                    <h2 style={{ marginBottom: '15px' }}>What are Cookies?</h2>
                    <p>Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>
                </section>

                <section style={{ marginBottom: '30px' }}>
                    <h2 style={{ marginBottom: '15px' }}>How We Use Cookies</h2>
                    <p>We use cookies for the following purposes:</p>
                    <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                        <li>**Essential Cookies**: Necessary for the website to function properly.</li>
                        <li>**Analytics Cookies**: To understand how visitors interact with our site (e.g., Google Analytics).</li>
                        <li>**Functional Cookies**: To remember your preferences (e.g., language or region).</li>
                        <li>**WhatsApp Integration**: Some cookies may be set by third-party services like WhatsApp to facilitate communication.</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '30px' }}>
                    <h2 style={{ marginBottom: '15px' }}>Managing Cookies</h2>
                    <p>Most web browsers allow you to control cookies through their settings. You can choose to block or delete cookies, but this may affect your ability to use certain features of our website, such as direct WhatsApp booking.</p>
                </section>

                <section style={{ marginBottom: '30px' }}>
                    <h2 style={{ marginBottom: '15px' }}>Third-Party Cookies</h2>
                    <p>In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website and deliver advertisements on and through the website.</p>
                </section>

                <div style={{ marginTop: '50px' }}>
                    <Link href="/" className="btn btn-primary">Back to Home</Link>
                </div>
            </div>
        </main>
    );
}

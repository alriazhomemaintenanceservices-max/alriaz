import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cookie Policy | Saudi Home Experts",
    description: "Understand how Saudi Home Experts uses cookies and similar technologies to improve your user experience on our website.",
    alternates: {
        canonical: '/cookie-policy'
    }
};

export default function CookiePolicyPage() {
    return (
        <main style={{ paddingTop: '120px', paddingBottom: '100px', lineHeight: '1.8', color: '#334155' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                
                {/* Breadcrumbs */}
                <nav style={{ marginBottom: '40px', fontSize: '0.9rem', color: '#94a3b8' }}>
                    <Link href="/">Home</Link> / <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Cookie Policy</span>
                </nav>

                <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#0f172a', marginBottom: '20px', letterSpacing: '-1px' }}>Cookie Policy</h1>
                <p style={{ color: '#64748b', marginBottom: '40px' }}>Last Updated: March 14, 2026</p>

                <section style={{ marginBottom: '40px' }}>
                    <p>This Cookie Policy explains what cookies are and how we use them. You should read this policy so you can understand what type of cookies we use, the information we collect using cookies, and how that information is used.</p>
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '15px' }}>1. What are Cookies?</h2>
                    <p>Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.</p>
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '15px' }}>2. How We Use Cookies</h2>
                    <p><strong>Saudi Home Experts</strong> uses cookies for the following purposes:</p>
                    <ul style={{ paddingLeft: '20px', marginTop: '15px', display: 'grid', gap: '10px' }}>
                        <li><strong>Necessary Cookies:</strong> These cookies are essential to provide you with services available through our website and to use some of its features.</li>
                        <li><strong>Performance & Analytics Cookies:</strong> These cookies collect information about how visitors use the website, for instance, which pages visitors go to most often. This helps us improve how our website works.</li>
                        <li><strong>Functionality Cookies:</strong> These cookies allow the website to remember choices you make (such as your username, language or the region you are in) and provide enhanced, more personal features.</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '15px' }}>3. Third-Party Cookies</h2>
                    <p>In addition to our own cookies, we may also use various third-parties cookies to report usage statistics of the website, deliver advertisements on and through the website, and so on. For example, Google Analytics may use cookies to help us track site behavior.</p>
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '15px' }}>4. Managing Your Cookies</h2>
                    <p>Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>www.allaboutcookies.org</a>.</p>
                    <p>Please note that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.</p>
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '15px' }}>5. Contact Us</h2>
                    <p>If you have any questions about our use of cookies, please email us at <strong>support@saudihomeexperts.com</strong>.</p>
                </section>

                <div style={{ marginTop: '60px' }}>
                    <Link href="/" className="btn btn-primary" style={{ padding: '15px 30px' }}>Return to Homepage</Link>
                </div>
            </div>
        </main>
    );
}

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Disclaimer | Saudi Home Experts",
    description: "Legal disclaimer for Saudi Home Experts. Understand the limitations of our content and liability regarding home maintenance services.",
    alternates: {
        canonical: '/disclaimer'
    }
};

export default function DisclaimerPage() {
    return (
        <main style={{ paddingTop: '120px', paddingBottom: '100px', lineHeight: '1.8', color: '#334155' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                
                {/* Breadcrumbs */}
                <nav style={{ marginBottom: '40px', fontSize: '0.9rem', color: '#94a3b8' }}>
                    <Link href="/">Home</Link> / <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Disclaimer</span>
                </nav>

                <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#0f172a', marginBottom: '20px', letterSpacing: '-1px' }}>Disclaimer</h1>
                <p style={{ color: '#64748b', marginBottom: '40px' }}>Last Updated: March 14, 2026</p>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '15px' }}>1. General Information</h2>
                    <p>The information provided by <strong>Saudi Home Experts</strong> on <Link href="/" style={{ color: 'var(--primary)' }}>saudihomeexperts.com</Link> is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.</p>
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '15px' }}>2. Professional Disclaimer</h2>
                    <p>The site cannot and does not contain home maintenance or technical advice. The technical information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of DIY technical advice.</p>
                    <p><strong>The use or reliance of any information contained on this site is solely at your own risk.</strong></p>
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '15px' }}>3. Service Performance</h2>
                    <p>While Saudi Home Experts strives to connect you with the most qualified technicians for <strong>Plumber, Electrician, and Intercom</strong> services, the outcome of any technical work depends on many factors including existing property conditions, climate, and hardware quality. Saudi Home Experts is not responsible for any damage caused to third-party equipment or property due to pre-existing faults.</p>
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '15px' }}>4. External Links Disclaimer</h2>
                    <p>The site may contain (or you may be sent through the site) links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us.</p>
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '15px' }}>5. "No Warranty" Clause</h2>
                    <p>We do not warrant that the website will operate error-free or that its servers are free of computer viruses or other harmful mechanisms. If your use of the website results in the need for servicing or replacing equipment or data, we are not responsible for those costs.</p>
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '15px' }}>6. Contact Us</h2>
                    <p>Should you have any feedback, comments, requests for technical support or other inquiries, please contact us by email: <strong>support@saudihomeexperts.com</strong>.</p>
                </section>

                <div style={{ marginTop: '60px' }}>
                    <Link href="/" className="btn btn-primary" style={{ padding: '15px 30px' }}>Return to Homepage</Link>
                </div>
            </div>
        </main>
    );
}

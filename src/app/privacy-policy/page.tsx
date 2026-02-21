import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Saudi Home Experts Riyadh",
    alternates: {
        canonical: '/privacy-policy/'
    },
    description: "Read the privacy policy of Saudi Home Experts. We value your privacy and protect your data while providing home maintenance in Riyadh.",
};

export default function PrivacyPolicyPage() {
    return (
        <main style={{ paddingTop: '120px', paddingBottom: '80px' }}>
            <div className="container">


                {/* Breadcrumbs */}
                <nav style={{ marginBottom: '30px', fontSize: '0.9rem', color: 'var(--muted)' }}>
                    <Link href="/">Home</Link> / <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Privacy policy</span>
                </nav>

                <section style={{ marginBottom: '30px' }}>
                    <p style={{ color: 'var(--muted)', marginBottom: '20px' }}>Last Updated: February 12, 2026</p>
                    <p>Welcome to **Saudi Home Experts**. We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we handle your information when you visit our website or use our services in Riyadh.</p>
                </section>

                <section style={{ marginBottom: '30px' }}>
                    <h2 style={{ marginBottom: '15px' }}>1. Information We Collect</h2>
                    <p>We collect information that you provide directly to us, including:</p>
                    <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                        <li>Name and contact information (Phone number, Email)</li>
                        <li>Physical address for service delivery in Riyadh</li>
                        <li>Service history and job details</li>
                        <li>Information sent via WhatsApp or our contact forms</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '30px' }}>
                    <h2 style={{ marginBottom: '15px' }}>2. How We Use Your Information</h2>
                    <p>We use the collected data to:</p>
                    <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                        <li>Schedule and perform home maintenance services (Electrician, Plumber, Intercom)</li>
                        <li>Send service confirmations and invoices</li>
                        <li>Respond to your queries via WhatsApp or phone</li>
                        <li>Improve our website and customer service</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '30px' }}>
                    <h2 style={{ marginBottom: '15px' }}>3. Data Protection</h2>
                    <p>We implement industry-standard security measures to protect your personal information. We do not sell or rent your personal data to third parties. Your information is only shared with our technical staff to fulfill your service requests.</p>
                </section>

                <section style={{ marginBottom: '30px' }}>
                    <h2 style={{ marginBottom: '15px' }}>4. WhatsApp Communication</h2>
                    <p>By using our WhatsApp CTAs, you agree to receive communications from us regarding your service requests. You can opt-out at any time by messaging us.</p>
                </section>

                <section style={{ marginBottom: '30px' }}>
                    <h2 style={{ marginBottom: '15px' }}>5. Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                    <p style={{ marginTop: '10px' }}>**Saudi Home Experts**</p>
                    <p>Riyadh, Saudi Arabia</p>
                    <p>WhatsApp: +966 50 890 1536</p>
                </section>

                <div style={{ marginTop: '50px' }}>
                    <Link href="/" className="btn btn-primary">Back to Home</Link>
                </div>
            </div>
        </main>
    );
}

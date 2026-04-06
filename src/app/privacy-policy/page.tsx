import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Saudi Home Experts",
    description: "Read the Privacy Policy of Saudi Home Experts. Learn how we collect, use, and protect your data while providing premium home services in Saudi Arabia.",
    alternates: {
        canonical: '/privacy-policy'
    }
};

export default function PrivacyPolicyPage() {
    return (
        <main style={{ paddingTop: '120px', paddingBottom: '100px', lineHeight: '1.8', color: '#334155' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                
                {/* Breadcrumbs */}
                <nav style={{ marginBottom: '40px', fontSize: '0.9rem', color: '#94a3b8' }}>
                    <Link href="/">Home</Link> / <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Privacy Policy</span>
                </nav>

                <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#0f172a', marginBottom: '20px', letterSpacing: '-1px' }}>Privacy Policy</h1>
                <p style={{ color: '#64748b', marginBottom: '40px' }}>Last Updated: March 14, 2026</p>

                <section style={{ marginBottom: '40px' }}>
                    <p>At <strong>Saudi Home Experts</strong>, accessible from <Link href="/" style={{ color: 'var(--primary)' }}>saudihomeexperts.com</Link>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Saudi Home Experts and how we use it.</p>
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '15px' }}>1. Information We Collect</h2>
                    <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
                    <ul style={{ paddingLeft: '20px', marginTop: '15px', display: 'grid', gap: '10px' }}>
                        <li><strong>Contact Data:</strong> Name, email address, phone number (WhatsApp), and physical address for service delivery.</li>
                        <li><strong>Service Data:</strong> Details about the services you request (Plumber, Electrician, or Intercom Installation).</li>
                        <li><strong>Communication Data:</strong> Records of your interactions with us through WhatsApp, phone calls, or contact forms.</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '15px' }}>2. How We Use Your Information</h2>
                    <p>We use the information we collect in various ways, including to:</p>
                    <ul style={{ paddingLeft: '20px', marginTop: '15px', display: 'grid', gap: '10px' }}>
                        <li>Provide, operate, and maintain our home services network.</li>
                        <li>Improve, personalize, and expand our website.</li>
                        <li>Understand and analyze how you use our website.</li>
                        <li>Communicate with you, either directly or through one of our partners, including for customer service.</li>
                        <li>Send you text messages or WhatsApp notifications regarding your service appointments.</li>
                        <li>Find and prevent fraud.</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '15px' }}>3. Data Protection and Security</h2>
                    <p>We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</p>
                    <p>We do not share your personal information with third parties except as necessary to provide our services or comply with Saudi Arabian laws.</p>
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '15px' }}>4. Log Files</h2>
                    <p>Saudi Home Experts follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.</p>
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '15px' }}>5. WhatsApp & Communication</h2>
                    <p>By clicking our WhatsApp links or submitting your phone number, you consent to receive technical and service-related communications from us. These communications are essential for coordinating on-site visits for Plumber, Electrician, or Intercom technicians.</p>
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '15px' }}>6. Contact Us</h2>
                    <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>
                    <div style={{ marginTop: '20px', padding: '20px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                        <p><strong>Email:</strong> support@saudihomeexperts.com</p>
                        <p><strong>Phone:</strong> +966 50 890 1536</p>
                        <p><strong>Address:</strong> Riyadh, Saudi Arabia</p>
                    </div>
                </section>

                <div style={{ marginTop: '60px' }}>
                    <Link href="/" className="btn btn-primary" style={{ padding: '15px 30px' }}>Return to Homepage</Link>
                </div>
            </div>
        </main>
    );
}

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | Saudi Home Experts",
    description: "Read our Terms of Service to understand the rules and guidelines for using the Saudi Home Experts platform and our maintenance services.",
    alternates: {
        canonical: '/terms-of-service'
    }
};

export default function TermsOfServicePage() {
    return (
        <main style={{ paddingTop: '120px', paddingBottom: '100px', lineHeight: '1.8', color: '#334155' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                
                {/* Breadcrumbs */}
                <nav style={{ marginBottom: '40px', fontSize: '0.9rem', color: '#94a3b8' }}>
                    <Link href="/">Home</Link> / <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Terms of Service</span>
                </nav>

                <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#0f172a', marginBottom: '20px', letterSpacing: '-1px' }}>Terms of Service</h1>
                <p style={{ color: '#64748b', marginBottom: '40px' }}>Last Updated: March 14, 2026</p>

                <section style={{ marginBottom: '40px' }}>
                    <p>Welcome to <strong>Saudi Home Experts</strong>. By accessing our website and using our services, you agree to comply with and be bound by the following terms and conditions of use, which govern Saudi Home Experts' relationship with you.</p>
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '15px' }}>1. Services Provided</h2>
                    <p>Saudi Home Experts provides a platform to connect users with skilled technicians for <strong>Plumber, Electrician, and Intercom Installation</strong> services. We act as a facilitator and service provider across the Kingdom of Saudi Arabia.</p>
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '15px' }}>2. Booking and Quotes</h2>
                    <p>All service bookings are subject to availability. Quotes provided via WhatsApp or phone are estimations based on the information provided by the user. Final pricing may be adjusted on-site after a physical inspection by our technician.</p>
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '15px' }}>3. User Responsibilities</h2>
                    <p>Users must provide accurate information regarding their location and the nature of the maintenance issue. Access to the property must be provided at the scheduled time. Users are responsible for ensuring that all necessary permissions (municipality, compound management, etc.) are obtained before work begins.</p>
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '15px' }}>4. Payments and Refunds</h2>
                    <p>Payments are due upon completion of the service. We accept various payment methods as communicated by our technicians. Refunds, if applicable, are governed by our internal quality control policies and will be assessed on a case-by-by basis.</p>
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '15px' }}>5. Limitation of Liability</h2>
                    <p>Saudi Home Experts shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. While we strive for excellence, we cannot guarantee that all services will meet every user's subjective expectation of "perfection."</p>
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '15px' }}>6. Governing Law</h2>
                    <p>These terms and conditions are governed by and construed in accordance with the laws of the <strong>Kingdom of Saudi Arabia</strong>. Any disputes relating to these terms will be subject to the exclusive jurisdiction of the courts of Saudi Arabia.</p>
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '15px' }}>7. Changes to Terms</h2>
                    <p>We reserve the right to change these terms at any time. Your continued use of the site after any changes indicates your acceptance of the new terms.</p>
                </section>

                <div style={{ marginTop: '60px' }}>
                    <Link href="/" className="btn btn-primary" style={{ padding: '15px 30px' }}>Return to Homepage</Link>
                </div>
            </div>
        </main>
    );
}

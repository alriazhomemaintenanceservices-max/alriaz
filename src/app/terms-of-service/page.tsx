import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | Saudi Home Experts Riyadh",
    alternates: {
        canonical: '/terms-of-service/'
    },
    description: "Terms and conditions for Saudi Home Experts. Learn about our service warranties, payment policies, and booking terms in Riyadh.",
};

export default function TermsOfServicePage() {
    return (
        <main style={{ paddingTop: '120px', paddingBottom: '80px' }}>
            <div className="container">


                {/* Breadcrumbs */}
                <nav style={{ marginBottom: '30px', fontSize: '0.9rem', color: 'var(--muted)' }}>
                    <Link href="/">Home</Link> / <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Terms of service</span>
                </nav>

                <section style={{ marginBottom: '30px' }}>
                    <p style={{ color: 'var(--muted)', marginBottom: '20px' }}>Effective Date: February 12, 2026</p>
                    <p>By accessing this website and booking services with **Saudi Home Experts**, you agree to the following terms and conditions. Please read them carefully.</p>
                </section>

                <section style={{ marginBottom: '30px' }}>
                    <h2 style={{ marginBottom: '15px' }}>1. Scope of Service</h2>
                    <p>Saudi Home Experts provides residential and commercial maintenance services in Riyadh, including electrical, plumbing, and intercom installations/repairs. All services are subject to technician availability and site assessment.</p>
                </section>

                <section style={{ marginBottom: '30px' }}>
                    <h2 style={{ marginBottom: '15px' }}>2. Booking and Estimates</h2>
                    <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                        <li>Estimates provided over WhatsApp are preliminary based on your description.</li>
                        <li>A fixed inspection fee applies if no work is performed after arrival.</li>
                        <li>Final quotes will be provided on-site after physical inspection.</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '30px' }}>
                    <h2 style={{ marginBottom: '15px' }}>3. Warranty Policy</h2>
                    <p>We provide a **30-day workmanship guarantee** on all labor. This warranty covers the specific repair performed and does not include new faults or issues arising from external factors (e.g., power surges, municipal water issues).</p>
                </section>

                <section style={{ marginBottom: '30px' }}>
                    <h2 style={{ marginBottom: '15px' }}>4. Payment Terms</h2>
                    <p>Payment is due immediately upon completion of the service. We accept Cash, Bank Transfer, and digital payments as confirmed by the technician.</p>
                </section>

                <section style={{ marginBottom: '30px' }}>
                    <h2 style={{ marginBottom: '15px' }}>5. Customer Responsibility</h2>
                    <p>Customers must provide safe access to the property and ensure a responsible adult (18+) is present during the service. Saudi Home Experts is not responsible for moving or protecting personal property during maintenance.</p>
                </section>

                <section style={{ marginBottom: '30px' }}>
                    <h2 style={{ marginBottom: '15px' }}>6. Cancellation</h2>
                    <p>Please provide at least 2 hours' notice for cancellations. Frequent last-minute cancellations may result in a booking block.</p>
                </section>

                <div style={{ marginTop: '50px' }}>
                    <Link href="/" className="btn btn-primary">Back to Home</Link>
                </div>
            </div>
        </main>
    );
}

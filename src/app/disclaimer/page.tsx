import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Disclaimer | Saudi Home Experts Riyadh",
    alternates: {
        canonical: '/disclaimer/'
    },
    description: "Legal disclaimer for Saudi Home Experts. Information regarding service accuracy, external links, and professional advice in Riyadh.",
};

export default function DisclaimerPage() {
    return (
        <main style={{ paddingTop: '120px', paddingBottom: '80px' }}>
            <div className="container">


                {/* Breadcrumbs */}
                <nav style={{ marginBottom: '30px', fontSize: '0.9rem', color: 'var(--muted)' }}>
                    <Link href="/">Home</Link> / <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Disclaimer</span>
                </nav>

                <section style={{ marginBottom: '30px' }}>
                    <p style={{ color: 'var(--muted)', marginBottom: '20px' }}>Effective Date: February 12, 2026</p>
                    <p>The information provided by **Saudi Home Experts** on our website and via our communication channels is for general informational purposes only. All information is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.</p>
                </section>

                <section style={{ marginBottom: '30px' }}>
                    <h2 style={{ marginBottom: '15px' }}>1. Professional Advice Disclaimer</h2>
                    <p>The site cannot and does not contain professional electrical or plumbing advice. The technical information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with our licensed professionals. **DIY maintenance can be dangerous; always hire a professional.**</p>
                </section>

                <section style={{ marginBottom: '30px' }}>
                    <h2 style={{ marginBottom: '15px' }}>2. External Links Disclaimer</h2>
                    <p>Our website may contain links to external websites that are not provided or maintained by or in any way affiliated with Saudi Home Experts. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.</p>
                </section>

                <section style={{ marginBottom: '30px' }}>
                    <h2 style={{ marginBottom: '15px' }}>3. Pricing and Estimates</h2>
                    <p>Any prices mentioned on this website are "starting from" estimates and intended for illustration only. Actual costs depend on parts, complexity, and specific job requirements in Riyadh. A formal quote will only be provided after a physical inspection by our technician.</p>
                </section>

                <section style={{ marginBottom: '30px' }}>
                    <h2 style={{ marginBottom: '15px' }}>4. Limitation of Liability</h2>
                    <p>Under no circumstance shall Saudi Home Experts have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.</p>
                </section>

                <div style={{ marginTop: '50px' }}>
                    <Link href="/" className="btn btn-primary">Back to Home</Link>
                </div>
            </div>
        </main>
    );
}

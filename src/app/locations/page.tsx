import Link from "next/link";
import { MapPin, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Service Areas | Al Riaz Home Maintenance Riyadh",
    description: "We provide expert electrician, plumbing, and intercom services across all major districts of Riyadh including Qurtubah, Ishbiliyah, and Olaya.",
};

export default function LocationsIndexPage() {
    const locations = [
        'Qurtubah', 'Ishbiliyah', 'Al Yarmouk', 'Al Narjis', 'Al Yasmin',
        'Al Sahafah', 'Al Falah', 'Granada', 'Al Rabee', 'Al Nada',
        'Hittin', 'Al Malqa'
    ];

    return (
        <main style={{ paddingTop: '120px', paddingBottom: '80px', background: '#f8fafc' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: '#1e293b' }}>Areas We Serve</h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', color: '#64748b' }}>
                        Our mobile workshops are stationed across Riyadh to ensure rapid response times for electrical and plumbing emergencies. Select your district below.
                    </p>
                </div>

                <div className="grid grid-3" style={{ gap: '30px' }}>
                    {locations.map((area, i) => (
                        <Link key={i} href={`/locations/${area.toLowerCase().replace(' ', '-')}`} className="card hover-lift" style={{
                            padding: '30px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            textDecoration: 'none',
                            color: '#334155'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <div style={{ background: 'rgba(225, 29, 72, 0.1)', padding: '10px', borderRadius: '50%' }}>
                                    <MapPin size={24} color="var(--primary)" />
                                </div>
                                <span style={{ fontSize: '1.2rem', fontWeight: 700 }}>{area}</span>
                            </div>
                            <ArrowRight size={20} color="#cbd5e1" />
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}

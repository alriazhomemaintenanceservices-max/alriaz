import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

const slug = (s) =>
  s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

// Categories tailored to Saudi Home Experts' real services (electrician,
// plumber, intercom) — no dedicated AC category, per project constraints.
const CATEGORIES = [
  { name: 'Electrical Services', description: 'Electrician tips, repairs and safety for Riyadh homes.' },
  { name: 'Plumbing Services', description: 'Leak repair, drainage, heaters and water systems.' },
  { name: 'Intercom & Security', description: 'Intercoms, cameras, doorbells and access control.' },
  { name: 'Home Maintenance', description: 'General upkeep and seasonal home-care guides.' },
  { name: 'Tips & Guides', description: 'How-tos and buyer guides for homeowners.' },
];

const TAGS = ['Riyadh', 'Saudi Arabia', 'Home Repair', 'Electrician', 'Plumber', 'Intercom', 'Maintenance'];

async function main() {
  const email = process.env.ADMIN_EMAIL || 'admin@saudihomeexperts.com';
  const password = process.env.ADMIN_PASSWORD || 'ChangeMe!2026';
  const hash = await bcrypt.hash(password, 12);

  const admin = await prisma.blogger.upsert({
    where: { email },
    update: {},
    create: { name: 'Site Admin', email, password: hash, role: 'ADMIN', status: 'ACTIVE' },
  });
  console.log(`✔ Admin blogger: ${admin.email}`);

  for (const c of CATEGORIES) {
    await prisma.blogCategory.upsert({
      where: { slug: slug(c.name) },
      update: { name: c.name, description: c.description },
      create: { name: c.name, slug: slug(c.name), description: c.description },
    });
  }
  console.log(`✔ ${CATEGORIES.length} categories`);

  for (const t of TAGS) {
    await prisma.blogTag.upsert({
      where: { slug: slug(t) },
      update: { name: t },
      create: { name: t, slug: slug(t) },
    });
  }
  console.log(`✔ ${TAGS.length} tags`);

  console.log('\nSeed complete. Login credentials:');
  console.log(`  email:    ${email}`);
  console.log(`  password: ${password}`);
  console.log('  (set ADMIN_EMAIL / ADMIN_PASSWORD env vars to override; change after first login)');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());

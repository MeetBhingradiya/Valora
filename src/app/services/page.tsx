import Link from 'next/link';

function ServicesPage() {
  return (
    <div className="min-h-screen p-8 bg-gray-100">    
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      <ul className="space-y-4">
      <li>
          <Link href="/services/game-development">
            Game Development
          </Link>
        </li>
        <li>
          <Link href="/services/web-development">
            Web Development
          </Link>
        </li>
        <li>
          <Link href="/services/app-development">
            Application Development
          </Link>
        </li>
        <li>
          <Link href="/services/ui-ux-design">
            UI/UX Design
          </Link>
        </li>
        <li>
          <Link href="/services/cloud-solutions">
            Cloud Solutions
          </Link>
        </li>
        <li>
          <Link href="/services/digital-marketing">
            Digital Marketing
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ServicesPage;

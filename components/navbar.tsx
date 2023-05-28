import Link from 'next/link';

interface NavbarProps {
  role: string;
}

export const NavBar: React.FC<NavbarProps> = ({ role }) => {
  return (
    <>
      <nav className="bg-green-400 border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link legacyBehavior href="/">
            <a className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Sustainatech</span>
            </a>
          </Link>
          <div className="flex items-center">
            <a href="tel:5541251234" className="mr-6 text-sm text-gray-500 dark:text-white hover:underline">(330) 331-234</a>
            <Link legacyBehavior href="/login">
              <a className="text-sm text-green-600 dark:text-green-500 hover:underline">Login</a>
            </Link>
          </div>
        </div>
      </nav>
      <nav className="bg-green-100 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
              <li>
                <Link legacyBehavior href="/">
                  <a className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
                </Link>
              </li>
              
              {role === "admin" ? (
                <>
                <li>
                <Link legacyBehavior href="/pages/adminDashboard">
                  <a className="text-gray-900 dark:text-white hover:underline">Dashboard</a>
                </Link>
              </li>
                <li>
                  <Link legacyBehavior href="/pages/profile">
                    <a href="#" className="text-gray-900 dark:text-white hover:underline">Admin Profile</a>
                  </Link>
                </li>
                </>
                
              ) : (
                <>
                <li>
                <Link legacyBehavior href="/pages/dashboard">
                  <a className="text-gray-900 dark:text-white hover:underline">Dashboard</a>
                </Link>
              </li>
                <li>
                  <Link legacyBehavior href="/pages/profile">
                    <a href="#" className="text-gray-900 dark:text-white hover:underline">Profile</a>
                  </Link>
                </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

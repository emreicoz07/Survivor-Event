import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation();

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.races'), href: '/races' },
    { name: t('nav.information'), href: '/information' },
    { name: t('nav.media'), href: '/media' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.results'), href: '/results' },
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: FaFacebook },
    { name: 'Instagram', href: '#', icon: FaInstagram },
    { name: 'Twitter', href: '#', icon: FaTwitter },
    { name: 'YouTube', href: '#', icon: FaYoutube },
  ];

  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <div className="flex justify-center space-x-6 md:justify-start">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-semibold leading-6 text-gray-400 hover:text-gray-300"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <p className="mt-8 text-center text-xs leading-5 text-gray-400 md:text-left">
            &copy; {new Date().getFullYear()} Survivor Parkur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
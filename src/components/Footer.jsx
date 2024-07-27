import { SOCIAL_MEDIA_LINKS } from "../constants/menu";


export default function Footer() {
  return (
    <footer className="mb-8 mt-15 bottom-0">
      <div className="flex items-center justify-center gap-7">
        {SOCIAL_MEDIA_LINKS.map((social, index) => (
          <a
            className="text-yellow-500"
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {social.icon}
          </a>
        ))}
      </div>
      <div className="text-yellow-50 text-center flex flex-wrap items-center justify-center gap-1 mt-6">
          <div className="">

        <span>&copy; </span>
         <span>

         compiletab.All rights reserved
         </span>
          </div>
         <span>Design by Nana Kwame Tuffour</span>
      </div>
    </footer>
  );
}

import { FaFacebookF, FaInstagram, FaTwitter, FaGithub, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full bg-white rounded-b-2xl flex items-center justify-between px-8 py-4 shadow mt-8">
      <span className="text-sm text-neutral-700">
        © 2025 Prima Healthcare. All rights reserved.
      </span>
      <div className="flex items-center gap-6 text-neutral-700 text-xl">
        <a href="#" aria-label="Facebook"><FaFacebookF /></a>
        <a href="#" aria-label="Instagram"><FaInstagram /></a>
        <a href="#" aria-label="Twitter"><FaTwitter /></a>
        <a href="#" aria-label="GitHub"><FaGithub /></a>
        <a href="#" aria-label="YouTube"><FaYoutube /></a>
      </div>
    </footer>
  );
}
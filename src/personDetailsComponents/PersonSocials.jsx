import { LiaImdb } from "react-icons/lia";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const SocialButton = ({ href, icon, label }) => {
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-[#C1121F] hover:bg-zinc-800 transition-all duration-300"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
};

const PersonSocials = ({ externalids }) => {
  return (
    <section className="px-4 md:px-10 pt-7 pb-3">
      <h2 className="text-xl md:text-3xl font-bold mb-6">Social Links</h2>

      <div className="flex flex-wrap gap-4">
        <SocialButton
          href={
            externalids?.imdb_id
              ? `https://www.imdb.com/name/${externalids.imdb_id}`
              : null
          }
          icon={<LiaImdb size={24} />}
          label="IMDb"
        />

        <SocialButton
          href={
            externalids?.instagram_id
              ? `https://instagram.com/${externalids.instagram_id}`
              : null
          }
          icon={<FaInstagram size={22} />}
          label="Instagram"
        />

        <SocialButton
          href={
            externalids?.facebook_id
              ? `https://facebook.com/${externalids.facebook_id}`
              : null
          }
          icon={<FaFacebook size={22} />}
          label="Facebook"
        />

        <SocialButton
          href={
            externalids?.twitter_id
              ? `https://twitter.com/${externalids.twitter_id}`
              : null
          }
          icon={<FaTwitter size={22} />}
          label="Twitter"
        />
      </div>
    </section>
  );
};

export default PersonSocials;
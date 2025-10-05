import Link from "next/link";
import Container from "./Container";
import MediaLinks from "./MediaLinks";

function Footer() {
  return (
    <footer className="bg-neutral-800 pt-20 pb-4 mt-24">
      <Container>
        <div className="flex flex-wrap pb-10 mb-8 border-b-2 border-white/10 gap-[10vw]">
          <div>
            <div className="mb-4">
              <Link href="/">
                <img className="w-36 md:mx-0 mx-auto" src="/icons/icon.png" alt="" />
              </Link>
            </div>
            <div className="text-neutral-400 md:text-left text-center leading-6 text-sm md:max-w-120">
              Luae perspiciatis at praesentium pariatur! ratione laborum earum
              exercitationem quod maxime optio consequatur dolore, provident
              nesciunt ullam tempora ea dicta fugit!
            </div>
            <MediaLinks />
          </div>
          <div>
            <div className="text-2xl font-bold  text-white pb-4">Quick Access</div>
            <div className="text-neutral-400 text-sm flex flex-col gap-3">
              <Link className="hover:translate-x-1 duration-200" href="/">Home</Link>
              <Link className="hover:translate-x-1 duration-200" href="/menu">Menu</Link>
              <Link className="hover:translate-x-1 duration-200" href="/abute-us">Abute us</Link>
              <Link className="hover:translate-x-1 duration-200" href="/contact-us">Contact us</Link>
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white pb-4">Get In Touch</div>
            <div className="text-neutral-400 text-sm flex flex-col gap-3">
              <div>+1-212-2837-3027</div>
              <div>carrot_resturant@gmail.com</div>
            </div>
          </div>
        </div>
        <div className="text-center text-neutral-500 text-sm">
          Copyright 2025 Carrot.com - All Right Reserved
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

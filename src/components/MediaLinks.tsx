"use client"

import MediaLink from "./MediaLink";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";

function MediaLinks() {
  return (
    <div className="flex gap-4 items-center md:justify-start justify-center mt-8">
      <MediaLink href="https://www.instagram.com/" icon={<InstagramIcon />} />
      <MediaLink href="https://x.com/" icon={<TwitterIcon />} />
      <MediaLink href="https://web.telegram.org/" icon={<TelegramIcon />} />
    </div>
  );
}

export default MediaLinks;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="rounded-md px-6 py-8 flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-16">
      
      <div className="w-32 h-32 flex items-center justify-center shrink-0">
        <img src="Photos\icon.png" alt="Website Logo" />
      </div>

      
      <div className="text-center sm:text-left space-y-2">
        <h2 className="text-3xl font-semibold font-handwriting">Let&apos;s connect</h2>
                  <a href="mailto:Ajitchauhan200315@gmail.com">
                    <p >
                      Ajitchauhan200315@gmail.com
                    </p>
                  </a>
        <p className="text-sm">Designed &amp; built by Ajit Chauhan</p>
        <p className="text-sm">&copy; {year} All rights reserved.</p>
      </div>
    </footer>
  );
}

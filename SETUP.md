# NTS Scaffoldings – Local setup

This project is ready to edit. Node.js is included in the project (`.node/`) so you don’t need a system install.

## Run the site

From the project folder:

```bash
cd /Users/sanskritigupta/Documents/nts-scaffolding
./run.sh npm run dev
```

Then open **http://localhost:3000**.

Or, if you have Node installed system-wide: `npm run dev`.

## Contact form (optional)

To send form submissions to **ntsscaff2004@gmail.com**, edit `.env.local` and set:

- `GMAIL_USER=ntsscaff2004@gmail.com` (already set)
- `GMAIL_APP_PASSWORD=` — paste your [Gmail App Password](https://support.google.com/accounts/answer/185833) (16 characters, no spaces)

If you leave `GMAIL_APP_PASSWORD` empty, the site still runs; the contact form will fail when submitted.

---

**Build for production:** `./run.sh npm run build`  
**Start production server:** `./run.sh npm start`

**Git (optional):** This folder was set up from a ZIP. To use git and push changes, install Xcode Command Line Tools (`xcode-select --install`), then run:

```bash
cd /Users/sanskritigupta/Documents/nts-scaffolding
git init
git remote add origin https://github.com/sg199710/nts-scaffoldings-website.git
git fetch origin
git reset --soft origin/master
```

Then you can commit and push as usual.

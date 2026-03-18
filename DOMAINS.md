# Connecting ntsscaff.in to the website

The site is hosted on **Vercel**. To serve it on **ntsscaff.in** as well as ntsscaffoldings.com, follow these steps.

## 1. Add the domain in Vercel

1. Open [Vercel Dashboard](https://vercel.com) → your **nts-scaffoldings** project.
2. Go to **Settings** → **Domains**.
3. Click **Add** and enter:
   - `ntsscaff.in`
   - `www.ntsscaff.in` (optional; add both if you want www)
4. Click **Add** for each. Vercel will show the DNS records you need.

## 2. Add DNS records at your domain registrar

Where you bought **ntsscaff.in** (GoDaddy, Namecheap, Google Domains, etc.):

- **For apex (ntsscaff.in):**  
  Add an **A** record:  
  - Name: `@` (or leave blank)  
  - Value: `76.76.21.21`  
  - Or use Vercel’s **CNAME** if they show one (e.g. `cname.vercel-dns.com`), if your registrar supports CNAME flattening for the root.

- **For www (www.ntsscaff.in):**  
  Add a **CNAME** record:  
  - Name: `www`  
  - Value: `cname.vercel-dns.com`

*(Use the exact values Vercel shows in the Domains page for your project.)*

## 3. Wait for DNS

- DNS can take from a few minutes up to 24–48 hours.
- In Vercel → Domains, the new domain will show as “Valid” when it’s ready.
- You can use [dnschecker.org](https://dnschecker.org) to see if the records have propagated.

## 4. Optional: redirect www to non-www (or the other way)

In Vercel → Domains you can set one of the two (e.g. ntsscaff.in or www.ntsscaff.in) to redirect to the other so there’s a single canonical URL.

---

**Note:** The app uses `NEXT_PUBLIC_SITE_URL` (or defaults to `https://ntsscaffoldings.com`) for canonical URLs and Open Graph. To make **ntsscaff.in** the primary domain for SEO and sharing, set in Vercel → Project → Settings → Environment Variables:

- `NEXT_PUBLIC_SITE_URL` = `https://ntsscaff.in`

Redeploy after changing env vars.

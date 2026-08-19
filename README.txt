BKC HOME BUILDERS DREAMWEAVER WEBSITE

OPEN IN DREAMWEAVER
1. Extract this ZIP folder.
2. In Dreamweaver, choose Site > New Site.
3. Name it “BKC Home Builders.”
4. Select this extracted folder as the Local Site Folder.
5. Open index.html to begin editing.

FILES
- index.html: Home page
- about.html: Company/team page
- services.html: Services page
- projects.html: Project gallery
- contact.html: Contact page
- assets/css/styles.css: All colors, layout, fonts, and responsive styling
- assets/js/main.js: Mobile navigation and automatic copyright year
- assets/images: Logo, team photos, and project photos

CONTACT FORM
The form is currently a preview and does not send submissions. To connect Web3Forms:
1. Open contact.html in Code view.
2. Change <form action="#" method="post" ...> to:
   <form action="https://api.web3forms.com/submit" method="POST">
3. Remove the onsubmit attribute.
4. Add this directly after the opening form tag:
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY">

PUBLISHING
Upload the entire folder contents to the public_html folder at the company’s web host. Keep all file and folder names unchanged so links and images continue working.


BKC CLIENT PHOTO MANAGER (prepared)
----------------------------------
A private /admin/ dashboard scaffold has been added using Decap CMS.
Project entries live in /content/projects/ and uploaded images will live in /assets/images/uploads/.
Before client handoff, connect the site to the final GitHub repository/authentication and replace the repo value in /admin/config.yml.
The public navigation intentionally does not link to /admin/.

------------------------------------------------------------
BKC PROJECT PHOTO MANAGER (added Aug 2026)
------------------------------------------------------------
The Projects page is now connected to content/project-gallery.json.
A private Decap CMS dashboard is located at /admin/ and is configured so
BKC can add, replace, delete, and reorder project photos without touching HTML.

IMPORTANT: the dashboard's files are complete, but the login cannot work until
this site is connected to a Git repository. Before client handoff:
1) Put this site in a GitHub repository (recommended repo name: BKC-Home-Builders).
2) Connect that repository to the final Netlify site for automatic deploys.
3) In admin/config.yml replace YOUR_GITHUB_USERNAME with the repository owner.
4) Configure Decap/GitHub authentication for /admin/ and give the BKC editor
   account write access (or use the selected OAuth/authentication setup).
5) Test one photo upload from /admin/ and confirm Netlify redeploys it.

Dreamweaver workflow is unchanged. You can continue editing the normal HTML/CSS
files. The client should only be given the /admin/ link after the login is tested.

# GF Surprise Website ❤️

## 1) Change the name/message
Open `script.js` and edit:
- `name: "My Love"`
- `message: \`...\``

## 2) Add photos
The easiest upgrade is to replace each `.placeholder` in `index.html` with:
`<img src="photo1.jpg" alt="Memory">`
and put `photo1.jpg`, `photo2.jpg`, `photo3.jpg` in the same folder.

## 3) Add music (optional)
Put an MP3 named `music.mp3` in this folder. Mobile browsers may require the user to tap the music button before audio starts.

## 4) Test it
Double-click `index.html` to open it in your browser.

## 5) Put it online for free
Use GitHub Pages:
1. Create a free GitHub account.
2. Create a new repository.
3. Upload `index.html`, `style.css`, `script.js` and your photos/music.
4. In the repository settings, enable Pages for the main branch.
5. GitHub will give you a shareable link.

Tip: You can rename the repository to something cute, but don't put private information in the URL.


## Photos on GitHub (phone)
1. In your repository, tap **Add file → Upload files**.
2. Upload `photo1.jpg`, `photo2.jpg`, `photo3.jpg`.
3. Then edit `index.html` and replace the three `.placeholder` blocks with:
   `<img src="photo1.jpg" alt="Memory">`
   `<img src="photo2.jpg" alt="Memory">`
   `<img src="photo3.jpg" alt="Memory">`
4. Add this CSS inside `style.css` if needed:
   `.photo img{width:100%;height:100%;object-fit:cover}`
5. Commit the changes.

## Music
Put your chosen MP3 in the repository with the exact name `music.mp3`.
The music button on the site will play it after Muskan taps the button.

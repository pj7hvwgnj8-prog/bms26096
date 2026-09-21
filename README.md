# My Assignments

A simple static assignment dashboard built with HTML, CSS and JavaScript.

## Update an assignment

Open `assignments.js` and edit/add an object:

```js
{
  subject: "Economics",
  title: "Assignment 2",
  description: "Short description",
  due: "2026-10-20",
  status: "upcoming",
  link: "https://..."
}
```

Use `status: "submitted"` after submitting.

## GitHub

1. Create a new GitHub repository, e.g. `my-assignments`.
2. Upload `index.html`, `style.css`, `assignments.js`, `script.js`, and `README.md`.
3. Commit the files.

## Netlify

1. Log in to Netlify.
2. Choose **Add new project** → **Import an existing project**.
3. Choose GitHub.
4. Select your repository.
5. Build command: leave blank.
6. Publish directory: `/` (or leave Netlify's default for a root static site).
7. Deploy.

After that, every time you edit `assignments.js` on GitHub and commit the change, Netlify will automatically redeploy the site.

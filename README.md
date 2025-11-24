This is a Next.js project created for an interview task. It features a simple sign-up form for a fake site, and uses server actions with mock data.

## Setup

To start the application on your local machine run `npm install` once, then run `npm run dev` and open http://localhost:3000/sign-up in your browser.

Fill in the form and submit to create a new user account. Use the "Find user" dialog to navigate to your profile page.

## Features

- The site switches between light and dark mode based on system preference
- The site responds to screen size and zoom level, up to 400%
- All server actions have a random delay to simulate network requests
- Server-side pages (SSR) have been used, alongside client-side components where necessary

### Sign up page

- The country and interests lists are pulled from a server action on page load
- The full name, date of birth, and country fields are required by the client-side validation
- All the fields are required by server-side validation (interests requires at least 1 entry)
- On the server-side, the date of birth is converted to an age and validated to be between 1 and 18 inclusive
- Form re-submission is blocked until returned

### Find user dialog

- Click the "Find user" button to open the dialog
- Click on a user to view their details page
- The list of users is automatically updated when a new user is added

### User details page

- A server-side page for each user is dynamically created using their ID
- A new page is automatically added when the user list is updated

## Out of scope

- Check the `sign-up.test.jsx` file, and the `test: ...` commits, for the unit tests used during TDD. These have been skipped with `xdescribe` due to [lack of support from Jest for async server components](https://nextjs.org/docs/app/guides/testing/jest). Next step would be to implement end-to-end testing with Cypress.
- The colours and the interactive elements need a full a11y review to check alignment with WCAG standards. This should be done through automatic testing on the pipeline, as well as manual A11y approval before release.


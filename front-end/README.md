# ![RealWorld Example App](logo.png)

> ### [Svelte](https://github.com/sveltejs/svelte) codebase containing real world examples (CRUD, auth, advanced patterns, etc) that adheres to the [RealWorld](https://github.com/gothinkster/realworld) spec and API.

### [Demo](https://realworld.svelte.dev)&nbsp;&nbsp;&nbsp;&nbsp;[RealWorld](https://github.com/gothinkster/realworld)

This codebase was created to demonstrate a fully fledged fullstack application built with SvelteKit including CRUD operations, authentication, routing, pagination, and more.

For more information on how to this works with other frontends/backends, head over to the [RealWorld](https://github.com/gothinkster/realworld) repo.

## Explanation

For this frontend, I used the backend developed by Roch Moreau that you can find [here](https://github.com/EnzoLePadellec/secure-web-dev-backend) and the realworld code that you can find above.

Please note that the website does not display all locations. So if you create a new location, make sure it is created from your Mongo database.

Please note that this code may have some problems on Chrome. You can use another browser or private browsing to solve this problem. If you still have problems, don't hesitate to contact me.

### User Stories:

US1: As a random visitor, I want to be able to register an account or log-in, so I can access all features - Achieved

US2: As a random visitor, I want to be redirected to the login/register page when I click on “location" tab, so that I know I must log-in to see its content - Achieved

US3: As a logged-in user, I want to see locations and be able to click on one location to open a modal containing details, so that the website is useful - Achieved

US4: As an “admin" user, I want to see a “Add Location” button in the location page, so that I can create a new location - Achieved

US5: As an “admin" user, I want to see a button to edit locations in the array of locations, so that I can edit existing locations - Achieved

US6: As an “admin" user, I want to see a button to delete locations in the array of locations so that I can delete existing locations - Achieved

## Running locally

```bash
npm install
npm run dev
```

To build and start in prod mode:

```bash
npm run build
npm run preview
```

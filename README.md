# 🎙️ 📻 Podcaster - Inditex 📻 🎙️

> Code challenge proposed by Inditex - Developer: Andrea Calvo Moreno

This repository contains the code challenge proposed by Inditex. The application consists on a podcast portal where the list with the 100 starred titles is shown. Each podcast from the list is a link which redirects the user to a new view where the details for that podcast are displayed as well as the list of the episodes contained in it. The title for each espisodes is the link to the detail for that episode and it is in this new url where the user can play the audio for this episode.

**The code can be found on [this](https://github.com/acalvom/itunes-podcasts-inditex) following private repository, nevertheless only those users allowed can access to it.**

## 🎯 Minimum Requirements

### Technical Requirements

- The application will be a Single Page Application.
- The application must have both development and production modes.

### Development Requirements

- The application title should act as a link to the main view.
- Whenever client-side navigation starts, some form of visual indicator should appear in the top right corner of the page to reflect that the process is underway.

The application will have only three views:

1. **Main View**

   - _**App URL:**_ `/`
   - _**API: [Top Podcasts RSS Feed](https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json)**_
   - Display the list of the 100 most popular podcasts according to Apple's listing.
   - Upon fetching the list from the external service for the first time, **it should be stored on the client** so that it is only requested again if more than one day has passed since the last request.
   - Users can filter the displayed podcasts by entering a text string that considers both the **podcast titles and the names of their authors**.
   - **Filtering should be immediate**.
   - Clicking on a podcast should navigate the user to the detailed view of that podcast.

2. **Podcast Details**

   - _**App URL:**_ `/podcast/{podcastId}`
   - _**API: [Podcast Episodes Lookup](https://itunes.apple.com/lookup?id=934552872&media=podcast&entity=podcastEpisode&limit=1000)**_
   - A sidebar should display the podcast's image, title, author, and description.
   - A main section should show:
     - the number of episodes
     - a list of those episodes indicating their title, publication date, and duration.
   - Once the details of a podcast are fetched from the external service for the first time, they should be **stored on the client** so that they are only requested again if a day has passed since the last request.
   - Clicking on an episode title should navigate the user to the detailed view of that episode.

3. **Episode Details**
   - _**App URL:**_ `/podcast/{podcastId}/episode/{episodeId}`
   - The **same sidebar** as in the previous view should be displayed.
   - Both the podcast image and title, and the author should be links to the podcast's detailed view.
   - A main section should display the podcast's title, description, and a basic HTML5 audio player to play the podcast.

## 👣 A Little Further On:

- Custom favicon
- Not Found page
- Responsive design
- DDD development following Onion Architecture
- Dockerize app & deploy on Vercel
- E2E tests with `Cypress 13` suite for app workflows.
- Incorporate linters and guards like `husky`, `commitlint`, `eslint`, and `prettier`.

## 🧭 Technical Decisions:

1. Search input implemented with a minimum debounce of 300ms to avoid unnecesary re-renders
2. Caché implemented with Local Storage Browser API

## 🫀 Application Flow

- Upon application startup, a cache check is performed to display the top 100 podcasts. If the podcasts are stored in local storage, their content is retrieved from there. If the cache is empty or has expired, the data is requested from the external API. Subsequently, these 100 items are displayed on the Home page.

- In the upper right corner of the application, a search bar is displayed, which escapes characters to allow filtering by podcast name or artist. The count of available podcasts is indicated with a badge immediately to the left of the input. This search input has a 300ms delay to avoid immediate renderings.

- Each element represents a link to the details of that podcast. Therefore, when any of them is clicked, the user will be redirected to a new URL where more details, the total number of episodes, and a list of the episodes of that podcast will be displayed. At this point, before showing the results, the podcast is requested from the cache, which works similarly to the previous point.

- Each of the elements in the list of episodes is a link to the details of that episode. Therefore, when any of them is clicked, the user will be redirected to that details window.

- In the episode details, the previous sidebar view with the podcast details is maintained, but in the main section, the title, episode description, and an audio section to play that episode are displayed. In that sidebar view, the podcast name acts as a link to the podcast details.

- In any tab, while the resource is being requested, a loading indicator will appear in the upper right corner.

- Throughout the application, the header serves as a link to the home page.

- If a user requests a page that does not exist within the app's domain, they will be redirected to the not found page.

## ⚙️ Tech Stack

▪️ `React` `TypeScript` `Tailwind` `Axios` `React-Router` `Local-Storage`
▪️ `Cypress 13` `React Testing Library` `Vitest`
▪️ `Git` `GitHub` `Docker` `Vite` `Vercel`  
▪️ `Agile` `DDD` `Onion Architecture`

## 🏁 **Getting Started**

### 🛠 **System Requirements**

- `node: v20.12.2`
- `npm: v10.5.0`

### 🏗 **Project Installation**

```bash
# Clone this repository
$ git clone https://github.com/acalvom/itunes-podcasts-inditex

# Navigate to the folder with the code
$ cd itunes-podcasts-inditex
```

➡️ **_Option A: Run in local environment_**

```bash
# Install dependencies
$ itunes-podcasts-inditex > npm install

# Run the app
$ npm run dev
```

🟥 **You will need to include the `.env.local` file with the API url: `VITE_API_URL=`**

➡️ **_Option B: Run in Docker_**

⚠️ Note: Docker must be installed on your machine.

```bash
# Build the Docker image with the name `itunes-podcasts-inditex`. This might take some time.
$ docker build -t itunes-podcasts-inditex .

# Check the created image
$ docker image ls

# Run the image `itunes-podcasts-inditex` in the container `itunes-podcasts-inditex-container`, exposing port 3000
$ docker run --name itunes-podcasts-inditex-container -p 3000:3000 -d itunes-podcasts-inditex

# Open `http://localhost:3000/` to access the app running in the Docker container
```

➡️ **_Option C: Run locally as production_**

```bash
# Install dependencies
$ itunes-podcasts-inditex > npm install

# Build the app
$ npm run build

# Run the app
$ npm run start
```

➡️ **_Option D: Run in Vercel_**
[☁ Vercel deployment](https://itunes-podcasts-inditex.vercel.app/)

### 🧾 Hightlighted scripts in `package.json`

```bash
# Run the app in localhost (PORT: 3000)
$ npm run dev

# Build the app
$ npm run build

# Run the app with a build
$ npm run start

# Run e2e tests with UI
$ npm run cy:open

# Run e2e tests silently
$ npm run cy:run
```

### 🫂 **You can reach me at:**

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="16.66%"><a href="https://github.com/acalvom"><img src="https://avatars.githubusercontent.com/u/34605171?s=88&v=4" width="100px;" alt="acalvom"/><br /><sub><b>acalvom
      </b></sub></a><br /></td>
    </tr>
  </tbody>
</table>
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<br>

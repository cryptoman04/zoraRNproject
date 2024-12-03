# Welcome to the Zora RN Takehome project 👋

## Get started

1. Install dependencies

    ```bash
    npm install
    ```

2. Start the app

    ```bash
     npx expo start
    ```

3. Be sure you are in "expo go" mode. In the terminal you should see "Using Expo Go". If you instead see "Using development build", press `s` on your keyboard. Start the iOS version of the app by pressing `i` on your keyboard.

## Project Walkthrough

-   app - contains two pages:

    -   index.tsx - Serves as the home page, renders the image list.
    -   image.tsx - Is the Image detail view, renders image info along with description.

-   components - contains re-usable components:
    -   ImageDetails - is the component we render in the image list as well as the image detail view
    -   ImageListItem - wraps the ImageDetails component and adds routing logic + is used within the FlashList component to render list data.
    -   SearchBar - controlled component that handles search input.

-utils - only has unsplashed.ts for now. It contains Unsplashed types along with a simple API for searching unsplahed.

## Things I could probably refactor or add in a future update:

-   Error handling - In the Images component we currently `catch` any errors from searching but we dont handle them with appropriate UI/UX.
-   I could create a seperate ImageList component which will house any specific list related logic, right now alot of that logic lives within the root page of the app.
-   I could create an env file to house API keys. For this project I kept things simple to avoid extra boilerplate.
-   If the app expands in scope I could also add support for a state management library such as redux or zustand.
-   Pass more well defined props to FlashList to improve performance. For example I could pass the `estimatedListSize`, `estimatedItemSize`. Additionally I could work on improving image caching and rendering - as you'll notice when navigating from the Image list to the Image page there can sometimes be a slight flutter due to having to reload the image.

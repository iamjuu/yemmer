# Google Maps Setup Instructions

## Getting a Google Maps API Key

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the following APIs:
   - Maps JavaScript API
   - Places API (if you plan to use places features)
4. Go to "Credentials" and create an API key
5. Restrict the API key to your domain for security

## Setting up the API Key

1. Create a `.env.local` file in your project root
2. Add the following line to the file:
   ```
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
   ```
3. Replace `your_actual_api_key_here` with your real Google Maps API key
4. Restart your development server

## Important Notes

- The API key must be prefixed with `NEXT_PUBLIC_` to be accessible in the browser
- Never commit your actual API key to version control
- The `.env.local` file is already in `.gitignore` to prevent accidental commits
- For production, set the environment variable in your hosting platform

## Features

The Google Maps component includes:
- Interactive maps for each location
- Custom markers for each city
- Responsive design
- Clean UI with location overlays
- Zoom controls
- Custom map styling

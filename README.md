# Translate Express

Translate Express is a high-powered translator app designed to enable continuous, real-time multilingual communication with seamless automatic language detection. This application aims to facilitate uninterrupted conversations and enhance global accessibility.

## Video Demo
[https://drive.google.com/file/d/1WVD3-ud-xmIEhaA_JDFjXZB7wr9NGKgN/view?usp=sharing
](https://drive.google.com/file/d/1WVD3-ud-xmIEhaA_JDFjXZB7wr9NGKgN/view?usp=sharing)

## Features

- **Continuous, Real-Time Multilingual Communication**: The app enables real-time translation, ensuring that conversations remain fluid and uninterrupted.
- **Seamless Automatic Language Detection**: Automatically detect the language being spoken or typed to provide accurate translations.
- **Google Cloud Translate Integration**: Utilize Google Cloud Translate API for precise and fast language translations.
- **Azure Speech-to-Text Integration**: Leverage Azure Speech-to-Text API for enhanced voice transcription, converting spoken language into text in real-time.
- **Mobile Accessibility with Flutter WebView**: Ensure seamless use of translation features across mobile devices by integrating a Flutter WebView.
- **Firebase Authentication**: Implement secure authentication using Firebase, providing a scalable solution for sign-ups, sign-ins, and session management.
- **Light and Dark Mode**: Incorporate light and dark mode with a responsive design to ensure usability across various devices and lighting conditions.

## Technology Stack

- **Frontend**: Next.js (React Framework), Tailwind CSS for styling
- **Backend**: Express.js (Node.js Framework)
- **APIs**: Google Cloud Translate API, Azure Speech-to-Text API
- **Mobile**: Flutter WebView for mobile accessibility
- **Authentication**: Firebase Authentication
- **Deployment**: Vercel for hosting and continuous deployment

## Getting Started

### Prerequisites

- Node.js and npm installed
- Google Cloud and Azure accounts for API access
- Firebase project setup for authentication

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/translate-express.git
   cd translate-express
   ```
   
2. Install dependencies:
   ```bash
   npm install
   ```
   
3. Set up environment variables:
Create a .env.local file in the root directory and add your API keys and Firebase configuration:
   ```env
   GOOGLE_CLOUD_TRANSLATE_API_KEY=your-google-cloud-translate-api-key
   AZURE_SPEECH_TO_TEXT_API_KEY=your-azure-speech-to-text-api-key
   FIREBASE_API_KEY=your-firebase-api-key
   FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
   FIREBASE_PROJECT_ID=your-firebase-project-id
   FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
   FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
   FIREBASE_APP_ID=your-firebase-app-id
   ```

4. Run the development servers:
  - Frontend (Next.js):
    
    ```bash
    npm run dev
    ```
    Open http://localhost:3000 to view it in your browser.
    
  - Backend (Express.js):
    
    ```bash
    npm run dev:server
    ```
    The server will run on http://localhost:3001.

### License
This project is licensed under the MIT License. See the LICENSE file for details.

### Acknowledgements
- Next.js
- Express.js
- Google Cloud Translate
- Azure Speech-to-Text
- Firebase
- Vercel
- Flutter

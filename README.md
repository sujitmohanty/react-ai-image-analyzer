# React AI Image Analyzer 🖼️

This is a simple web application built with React that uses Google's Gemini 2.5 Flash model to analyze and generate a short, descriptive summary for any image you upload.

![App Screenshot](https://i.ibb.co/TqYFH0b7/Screenshot-2025-11-10-174117.png)

---

## ✨ Features

- **Image Upload:** Upload common image formats (PNG, JPG, etc.).
- **AI-Powered Analysis:** Generates a text summary of the image's content.
- **Fast & Modern:** Uses the **Gemini 2.5 Flash** model for quick responses.
- **Simple UI:** A clean, focused interface built with React.

---

## 🛠️ Tech Stack

- **Frontend:** [React](https://react.dev/) (built with [Vite](https://vitejs.dev/))
- **AI Model:** [Google Gemini 2.5 Flash](https://aistudio.google.com/)
- **API:** [Google AI SDK](https://www.npmjs.com/package/@google/generative-ai) (`@google/generative-ai`)

---

## ⚙️ How It Works

This application provides a simple interface to Google's multimodal AI capabilities.

1.  The user selects an image file from their local machine.
2.  The React app reads the file and converts it into a **Base64**-encoded string.
3.  This Base64 data, along with its MIME type (e.g., `image/jpeg`), is sent to the Gemini API with a text prompt (e.g., "Summarize this image").
4.  The Gemini 2.5 Flash model processes both the image and the prompt, generating a text-only response.
5.  The app receives this text response and displays it to the user.

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing.

### Prerequisites

- **Node.js:** You'll need Node.js (v18.0 or later) installed.
- **Google Gemini API Key:** You must have an API key from [Google AI Studio](https://aistudio.google.com/app/api-keys).

### Installation & Setup

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/your-username/react-ai-img-analyzer-app.git](https://github.com/your-username/react-ai-img-analyzer-app.git)
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd react-ai-img-analyzer-app
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

4.  **Set up your environment variables:**
    Create a file named `.env` in the root of the project and add your API key. (This app is built with Vite, which requires the `VITE_` prefix).

    ```.env
    VITE_GEMINI_API_KEY=your_api_key_here
    ```

### Running the Application

Once installed, run the development server:

```bash
npm run dev
```

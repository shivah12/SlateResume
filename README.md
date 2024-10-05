# SlateResume

**SlateResume** is an AI-powered resume builder that helps users create professional resumes effortlessly. It leverages AI to generate resume summaries and experiences, making it easier to present career details with impact.

## Features

- **AI-Powered Summaries & Experiences**: Powered by the **Gemini AI API**, SlateResume generates compelling summaries and experiences for your resume based on user input.
- **User-Friendly Interface**: Built with **Vite-React** for a fast and responsive UI.
- **Content Management**: Uses **Strapi CMS** for managing templates and custom content.
- **Database Management**: Integrated with **PostgreSQL** for data storage and management.
- **Real-Time Preview**: View your resume updates in real time.

## Tech Stack

- **Frontend**: Vite, React, JavaScript
- **Backend**: Strapi CMS, Node.js
- **Database**: PostgreSQL
- **AI Integration**: Gemini AI API

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/SlateResume.git
   cd SlateResume
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Set up Strapi CMS:

   - Go to the `backend` folder.[https://github.com/shivah12/slate-resume-backend]
   - Install dependencies:

     ```bash
     npm install
     ```

   - Start Strapi:

     ```bash
     npm run develop
     ```

5. Set up PostgreSQL:

   - Ensure you have PostgreSQL installed and running.
   - Create a database and configure the connection in the Strapi project.

6. Set up the Gemini AI API:

   - Sign up for the Gemini AI API and get your API key.
   - Add the API key to the `.env.local` file.

7. Run the project and start building your resume!

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)

# 🎯 Quiz App - AI-Powered Quiz Generator

An interactive React-based quiz application that generates random questions using Google's Gemini 2.0 Flash API, featuring a modern UI and instant results.

![Quiz App Preview](https://img.shields.io/badge/React-18.0+-blue.svg)
![Gemini API](https://img.shields.io/badge/Gemini-2.0%20Flash-orange.svg)
![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## ✨ Features

- 🤖 **AI-Powered Questions** - Generates dynamic questions using Gemini 2.0 Flash API
- 📝 **Smart Input System** - Input field with topic suggestions
- 🎲 **Random Questions** - 10 unique questions per quiz session
- 📊 **Instant Results** - Real-time score tracking and feedback
- ✅ **Answer Review** - Shows correct answers at the end
- 🔄 **Quick Restart** - Restart button to take another quiz
- 🎨 **Modern UI** - Clean and intuitive interface
- 📱 **Fully Responsive** - Works seamlessly on all devices
- ⚡ **Fast & Smooth** - Built with React and Vite for optimal performance

## 🛠️ Tech Stack

- **Frontend**: React 18+
- **Build Tool**: Vite
- **AI API**: Google Gemini 2.0 Flash
- **Styling**: CSS3 + Custom Animations + tailwind css
- **State Management**: React Hooks (useState, useEffect)
- **Language**: JavaScript (ES6+)

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- npm 
- Gemini API Key (Get it free from [Google AI Studio](https://makersuite.google.com/app/apikey))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sohrabansari990/Quiz-app.git
   cd Quiz-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:5173
   ```

## 📱 How It Works

### 1️⃣ **Start Screen**
- Enter a topic or choose from suggestions
- Click start to begin the quiz

### 2️⃣ **Quiz Screen**
- Answer 10 AI-generated questions
- Questions are fetched from Gemini 2.0 Flash API
- Progress tracker shows your current question

### 3️⃣ **Results Screen**
- View your total score
- See all correct answers
- Click restart to try again with a new topic

## 🎯 Project Structure

```
quiz-app/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├
│   │   ├── QuizScreen.jsx     # Question display
│   │   
│   ├── Gemini/
│   │   └── geminiAPI.js       # API integration
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── package.json
└── README.md
```

## ⚙️ Configuration

### Gemini API Setup

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Generate your free API key
3. Add it to your `.env` file:
   ```env
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🎨 Features Breakdown

### 🧠 AI Integration
- Uses Gemini 2.0 Flash model for question generation
- Generates contextually relevant questions
- Ensures question variety and quality

### 📝 Input System
- Text input with topic suggestions
- Custom topic support
- Validation before quiz start

### 📊 Scoring System
- Real-time score calculation
- Correct answer display
- Performance summary

### 🔄 User Flow
- Smooth transitions between screens
- Loading states for API calls
- Error handling for network issues

## 🌟 Key Components

### StartScreen Component
- Topic input field
- Suggestion chips
- Start quiz button

### QuizScreen Component
- Question display
- Multiple choice options
- Progress indicator
- Next question navigation

### ResultScreen Component
- Total score display
- Correct answers list
- Restart button

## 🐛 Known Issues & Roadmap

### Known Issues
- [ ] API rate limiting on free tier
- [ ] Loading time for question generation

### Future Enhancements
- [ ] Add difficulty levels (Easy/Medium/Hard)
- [ ] Timer for each question
- [ ] Leaderboard system
- [ ] Multiple quiz categories
- [ ] Save quiz history
- [ ] Share results on social media
- [ ] Add hints for difficult questions
- [ ] Multiplayer mode
- [ ] Dark/Light mode toggle
- [ ] Sound effects and animations

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Sohrab Ansari**
- GitHub: [@sohrabansari990](https://github.com/sohrabansari990)
- LinkedIn: [Sohrab Alefi](https://www.linkedin.com/in/sohrab-alefi-324b772a2?utm_source=share_via&utm_content=profile&utm_medium=member_android)
- Email: sohrabalefi99@gmail.com

## 🙏 Acknowledgments

- Powered by Google Gemini 2.0 Flash API
- Built with React and Vite
- Inspired by modern quiz applications
- Icons and UI elements from various open-source libraries

## 📞 Support

If you encounter any issues or have questions:
- Open an issue on GitHub
- Contact via email: sohrabalefi99@gmail.com
- Connect on LinkedIn

## ⭐ Show Your Support

If you found this project helpful or interesting:
- Give it a ⭐ on GitHub
- Share it with others
- Contribute to make it better

---

<div align="center">
  <p>Made with ❤️ by Sohrab Ansari</p>
  <p>🎯 Test your knowledge with AI-powered quizzes!</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>

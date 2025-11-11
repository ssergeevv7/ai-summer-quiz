// Quiz Questions Data
const quizQuestions = [
    {
        id: 1,
        question: "When you think about AI, what excites you MOST?",
        answers: [
            { text: "Building and training models, working with code and data", scores: { architect: 3, strategist: 0, thinker: 1, entrepreneur: 1 } },
            { text: "Using AI to solve real business challenges and drive growth", scores: { architect: 0, strategist: 3, thinker: 1, entrepreneur: 2 } },
            { text: "Understanding AI's impact on society, ethics, and the future", scores: { architect: 0, strategist: 1, thinker: 3, entrepreneur: 0 } },
            { text: "Creating an AI-powered startup or product from scratch", scores: { architect: 1, strategist: 2, thinker: 0, entrepreneur: 3 } }
        ]
    },
    {
        id: 2,
        question: "Your current experience with technology/coding is...",
        answers: [
            { text: "Advanced - I code regularly in Python or other languages", scores: { architect: 3, strategist: 0, thinker: 1, entrepreneur: 1 } },
            { text: "Intermediate - I've done some online courses or school projects", scores: { architect: 2, strategist: 1, thinker: 1, entrepreneur: 2 } },
            { text: "Beginner - I'm comfortable with tech but haven't coded much", scores: { architect: 1, strategist: 2, thinker: 2, entrepreneur: 1 } },
            { text: "Non-technical - I'm more interested in strategy and business applications", scores: { architect: 0, strategist: 3, thinker: 1, entrepreneur: 2 } }
        ]
    },
    {
        id: 3,
        question: "You're given a business problem: 'Customer churn is increasing.' What's your first instinct?",
        answers: [
            { text: "Dive into the data and build a predictive model", scores: { architect: 3, strategist: 1, thinker: 0, entrepreneur: 1 } },
            { text: "Research what AI tools competitors are using for retention", scores: { architect: 0, strategist: 3, thinker: 1, entrepreneur: 2 } },
            { text: "Understand the root cause and ethical implications of prediction", scores: { architect: 0, strategist: 1, thinker: 3, entrepreneur: 0 } },
            { text: "Design a full solution and pitch it to stakeholders", scores: { architect: 1, strategist: 2, thinker: 0, entrepreneur: 3 } }
        ]
    },
    {
        id: 4,
        question: "Which of these AI applications fascinates you most?",
        answers: [
            { text: "Computer vision and image recognition (CNNs, deep learning)", scores: { architect: 3, strategist: 0, thinker: 1, entrepreneur: 1 } },
            { text: "Recommendation systems and personalization (Netflix, Spotify)", scores: { architect: 1, strategist: 3, thinker: 1, entrepreneur: 2 } },
            { text: "Natural language processing and chatbots (GPT, sentiment analysis)", scores: { architect: 2, strategist: 1, thinker: 2, entrepreneur: 2 } },
            { text: "Predictive analytics and forecasting (sales, trends, optimization)", scores: { architect: 1, strategist: 3, thinker: 0, entrepreneur: 2 } }
        ]
    },
    {
        id: 5,
        question: "In group projects, you naturally...",
        answers: [
            { text: "Take on the technical development and implementation", scores: { architect: 3, strategist: 0, thinker: 1, entrepreneur: 1 } },
            { text: "Coordinate the team and ensure we meet objectives", scores: { architect: 0, strategist: 3, thinker: 1, entrepreneur: 2 } },
            { text: "Research deeply and present insights to the group", scores: { architect: 1, strategist: 1, thinker: 3, entrepreneur: 0 } },
            { text: "Lead the pitch and communicate our vision", scores: { architect: 0, strategist: 2, thinker: 0, entrepreneur: 3 } }
        ]
    },
    {
        id: 6,
        question: "Fast forward 5 years. Where do you see yourself?",
        answers: [
            { text: "Machine Learning Engineer or Data Scientist at a tech company", scores: { architect: 3, strategist: 0, thinker: 1, entrepreneur: 0 } },
            { text: "Product Manager or Business Analyst using AI strategically", scores: { architect: 0, strategist: 3, thinker: 1, entrepreneur: 2 } },
            { text: "AI Researcher, Policy Advisor, or Ethics Consultant", scores: { architect: 1, strategist: 0, thinker: 3, entrepreneur: 0 } },
            { text: "Founder/CEO of my own AI-powered startup", scores: { architect: 1, strategist: 2, thinker: 0, entrepreneur: 3 } }
        ]
    },
    {
        id: 7,
        question: "How do you prefer to learn new skills?",
        answers: [
            { text: "Hands-on coding and building projects from scratch", scores: { architect: 3, strategist: 0, thinker: 1, entrepreneur: 1 } },
            { text: "Case studies and real-world business examples", scores: { architect: 0, strategist: 3, thinker: 1, entrepreneur: 2 } },
            { text: "Lectures, reading, and understanding concepts deeply", scores: { architect: 1, strategist: 1, thinker: 3, entrepreneur: 0 } },
            { text: "Collaborative workshops and learning by teaching others", scores: { architect: 1, strategist: 2, thinker: 1, entrepreneur: 3 } }
        ]
    },
    {
        id: 8,
        question: "You have 3 hours free. What sounds most appealing?",
        answers: [
            { text: "Following a Python tutorial to build something cool", scores: { architect: 3, strategist: 0, thinker: 0, entrepreneur: 1 } },
            { text: "Reading about how companies like Tesla or Amazon use AI", scores: { architect: 0, strategist: 3, thinker: 2, entrepreneur: 2 } },
            { text: "Watching a documentary about AI's societal impact", scores: { architect: 0, strategist: 1, thinker: 3, entrepreneur: 0 } },
            { text: "Networking at a startup event or pitch competition", scores: { architect: 0, strategist: 2, thinker: 0, entrepreneur: 3 } }
        ]
    },
    {
        id: 9,
        question: "What worries you MOST about learning AI?",
        answers: [
            { text: "Not having enough technical background or math skills", scores: { architect: 1, strategist: 2, thinker: 2, entrepreneur: 1 } },
            { text: "Not understanding how to apply it to real business scenarios", scores: { architect: 0, strategist: 3, thinker: 1, entrepreneur: 2 } },
            { text: "The complexity and fast pace of the field", scores: { architect: 2, strategist: 1, thinker: 3, entrepreneur: 1 } },
            { text: "Not having the network or resources to launch something", scores: { architect: 0, strategist: 1, thinker: 0, entrepreneur: 3 } }
        ]
    },
    {
        id: 10,
        question: "After completing this summer program, success for you means...",
        answers: [
            { text: "Building and deploying a functional AI model or application", scores: { architect: 3, strategist: 0, thinker: 1, entrepreneur: 1 } },
            { text: "Understanding how to integrate AI strategy into any business", scores: { architect: 0, strategist: 3, thinker: 1, entrepreneur: 2 } },
            { text: "Becoming knowledgeable enough to explain AI to anyone", scores: { architect: 1, strategist: 1, thinker: 3, entrepreneur: 1 } },
            { text: "Having a solid business plan or pitch deck for an AI venture", scores: { architect: 0, strategist: 2, thinker: 0, entrepreneur: 3 } }
        ]
    }
];

// Persona Content Data
const personaContent = {
    architect: {
        title: "The Technical Architect",
        subtitle: "You're hands-on and love creating with code",
        profile: "You're drawn to the technical heart of AI—the algorithms, the code, the models. You don't just want to use AI tools; you want to understand how they work and build your own. You think in data, patterns, and optimization. Your superpower is turning complex technical concepts into functioning solutions.",
        fitOverview: `<h3>The Technical Focus You Need:</h3>
            <ul>
                <li><strong>57% of curriculum</strong> is pure AI-technical content (17 out of 30 sessions)</li>
                <li>Hands-on workshops with real tools: Python, TensorFlow/PyTorch, Docker, Git</li>
                <li>Build from scratch: regression models → neural networks → deployed applications</li>
            </ul>`,
        weekBreakdown: `<h3>Week-by-Week Breakdown:</h3>
            <div class="week-item">
                <h4>Week 1 (80% Technical): Foundation Building</h4>
                <ul>
                    <li>Machine Learning, Deep Learning, NLP fundamentals</li>
                    <li>Workshop: Data cleaning, exploration, and building your first model</li>
                    <li>Train an NLP sentiment analysis model with Python</li>
                </ul>
            </div>
            <div class="week-item">
                <h4>Week 2 (60% Technical): Advanced Techniques</h4>
                <ul>
                    <li>CNNs & Image Analytics: Build an image classifier</li>
                    <li>Time-Series Forecasting: Work with ARIMA/Prophet on real sales data</li>
                    <li>Company Visit: AI lab at a manufacturing firm</li>
                </ul>
            </div>
            <div class="week-item">
                <h4>Week 3 (30% Technical, but Critical): Deployment & Demo</h4>
                <ul>
                    <li>MLOps: Docker and CI/CD pipelines to deploy your model</li>
                    <li>Lead your team's technical implementation</li>
                    <li>Demo Day: Present a functioning AI model to industry professionals</li>
                </ul>
            </div>`,
        standoutMoment: `<h3>Your Standout Moment:</h3>
            <p>Demo Day (July 23-24) - you'll present a fully-functioning, deployed AI model. Not theoretical. Real code, real results.</p>`,
        careerPath: `<h3>Career Path:</h3>
            <p><strong>→ Machine Learning Engineer, Data Scientist, AI Researcher</strong> at companies like Google, Meta, OpenAI, Tesla</p>`,
        challenge: `<h3>Your Challenge:</h3>
            <p>Use Week 3's business sessions to learn how to communicate ROI. The best engineers know how to sell their technical skills.</p>`
    },
    strategist: {
        title: "The Business Strategist",
        subtitle: "You see AI as a business tool, not just tech",
        profile: "You see AI as a business accelerator, not just a technology. While others geek out over algorithms, you're thinking: 'How does this drive revenue? Reduce costs? Create competitive advantage?' You're the future VP of Strategy, Product Manager, or Consultant who makes AI actually work in the real world.",
        fitOverview: `<h3>The Business Edge You're Looking For:</h3>
            <ul>
                <li><strong>43% of curriculum</strong> is business-oriented (13 out of 30 sessions)</li>
                <li>3 company visits showing real-world AI implementation and ROI</li>
                <li>Case studies from FinTech, E-Commerce, Manufacturing, and Consulting</li>
            </ul>`,
        weekBreakdown: `<h3>Week-by-Week Breakdown:</h3>
            <div class="week-item">
                <h4>Week 1 (20% Business): Learn the Language</h4>
                <ul>
                    <li>AI in Business overview - where AI creates value across industries</li>
                    <li>Ethics & Governance - business risks (bias, compliance, privacy)</li>
                    <li>Case Study: AI Failures & Lessons - learn from mistakes</li>
                    <li>Company Visit: FinTech startup's AI team</li>
                </ul>
            </div>
            <div class="week-item">
                <h4>Week 2 (40% Business): Real Applications</h4>
                <ul>
                    <li>AI in Marketing & Sales: Recommendation engines, personalization</li>
                    <li>AI in Operations: Optimization, predictive maintenance, robotics</li>
                    <li>Case Studies: E-Commerce AI success stories</li>
                    <li>Company Visit: Manufacturing AI ROI in action</li>
                </ul>
            </div>
            <div class="week-item">
                <h4>Week 3 (70% Business): Your Power Week</h4>
                <ul>
                    <li>AI Strategy & ROI - building the business case for investment</li>
                    <li>Investor Pitching Workshop - pitch deck essentials, storytelling, feedback</li>
                    <li>Company Visit: AI consultancy showing enterprise advisory</li>
                    <li>Demo Day: Present your AI business case to industry judges</li>
                </ul>
            </div>`,
        standoutMoment: `<h3>Your Standout Moment:</h3>
            <p>Investor Pitching (July 22) + Demo Day (July 23-24). Craft a pitch deck with clear ROI and present to industry professionals. MBA-level training at age 16-20.</p>`,
        careerPath: `<h3>Career Path:</h3>
            <p><strong>→ Product Manager, Strategy Consultant, Business Analyst, VP of Digital Transformation</strong> at McKinsey/BCG or Fortune 500 companies</p>`,
        challenge: `<h3>Your Challenge:</h3>
            <p>Don't skip the technical workshops! The best strategists know enough code to be dangerous. Build your technical literacy in Weeks 1-2.</p>`
    },
    thinker: {
        title: "The Visionary Thinker",
        subtitle: "You want to understand AI's bigger impact",
        profile: "You're not just interested in WHAT AI can do, but WHY it matters and WHERE it's taking us. You think about AI's impact on jobs, society, ethics, and humanity's future. You're the future policy maker, researcher, educator, or ethical leader ensuring AI serves humanity well.",
        fitOverview: `<h3>The Depth You're Craving:</h3>
            <ul>
                <li>Engage with ALL 30 sessions through your unique lens</li>
                <li>Deep dive into Ethics & Governance - the heart of responsible AI</li>
                <li>Learn technical foundations (essential for credibility in policy/ethics)</li>
            </ul>`,
        weekBreakdown: `<h3>Week-by-Week Breakdown:</h3>
            <div class="week-item">
                <h4>Week 1 (40% Conceptual Focus): Building Context</h4>
                <ul>
                    <li>AI fundamentals: ML, DL, NLP - building your vocabulary</li>
                    <li><strong>Your Power Day:</strong> Ethics & Governance in AI - algorithmic bias, privacy, GDPR, regulation</li>
                    <li>Case Study: Real AI failures (facial recognition bias, hiring algorithms gone wrong)</li>
                </ul>
            </div>
            <div class="week-item">
                <h4>Week 2 (30% Conceptual): Breadth of Impact</h4>
                <ul>
                    <li>NLP: How chatbots shape communication</li>
                    <li>AI in Marketing: Personalization vs. privacy</li>
                    <li>AI in Operations: Automation's impact on jobs</li>
                    <li>Every session connects technology to societal consequences</li>
                </ul>
            </div>
            <div class="week-item">
                <h4>Week 3 (40% Conceptual): Communication & Influence</h4>
                <ul>
                    <li>AI Strategy: How business decisions drive adoption</li>
                    <li>Deployment: Gap between lab models and real-world consequences</li>
                    <li>Your Project: Likely focused on responsible AI, explainability, or social impact</li>
                    <li>Demo Day: Present an AI project that's innovative AND responsible</li>
                </ul>
            </div>`,
        standoutMoment: `<h3>Your Standout Moment:</h3>
            <p>Demo Day - prove that thoughtful, ethical AI is better AI. You'll bridge the gap between innovation and responsibility.</p>`,
        careerPath: `<h3>Career Path:</h3>
            <p><strong>→ AI Policy Advisor, Ethics Researcher, Tech Journalist, Educator</strong> at organizations like Partnership on AI, government bodies, think tanks, academia</p>`,
        challenge: `<h3>Your Challenge:</h3>
            <p>Don't be intimidated by technical content! The most influential AI voices have strong technical foundations. Build yours in Weeks 1-2.</p>`
    },
    entrepreneur: {
        title: "The Entrepreneur",
        subtitle: "You're ready to build and launch with AI",
        profile: "You don't just want to learn about AI—you want to BUILD with it, LAUNCH with it, and WIN with it. You see AI as your competitive weapon. You're the future founder who'll leave this program with a prototype, a pitch deck, and investor-ready confidence.",
        fitOverview: `<h3>The Launchpad You Need:</h3>
            <ul>
                <li>Your project IS your startup - build something market-ready</li>
                <li>3 company visits = 3 networking opportunities with founders and decision-makers</li>
                <li>Investor pitch training + Demo Day = practice for the real thing</li>
                <li>Barcelona's startup ecosystem at your fingertips</li>
            </ul>`,
        weekBreakdown: `<h3>Week-by-Week Breakdown:</h3>
            <div class="week-item">
                <h4>Week 1 (30% Entrepreneurial): Rapid Skill Acquisition</h4>
                <ul>
                    <li>AI in Business: Spot opportunities across industries</li>
                    <li>Build enough technical skills to be credible with investors</li>
                    <li><strong>Friday:</strong> Form your team - choose your co-founders wisely</li>
                    <li>Company Visit: FinTech startup - network with founders</li>
                </ul>
            </div>
            <div class="week-item">
                <h4>Week 2 (50% Entrepreneurial): Finding Your Edge</h4>
                <ul>
                    <li>Explore AI applications: image analysis, forecasting, marketing automation, operations</li>
                    <li>Case Study: E-Commerce AI - learn product-market fit</li>
                    <li>Company Visits: See AI ROI, meet potential clients/partners</li>
                    <li>Every session asks: "Can I build a business around this?"</li>
                </ul>
            </div>
            <div class="week-item">
                <h4>Week 3 (80% Entrepreneurial): GO TIME</h4>
                <ul>
                    <li><strong>Monday:</strong> AI Strategy & ROI - build the business case investors demand</li>
                    <li><strong>Tuesday:</strong> MLOps & Deployment - understand what it takes to ship product</li>
                    <li><strong>Wednesday:</strong> Investor Pitching Workshop with rehearsal and mentor feedback</li>
                    <li><strong>Demo Day:</strong> PITCH to industry professionals - your first real pitch</li>
                </ul>
            </div>`,
        standoutMoment: `<h3>Your Standout Moment:</h3>
            <p>Demo Day is your TechCrunch Disrupt moment. Walk away with: a polished pitch deck, working prototype, validation insights, and connections that could lead to funding or customers.</p>`,
        careerPath: `<h3>Career Path:</h3>
            <p><strong>→ Founder/CEO of your own AI company</strong> → Launch beta → First customers → Accelerators (Y Combinator, Techstars) → Series A</p>`,
        challenge: `<h3>Your Challenge:</h3>
            <p>Don't do everything yourself. Week 1, recruit a technical co-founder from the cohort. The best startups have balanced teams—vision + execution.</p>`
    }
};

// Quiz State
let currentQuestionIndex = 0;
let userAnswers = [];
let scores = {
    architect: 0,
    strategist: 0,
    thinker: 0,
    entrepreneur: 0
};

// Start Quiz Function
function startQuiz() {
    window.location.href = 'quiz.html';
}

// Initialize Quiz
function initQuiz() {
    if (window.location.pathname.includes('quiz.html')) {
        displayQuestion();
    }
}

// Display Current Question
function displayQuestion() {
    const question = quizQuestions[currentQuestionIndex];
    const container = document.getElementById('questionContainer');
    
    let html = `
        <h2 class="question-title">${question.question}</h2>
        <div class="answer-options">
    `;
    
    question.answers.forEach((answer, index) => {
        const isSelected = userAnswers[currentQuestionIndex] === index ? 'selected' : '';
        html += `
            <div class="answer-option ${isSelected}" onclick="selectAnswer(${index})">
                ${answer.text}
            </div>
        `;
    });
    
    html += '</div>';
    container.innerHTML = html;
    
    // Update progress
    updateProgress();
    
    // Update navigation buttons
    updateNavigationButtons();
}

// Select Answer
function selectAnswer(answerIndex) {
    userAnswers[currentQuestionIndex] = answerIndex;
    
    // Visual feedback
    const options = document.querySelectorAll('.answer-option');
    options.forEach((option, index) => {
        option.classList.toggle('selected', index === answerIndex);
    });
    
    // Enable next button
    document.getElementById('nextBtn').disabled = false;
    
    // Auto-advance after 500ms delay for visual feedback
    setTimeout(() => {
        nextQuestion();
    }, 500);
}

// Next Question
function nextQuestion() {
    if (userAnswers[currentQuestionIndex] === undefined) {
        return;
    }
    
    // Calculate scores for current answer
    const question = quizQuestions[currentQuestionIndex];
    const selectedAnswer = question.answers[userAnswers[currentQuestionIndex]];
    
    scores.architect += selectedAnswer.scores.architect;
    scores.strategist += selectedAnswer.scores.strategist;
    scores.thinker += selectedAnswer.scores.thinker;
    scores.entrepreneur += selectedAnswer.scores.entrepreneur;
    
    if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        // Quiz completed, save scores and redirect to email capture
        localStorage.setItem('quizScores', JSON.stringify(scores));
        window.location.href = 'email-capture.html';
    }
}

// Previous Question
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        // Subtract previous scores
        const prevQuestion = quizQuestions[currentQuestionIndex];
        if (userAnswers[currentQuestionIndex] !== undefined) {
            const prevAnswer = prevQuestion.answers[userAnswers[currentQuestionIndex]];
            scores.architect -= prevAnswer.scores.architect;
            scores.strategist -= prevAnswer.scores.strategist;
            scores.thinker -= prevAnswer.scores.thinker;
            scores.entrepreneur -= prevAnswer.scores.entrepreneur;
        }
        
        currentQuestionIndex--;
        displayQuestion();
    }
}

// Update Progress Bar
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
        progressBar.style.setProperty('--progress', `${progress}%`);
        progressBar.style.background = `linear-gradient(90deg, #C63228 0%, #F6B661 ${progress}%, #F2F3F4 ${progress}%)`;
    }
    
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
}

// Update Navigation Buttons
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn) {
        prevBtn.style.display = currentQuestionIndex > 0 ? 'block' : 'none';
    }
    
    if (nextBtn) {
        nextBtn.textContent = currentQuestionIndex === quizQuestions.length - 1 ? 'See Results →' : 'Next →';
        nextBtn.disabled = userAnswers[currentQuestionIndex] === undefined;
    }
}

// Display Results
function displayResults() {
    if (!window.location.pathname.includes('results.html')) {
        return;
    }
    
    // Get scores from localStorage
    const storedScores = JSON.parse(localStorage.getItem('quizScores'));
    if (!storedScores) {
        window.location.href = 'index.html';
        return;
    }
    
    // Determine primary persona
    let maxScore = 0;
    let primaryPersona = 'architect';
    
    for (const [persona, score] of Object.entries(storedScores)) {
        if (score > maxScore) {
            maxScore = score;
            primaryPersona = persona;
        }
    }
    
    // Get persona content
    const content = personaContent[primaryPersona];
    
    // Display results
    document.getElementById('personaTitle').textContent = `You're ${content.title}!`;
    document.getElementById('personaSubtitle').textContent = content.subtitle;
    document.getElementById('personaProfile').textContent = content.profile;
    document.getElementById('fitOverview').innerHTML = content.fitOverview;
    document.getElementById('weekBreakdown').innerHTML = content.weekBreakdown;
    document.getElementById('standoutMoment').innerHTML = content.standoutMoment;
    document.getElementById('careerPath').innerHTML = content.careerPath;
    document.getElementById('challenge').innerHTML = content.challenge;
    
    // Store persona for sharing
    localStorage.setItem('userPersona', primaryPersona);
}

// Share Functions
function shareInstagram() {
    const persona = localStorage.getItem('userPersona');
    const personaName = personaContent[persona].title;
    const text = `I'm ${personaName}! Just discovered my AI learning style for GBSB Global Summer School 🚀 #AIBarcelona #SummerSchool`;
    
    // Instagram doesn't support direct sharing via URL, so copy to clipboard
    navigator.clipboard.writeText(text).then(() => {
        alert('Caption copied! Open Instagram and paste it with your post.');
    });
}

function shareLinkedIn() {
    const persona = localStorage.getItem('userPersona');
    const personaName = personaContent[persona].title;
    const text = `I just took the AI Readiness Quiz and discovered I'm ${personaName}! Excited about GBSB Global's AI Summer School in Barcelona. #AILearning #SummerSchool`;
    const url = window.location.href;
    
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&summary=${encodeURIComponent(text)}`;
    window.open(shareUrl, '_blank');
}

function shareWhatsApp() {
    const persona = localStorage.getItem('userPersona');
    const personaName = personaContent[persona].title;
    const text = `I'm ${personaName}! Just discovered my AI learning style for GBSB Global Summer School 🚀`;
    const url = window.location.href;
    
    const shareUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`;
    window.open(shareUrl, '_blank');
}

function downloadResults() {
    alert('PDF download feature coming soon! For now, you can save this page as a PDF using your browser\'s print function (Ctrl/Cmd + P).');
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('quiz.html')) {
        initQuiz();
    } else if (window.location.pathname.includes('results.html')) {
        displayResults();
    }
});

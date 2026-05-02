const projectsSection = document.querySelector('#projects');
const theme = document.querySelector('#theme-btn');

let activeCategory = 'all';

const projects = [
  {
    title: 'Whack-a-Mole: Emoji Edition 🎯',
    category: 'games',
    url: 'https://whack-a-mole-emoji-edition.vercel.app/',
    repoUrl: 'https://github.com/kesterho/whack-a-mole-emojiEdition',
    tags: ['html', 'css', 'javascript'],
    blurb: 'A fast emoji whack-a-mole game with a live play link and the source code on GitHub.',
  },
  {
    title: 'Staircase',
    category: 'aiapp',
    url: 'https://learning-101-zeta.vercel.app/',
    repoUrl: 'https://github.com/kesterho/learning-101',
    ctaLabel: 'Go To App',
    tags: ['ai', 'web-app', 'vercel'],
    blurb: 'AI app project with live deployment on Vercel and source code on GitHub.',
  },
  {
    title: 'Hit Game Predictor 🎮',
    category: 'ml',
    url: 'https://github.com/kesterho/hit_game_predictor/blob/main/1_1_PART1_LESSON1.ipynb',
    tags: ['classification', 'xgboost', 'tabular'],
    blurb: 'Classifier that predicts which video games sell 1M+ copies — from genre, platform, publisher, release year.',
  },
  {
    title: 'Perceptron from Scratch 🧠',
    category: 'ml',
    url: 'https://github.com/kesterho/perceptron_from_scratch/blob/main/1_1_PART1_LESSON2.ipynb',
    tags: ['numpy', 'from-scratch', 'mlp'],
    blurb: 'Built a single neuron in NumPy: forward pass, loss, backprop. Then scaled to an MLP on the 8x8 digits dataset.',
  },
  {
    title: 'MNIST CNN ✍️',
    category: 'vision',
    url: 'https://github.com/kesterho/AI_ML_DL_PROJECTS/blob/main/1_1_PART1_LESSON3.ipynb',
    tags: ['pytorch', 'cnn', 'images'],
    blurb: 'Convolutional neural network in PyTorch that recognises handwritten digits. 98%+ test accuracy.',
  },
  {
    title: 'Terrain Classifier 🏞️',
    category: 'vision',
    url: 'https://github.com/kesterho/AI_ML_DL_PROJECTS/blob/main/1_1_PART1_LESSON4.ipynb',
    tags: ['resnet', 'transfer-learning', 'images'],
    blurb: 'Transfer learning with ResNet-18 on Intel Image Classification — 6 terrain types, 4 approaches compared.',
  },
  {
    title: 'IMDB Sentiment 🎬',
    category: 'nlp',
    url: 'https://github.com/kesterho/AI_ML_DL_PROJECTS/blob/main/1_1_PART1_LESSON5.ipynb',
    tags: ['transformers', 'lstm', 'text'],
    blurb: 'Compared Bag-of-Words, RNN, LSTM, and DistilBERT on movie-review sentiment. Transformers won by a mile.',
  },
  {
    title: 'Selfie → Emoji Mood 😊',
    category: 'aiapp',
    url: 'https://github.com/kesterho/AI_ML_DL_PROJECTS/blob/main/1_1_PART1_LESSON6.ipynb',
    tags: ['gradio', 'huggingface', 'deployed'],
    blurb: 'Live on Hugging Face Spaces. Upload a selfie, get an emoji that matches your vibe. Built with Gradio.',
  },
];


const renderProjects = (list) => {
    const cardsHTML = list.length === 0
        ? `<div class="empty-state">No projects in this category yet. 🙃</div>`
        :  list.map(p => `
            <article class="project-card">
            <span class="category">${p.category}</span>
            <h3>${p.title}</h3>
            <p>${p.blurb}</p>
            <div class="tags">
                ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
            </div>
            <div class="project-links">
              ${p.url
                ? `<a class="chip project-link lime" href="${p.url}" target="_blank" rel="noopener noreferrer">${p.ctaLabel || (p.repoUrl ? 'Play Game' : 'Open Project')}</a>`
                : ''}
              ${p.repoUrl
                ? `<a class="chip project-link plum" href="${p.repoUrl}" target="_blank" rel="noopener noreferrer">GitHub</a>`
                : ''}
            </div>
            </article>
      `).join('');

    projectsSection.innerHTML = `
    <div class="projects-header">
      <h2>Projects 🚀</h2>
      <span class="count">${list.length} of ${projects.length}</span>
    </div>

    <div class="filters">
      <button class="chip filter-btn ${activeCategory === 'all'    ? 'active' : ''}" data-category="all">All</button>
      <button class="chip filter-btn ${activeCategory === 'games'  ? 'active' : ''}" data-category="games">Games</button>
      <button class="chip filter-btn ${activeCategory === 'ml'     ? 'active' : ''}" data-category="ml">ML</button>
      <button class="chip filter-btn ${activeCategory === 'vision' ? 'active' : ''}" data-category="vision">Vision</button>
      <button class="chip filter-btn ${activeCategory === 'nlp'    ? 'active' : ''}" data-category="nlp">NLP</button>
      <button class="chip filter-btn ${activeCategory === 'aiapp'  ? 'active' : ''}" data-category="aiapp">AI App</button>
    </div>

    <div class="project-grid">
      ${cardsHTML}
    </div>
  `;

  attachFilterListeners();

}

const attachFilterListeners = () => {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeCategory = btn.dataset.category;
      const filtered = activeCategory === 'all'
        ? projects
        : projects.filter(p => p.category === activeCategory);
      renderProjects(filtered);
    });
  });
};

// Dark mode toggle
theme.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  // Optionally, change icon
  theme.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

renderProjects(projects);
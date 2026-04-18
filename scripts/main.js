const projectsSection = document.querySelector('#projects');
const theme = document.querySelector('#theme-btn');

let activeCategory = 'all';

const projects = [
  {
    title: 'Hit Game Predictor 🎮',
    category: 'ml',
    tags: ['classification', 'xgboost', 'tabular'],
    blurb: 'Classifier that predicts which video games sell 1M+ copies — from genre, platform, publisher, release year.',
  },
  {
    title: 'Perceptron from Scratch 🧠',
    category: 'ml',
    tags: ['numpy', 'from-scratch', 'mlp'],
    blurb: 'Built a single neuron in NumPy: forward pass, loss, backprop. Then scaled to an MLP on the 8x8 digits dataset.',
  },
  {
    title: 'MNIST CNN ✍️',
    category: 'vision',
    tags: ['pytorch', 'cnn', 'images'],
    blurb: 'Convolutional neural network in PyTorch that recognises handwritten digits. 98%+ test accuracy.',
  },
  {
    title: 'Terrain Classifier 🏞️',
    category: 'vision',
    tags: ['resnet', 'transfer-learning', 'images'],
    blurb: 'Transfer learning with ResNet-18 on Intel Image Classification — 6 terrain types, 4 approaches compared.',
  },
  {
    title: 'IMDB Sentiment 🎬',
    category: 'nlp',
    tags: ['transformers', 'lstm', 'text'],
    blurb: 'Compared Bag-of-Words, RNN, LSTM, and DistilBERT on movie-review sentiment. Transformers won by a mile.',
  },
  {
    title: 'Selfie → Emoji Mood 😊',
    category: 'aiapp',
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
            </article>
      `).join('');

    projectsSection.innerHTML = `
    <div class="projects-header">
      <h2>Projects 🚀</h2>
      <span class="count">${list.length} of ${projects.length}</span>
    </div>

    <div class="filters">
      <button class="chip filter-btn ${activeCategory === 'all'    ? 'active' : ''}" data-category="all">All</button>
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
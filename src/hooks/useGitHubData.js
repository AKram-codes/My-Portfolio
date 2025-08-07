import { useState, useEffect } from 'react';

const GITHUB_USERNAME = 'AKram-codes'; // Replace with your GitHub username

export const useGitHubData = () => {
  const [data, setData] = useState({
    user: null,
    repos: [],
    loading: true,
    error: null
  });

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch user profile
        const userResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        const user = await userResponse.json();

        // Fetch repositories
        const reposResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`);
        const repos = await reposResponse.json();

        // Filter to get only original repositories (not forks)
        const originalRepos = repos
          .filter(repo => !repo.fork)
          .map(repo => ({
            id: repo.id,
            name: repo.name,
            description: repo.description || 'No description available',
            html_url: repo.html_url,
            homepage: repo.homepage,
            language: repo.language,
            stargazers_count: repo.stargazers_count,
            forks_count: repo.forks_count,
            topics: repo.topics || [],
            updated_at: repo.updated_at,
            created_at: repo.created_at
          }));

        setData({
          user: {
            name: user.name || 'Akram MD',
            bio: user.bio || 'Computer Science Student & Full Stack Developer',
            avatar_url: user.avatar_url,
            followers: user.followers,
            following: user.following,
            public_repos: user.public_repos,
            location: user.location || 'Kavali, AP',
            blog: user.blog,
            company: user.company,
            created_at: user.created_at
          },
          repos: originalRepos,
          loading: false,
          error: null
        });
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
        setData(prev => ({
          ...prev,
          loading: false,
          error: error.message
        }));
      }
    };

    fetchGitHubData();
  }, []);

  return data;
};

// Enhanced project mapping
export const enhanceProjectsWithGitHub = (repos) => {
  const projectMapping = {
    'hand-gesture-recognition': {
      title: 'Hand Gesture recognition',
      category: 'AI, OpenCV',
      featured: true,
      description: 'Developed a real-time hand gesture recognition system using Google’s MediaPipe framework. The project leverages computer vision techniques to track and analyze 21 hand landmarks from webcam input, enabling accurate gesture detection. Custom logic was implemented to classify predefined gestures (e.g., thumbs up, victory sign, closed fist) for interactive applications such as sign language interpretation, virtual mouse control, or touchless UI navigation.',
      features: [
        'Real-time hand tracking using MediaPipe Hands',
      'Scalable framework for adding new gestures',
      'Developed a webcam-based gesture detection system using Google’s MediaPipe (21 landmarks).',
      'Mapped hand gestures to system actions with 95%+ accuracy on real-time video.',
      'Tools: Python, OpenCV, TensorFlow — ran efficiently at 25 FPS on CPU.'
      ]
    },
    'object-detection': {
      title: 'Object Detection using YOLO Model',
      category: 'AI, OpenCV',
      featured: true,
      description: 'An object detection model using YOLOv5 to detect and classify multiple objects in real-time from video feeds and images.',
      features: [
        'Real-time detection with high FPS and accuracy',
        'Bounding boxes and labels over detected objects',
        'Option to switch between CPU and GPU inference',
        'Supports both webcam input and image/video files'
      ]
    },
    'url-shortner': {
      title: 'URL Shortener Application',
      category: 'fullstack', 
      featured: true,
      description: 'Built a full-stack URL shortener web application using Java, Spring Boot, and Spring MVC, enabling users to generate shortened links for long URLs. The application maps long URLs to unique short codes, stores them in a database, and redirects users to the original URL upon access. Designed a clean and responsive front end, and ensured secure, efficient backend logic with RESTful APIs.',
      features: [
        'Integrated PostgeSQL for persistent storage and utilized Spring Data JPA for database operations',
        'Applied frontend frameworks like HTML/CSS and Thymeleaf to build an interactive UI',
        'Followed MVC architecture and deployed the app using tools like Postman and GitHub.'   
      ]
    },
    'flames-game': {
      title: 'Flames Game',
      category: 'DOM Manipulation, JavaScript',
      featured: true,
      description: 'Developed a web-based FLAMES game using HTML, CSS, and JavaScript that predicts relationship compatibility based on two names. The game follows the traditional FLAMES logic—calculating the relationship type as Friendship, Love, Affection, Marriage, Enemy, or Sibling—based on letter eliminations. It’s a fun, interactive project that showcases creative logic implementation and DOM manipulation.',
      features: [
        'FLAMES logic implemented from scratch in JavaScript',
        'Dynamic result display with relationship type and animation',
        'Interactive and visually appealing UI using CSS',
        'Fully responsive design for desktop and mobile'
      ]
    }
  };

  return repos.map(repo => {
    const projectKey = Object.keys(projectMapping).find(key => 
      repo.name.toLowerCase().includes(key) || key.includes(repo.name.toLowerCase())
    );
    
    const projectInfo = projectMapping[projectKey] || {
      title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      category: 'other',
      featured: false,
      description: repo.description,
      features: []
    };
    
    // Get technologies from language and topics
    const technologies = [
      repo.language,
      ...repo.topics
    ].filter(Boolean);

    return {
      ...projectInfo,
      github: repo.html_url,
      demo: repo.homepage,
      technologies,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      lastUpdated: repo.updated_at,
      created: repo.created_at,
      realData: true
    };
  });
}; 

import { Service, Article } from './types';

export const NAV_LINKS = [
  { id: 'index', type: 'section' },
  { id: 'websites', type: 'section' },
  { id: 'tools', type: 'page' },
  { id: 'prompts', type: 'page' },
  { id: 'blog', type: 'page' },
  { id: 'about', type: 'page' },
  { id: 'seo', type: 'page' },
  { id: 'contact', type: 'section' },
];

export const SERVICES: Service[] = [
  // Websites
  {
    id: 1,
    type: 'Website',
    category: 'websites',
    cardImage: 'https://twfik.com/Corporate-Business-Website.png',
    formspreeEndpoint: 'https://formspree.io/f/xblpnbep',
  },
  {
    id: 2,
    type: 'Website',
    category: 'websites',
    cardImage: 'https://twfik.com/E-commerce-Storefront.png',
    formspreeEndpoint: 'https://formspree.io/f/xblpnbep',
  },
  {
    id: 3,
    type: 'Website',
    category: 'websites',
    cardImage: 'https://twfik.com/Personal-Portfolio-Blog.png',
    formspreeEndpoint: 'https://formspree.io/f/xblpnbep',
  },
  // Tools
  {
    id: 4,
    type: 'Tool',
    category: 'tools',
    cardImage: 'https://twfik.com/bodyweight.png',
    formspreeEndpoint: 'https://formspree.io/f/xblpnbep',
    previewUrl: '#',
  },
  // Prompts
  {
    id: 7,
    type: 'Prompt',
    category: 'prompts',
    cardImage: 'https://twfik.com/AIPrompt.png',
    formspreeEndpoint: 'https://formspree.io/f/xblpnbep',
  },
  {
    id: 8,
    type: 'Prompt',
    category: 'prompts',
    cardImage: 'https://twfik.com/AIPrompt.png',
    formspreeEndpoint: 'https://formspree.io/f/xblpnbep',
  },
  {
    id: 9,
    type: 'Prompt',
    category: 'prompts',
    cardImage: 'https://twfik.com/AIPrompt.png',
    formspreeEndpoint: 'https://formspree.io/f/xblpnbep',
  },
];


export const ARTICLES: Article[] = [
  {
    id: 'ai-in-digital-production',
    image: 'https://twfik.com/The-Role-of-AI-in-Modern-Digital-Production.png',
    author: 'Admin',
    date: '2024-07-31',
  },
  {
    id: 'seo-for-chatbots',
    image: 'https://twfik.com/Optimizing-for-Chatbots-and-Voice-Search.png',
    author: 'Admin',
    date: '2024-07-28',
  },
  {
    id: 'future-of-communication',
    image: 'https://twfik.com/The-Future-of-Business-Communication.png',
    author: 'Admin',
    date: '2024-07-25',
  },
];
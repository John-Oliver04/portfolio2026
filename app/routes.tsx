
import { createBrowserRouter } from 'react-router-dom';
import { StartScreen } from './components/StartScreen';
import { LevelSelection } from './components/LevelSelection';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Designs } from './components/Designs';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Layout } from './components/Layout';
import { NotFound } from './components/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: StartScreen },
      { path: 'levels', Component: LevelSelection },
      { path: 'skills', Component: Skills },
      { path: 'projects', Component: Projects },
      { path: 'designs', Component: Designs },
      { path: 'experience', Component: Experience },
      { path: 'achievements', Component: Achievements },
      { path: 'contact', Component: Contact },
      { path: '*', Component: NotFound },
    ],
  },
]);
import {
  collection,
  create,
  visitable
} from 'ember-cli-page-object';
import projectCard from './components/project-card';

export default create({
  visit: visitable('/projects'),
  projects: collection('.project-card', projectCard)
});

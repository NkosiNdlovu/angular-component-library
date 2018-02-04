import { Injectable } from '@angular/core';

export interface DocItem {
  id: string;
  name: string;
  packageName?: string;
  examples?: string[];
}

export interface DocCategory {
  id: string;
  name: string;
  items: DocItem[];
  summary?: string;
}

const CDK = 'cdk';
const COMPONENTS = 'components';
export const SECTIONS = {
  [COMPONENTS]: 'Components',
  [CDK]: 'CDK',
};


const DOCS: { [key: string]: DocCategory[] } = {
  [COMPONENTS]: [
    {
      id: 'forms',
      name: 'Library components',
      items: [
        { id: 'autocomplete', name: 'Autocomplete', examples: ['autocomplete'] },
        { id: 'multiselect', name: 'Multiselect dropdown', examples: ['multiselect'] },
        { id: 'layout', name: 'Layout', examples: ['layout'] },
        { id: 'groupbutton', name: 'Group button', examples: ['groupbutton'] },
        {
          id: 'datepicker',
          name: 'Datepicker',
          examples: [
            'datepicker-overview',
            'datepicker-start-view',
            'datepicker-value',
            'datepicker-min-max',
            'datepicker-filter',
            'datepicker-events',
            'datepicker-disabled',
            'datepicker-touch',
            'datepicker-api',
            'datepicker-locale',
            'datepicker-moment',
            'datepicker-formats',

          ]
        },
      ]
    },
    {
      id: 'forms',
      name: 'Component styling',
      items: [
        { id: 'tabs', name: 'Tabs', examples: ['tabs'] }
      ]
    },
  ],
  [CDK]: [
    {
      id: 'component-composition',
      name: 'Common Behaviors',
      items: [
        { id: 'a11y', name: 'Accessibility', examples: [] },
        { id: 'observers', name: 'Observers', examples: [] },
        { id: 'layout', name: 'Layout', examples: [] },
        { id: 'overlay', name: 'Overlay', examples: [] },
        { id: 'portal', name: 'Portal', examples: [] },
        { id: 'bidi', name: 'Bidirectionality', examples: [] },
        { id: 'scrolling', name: 'Scrolling', examples: [] },
      ]
    },
    {
      id: 'components',
      name: 'Components',
      items: [
        { id: 'table', name: 'Table', examples: [] },
        { id: 'stepper', name: 'Stepper', examples: [] },

      ]
    },
    // TODO(jelbourn): re-add utilities and a11y as top-level categories once we can generate
    // their API docs with dgeni. Currently our setup doesn't generate API docs for constants
    // and standalone functions (much of the utilities) and we have no way of generating API
    // docs more granularly than directory-level (within a11y) (same for viewport).
  ]
};

for (let category of DOCS[COMPONENTS]) {
  for (let doc of category.items) {
    doc.packageName = 'material';
  }
}

for (let category of DOCS[CDK]) {
  for (let doc of category.items) {
    doc.packageName = 'cdk';
  }
}

const ALL_COMPONENTS = DOCS[COMPONENTS].reduce(
  (result, category) => result.concat(category.items), []);
const ALL_CDK = DOCS[CDK].reduce((result, cdk) => result.concat(cdk.items), []);
const ALL_DOCS = ALL_COMPONENTS.concat(ALL_CDK);
const ALL_CATEGORIES = DOCS[COMPONENTS].concat(DOCS[CDK]);

@Injectable()
export class DocumentationItems {
  getCategories(section: string): DocCategory[] {
    return DOCS[section];
  }

  getItems(section: string): DocItem[] {
    if (section === COMPONENTS) {
      return ALL_COMPONENTS;
    }
    if (section === CDK) {
      return ALL_CDK;
    }
    return [];
  }

  getItemById(id: string, section: string): DocItem {
    const sectionLookup = section == 'cdk' ? 'cdk' : 'material';
    return ALL_DOCS.find(doc => doc.id === id && doc.packageName == sectionLookup);
  }

  getCategoryById(id: string): DocCategory {
    return ALL_CATEGORIES.find(c => c.id == id);
  }
}

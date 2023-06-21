import { Store } from './store';

type Settings = {
  theme: 'light' | 'dark',
  features: {
    copilot: boolean,
    gpt: boolean
  }
  editor: {
    font: {
      family: string,
      weight: number
    }
  },
  telemetry: {
    diagnostics: boolean,
    metrics: boolean
  }
};

const store = new Store<Settings>();

store.stream('editor.font', (value) => {
  console.log(value);
});

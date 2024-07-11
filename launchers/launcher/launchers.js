import { PlatformStateContext, NerdletStateContext } from 'nr1';

export default {
  nerdlet: {
    displayName: 'Generac Dashboard Widget',
    description: 'A custom widget for Generac dashboard',
    entities: {
      platformState: PlatformStateContext,
      nerdletState: NerdletStateContext,
    },
  },
};
